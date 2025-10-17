"use client";

import { useContext } from "react";
import { Card } from "./Card.js";
import { CardContent } from "./CardContent.js";
import { Dialog } from "./Dialog.js";
import { DialogHeader } from "./DialogHeader.js";
import { FormContext } from "./FormContext.js";
import { FormErrorBanner } from "./FormErrorBanner.js";
import { Heading } from "./Heading.js";
import { Icon } from "./Icon.js";
import { Inline } from "./Inline.js";

type Props = {
  iconOnly?: boolean;
};

export const FormStatus = ({ iconOnly = false }: Props) => {
  const formContext = useContext(FormContext);

  const issueCount = formContext?.errors?.count ?? 0;

  return formContext?.status === "pending" ? (
    <Inline color="gray">
      <Icon symbol="Processing" />
      {iconOnly ? null : " Processing…"}
    </Inline>
  ) : formContext?.status === "error" ? (
    <Inline color="red">
      {iconOnly ? (
        <Dialog
          dismissible
          icon={<Icon symbol="Warning" />}
          render={(close) => (
            <Card
              header={
                <DialogHeader close={close}>
                  <Heading>Errors</Heading>
                </DialogHeader>
              }
            >
              <CardContent>
                <FormErrorBanner
                  errors={(formContext.errors?.root ?? []).concat(
                    Object.values(formContext.errors?.nested ?? []).flat(),
                  )}
                />
              </CardContent>
            </Card>
          )}
          title={issueCount === 1 ? "1 issue" : `${issueCount} issues`}
          width="small"
        />
      ) : (
        <>
          <Icon symbol="Warning" />
          {issueCount === 1 ? " 1 issue" : ` ${issueCount} issues`}
        </>
      )}
    </Inline>
  ) : formContext?.status === "success" ? (
    <Inline color="green">
      <Icon symbol="Tick" />
      {iconOnly ? null : " Success!"}
    </Inline>
  ) : null;
};
