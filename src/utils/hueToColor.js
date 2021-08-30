/*

This software or document includes material copied from or derived from [CSS Color Module Level 4: Editor's Draft](https://drafts.csswg.org/css-color-4). Copyright © 2021 W3C® (MIT, ERCIM, Keio, Beihang).

---

This work is being provided by the copyright holders under the following license.

License

By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

- The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.
- Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included.
- Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [YEAR] W3C® (MIT, ERCIM, Keio, Beihang)."

Disclaimers

THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.

*/

//
// https://drafts.csswg.org/css-color-4/multiply-matrices.js
//

function multiplyMatrices(A, B) {
  let m = A.length;

  if (!Array.isArray(A[0])) {
    // A is vector, convert to [[a, b, c, ...]]
    A = [A];
  }

  if (!Array.isArray(B[0])) {
    // B is vector, convert to [[a], [b], [c], ...]]
    B = B.map((x) => [x]);
  }

  let p = B[0].length;
  let B_cols = B[0].map((_, i) => B.map((x) => x[i])); // transpose B
  let product = A.map((row) =>
    B_cols.map((col) => {
      if (!Array.isArray(row)) {
        return col.reduce((a, c) => a + c * row, 0);
      }

      return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
    }),
  );

  if (m === 1) {
    product = product[0]; // Avoid [[a, b, c, ...]]
  }

  if (p === 1) {
    return product.map((x) => x[0]); // Avoid [[a], [b], [c], ...]]
  }

  return product;
}

//
// https://drafts.csswg.org/css-color-4/conversions.js
//

function Lab_to_XYZ(Lab) {
  // Convert Lab to D50-adapted XYZ
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  var Îº = 24389 / 27; // 29^3/3^3
  var Îµ = 216 / 24389; // 6^3/29^3
  var white = [0.96422, 1.0, 0.82521]; // D50 reference white
  var f = [];

  // compute f, starting with the luminance-related term
  f[1] = (Lab[0] + 16) / 116;
  f[0] = Lab[1] / 500 + f[1];
  f[2] = f[1] - Lab[2] / 200;

  // compute xyz
  var xyz = [
    Math.pow(f[0], 3) > Îµ ? Math.pow(f[0], 3) : (116 * f[0] - 16) / Îº,
    Lab[0] > Îº * Îµ ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / Îº,
    Math.pow(f[2], 3) > Îµ ? Math.pow(f[2], 3) : (116 * f[2] - 16) / Îº,
  ];

  // Compute XYZ by scaling xyz by reference white
  return xyz.map((value, i) => value * white[i]);
}

function LCH_to_Lab(LCH) {
  // Convert from polar form
  return [
    LCH[0], // L is still L
    LCH[1] * Math.cos((LCH[2] * Math.PI) / 180), // a
    LCH[1] * Math.sin((LCH[2] * Math.PI) / 180), // b
  ];
}

function D50_to_D65(XYZ) {
  // Bradford chromatic adaptation from D50 to D65
  var M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753],
  ];

  return multiplyMatrices(M, XYZ);
}

function XYZ_to_lin_sRGB(XYZ) {
  // convert XYZ to linear-light sRGB

  var M = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
  ];

  return multiplyMatrices(M, XYZ);
}

function gam_sRGB(RGB) {
  // convert an array of linear-light sRGB values in the range 0.0-1.0
  // to gamma corrected form
  // https://en.wikipedia.org/wiki/SRGB
  // Extended transfer function:
  // For negative values, linear portion extends on reflection
  // of axis, then uses reflected pow below that
  return RGB.map(function (val) {
    let sign = val < 0 ? -1 : 1;
    let abs = Math.abs(val);

    if (abs > 0.0031308) {
      return sign * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
    }

    return 12.92 * val;
  });
}

function LCH_to_sRGB(LCH) {
  // convert an array of CIE LCH values
  // to CIE Lab, and then to XYZ,
  // adapt from D50 to D65,
  // then convert XYZ to linear-light sRGB
  // and finally to gamma corrected sRGB
  // for in-gamut colors, components are in the 0.0 to 1.0 range
  // out of gamut colors may have negative components
  // or components greater than 1.0
  // so check for that :)

  return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
}

//
// https://github.com/LeaVerou/css.land/blob/master/lch/lch.js
//

function force_into_gamut(l, c, h, isLCH_within) {
  // Moves an lch color into the sRGB gamut
  // by holding the l and h steady,
  // and adjusting the c via binary-search
  // until the color is on the sRGB boundary.
  if (isLCH_within(l, c, h)) {
    return [l, c, h];
  }

  let hiC = c;
  let loC = 0;
  const ε = 0.0001;
  c /= 2;

  // .0001 chosen fairly arbitrarily as "close enough"
  while (hiC - loC > ε) {
    if (isLCH_within(l, c, h)) {
      loC = c;
    } else {
      hiC = c;
    }
    c = (hiC + loC) / 2;
  }

  return [l, c, h];
}

function isLCH_within_sRGB(l, c, h) {
  var rgb = LCH_to_sRGB([+l, +c, +h]);
  const ε = 0.000005;
  return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

function alpha_to_string(a = 100) {
  return a < 100 ? ` / ${a}%` : "";
}

function LCH_to_sRGB_string(l, c, h, a = 100, forceInGamut = false) {
  if (forceInGamut) {
    [l, c, h] = force_into_gamut(l, c, h, isLCH_within_sRGB);
  }

  return (
    "rgb(" +
    LCH_to_sRGB([+l, +c, +h])
      .map((x) => {
        return Math.round(x * 10000) / 100 + "%";
      })
      .join(" ") +
    alpha_to_string(a) +
    ")"
  );
}

//
// custom
//

const hueToColor = (hue) => LCH_to_sRGB_string(60, 85, hue, 100, true);

export default hueToColor;
