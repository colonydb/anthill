import { type BaseIssue, getDotPath } from "valibot";
import type { FormErrors } from "../index.js";

export const gatherFormErrors = (issues: Array<BaseIssue<unknown>>) => {
  const errors: FormErrors = {
    count: 0,
    nested: {},
    root: [],
  };

  const { nested, root } = errors;

  for (const issue of issues) {
    const name = getDotPath(issue);

    errors.count += 1;

    if (name) {
      nested[name] = [
        ...(Array.isArray(nested[name]) ? nested[name] : []),
        {
          key: errors.count.toString(10),
          message: issue.message,
        },
      ];
    } else {
      root.push({
        key: errors.count.toString(10),
        message: issue.message,
      });
    }

    if (issue.issues) {
      const subErrors = gatherFormErrors(issue.issues);

      errors.count += subErrors.count;
      errors.nested = { ...errors.nested, ...subErrors.nested };
      errors.root = [...errors.root, ...subErrors.root];
    }
  }

  return errors;
};
