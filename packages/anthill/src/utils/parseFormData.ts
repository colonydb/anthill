import { type BaseIssue, getDotPath, safeParse } from "valibot";
import type { FormErrors, FormResult, FormSchema } from "../index.js";
import { createFormErrors } from "./createFormErrors.js";

export const parseFormData = <Schema extends FormSchema>(payload: FormData, schema: Schema): FormResult<Schema> => {
  const data = Object.fromEntries(payload.entries());

  const result = safeParse(schema, data, {
    abortPipeEarly: true,
  });

  if (result.success === false) {
    const errors = createFormErrors(schema);
    gatherErrors(result.issues, errors);
    return {
      data,
      errors,
      ok: false,
    };
  }

  return {
    data: result.output,
    ok: true,
  };
};

const gatherErrors = <Schema extends FormSchema>(issues: Array<BaseIssue<unknown>>, errors: FormErrors<Schema>) => {
  const { nested, root } = errors;

  for (const issue of issues) {
    const name = getDotPath(issue);

    errors.count += 1;

    if (name && name in nested && nested[name]) {
      nested[name].push({
        key: errors.count.toString(10),
        message: issue.message,
      });
    } else {
      root.push({
        key: errors.count.toString(10),
        message: issue.message,
      });
    }

    if (issue.issues) gatherErrors<Schema>(issue.issues, errors);
  }
};
