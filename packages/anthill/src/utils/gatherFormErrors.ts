import { type BaseIssue, getDotPath } from "valibot";
import type { FormErrors, FormSchema } from "../index.js";

export const gatherFormErrors = <Schema extends FormSchema>(
  issues: Array<BaseIssue<unknown>>,
  errors: FormErrors<Schema>,
) => {
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

    if (issue.issues) gatherFormErrors<Schema>(issue.issues, errors);
  }
};
