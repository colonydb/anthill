type FullRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type MaxRange<Max extends FullRange> = Max extends 0
  ? 0
  : Max extends 1
    ? 0 | 1
    : Max extends 2
      ? 0 | 1 | 2
      : Max extends 3
        ? 0 | 1 | 2 | 3
        : Max extends 4
          ? 0 | 1 | 2 | 3 | 4
          : Max extends 5
            ? 0 | 1 | 2 | 3 | 4 | 5
            : Max extends 6
              ? 0 | 1 | 2 | 3 | 4 | 5 | 6
              : Max extends 7
                ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
                : Max extends 8
                  ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                  : Max extends 9
                    ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
                    : never;

type MinRange<Min extends FullRange> = Min extends 0
  ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  : Min extends 1
    ? 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    : Min extends 2
      ? 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
      : Min extends 3
        ? 3 | 4 | 5 | 6 | 7 | 8 | 9
        : Min extends 4
          ? 4 | 5 | 6 | 7 | 8 | 9
          : Min extends 5
            ? 5 | 6 | 7 | 8 | 9
            : Min extends 6
              ? 6 | 7 | 8 | 9
              : Min extends 7
                ? 7 | 8 | 9
                : Min extends 8
                  ? 8 | 9
                  : Min extends 9
                    ? 9
                    : never;

export const clampRange = <Min extends FullRange, Max extends FullRange>(value: number, min: Min, max: Max) =>
  Math.min(Math.max(Math.round(value), min), max) as MinRange<Min> & MaxRange<Max>;
