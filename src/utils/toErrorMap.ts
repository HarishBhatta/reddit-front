import { FieldError } from "@/gql/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field.toLocaleLowerCase()] = message;
  });
  console.log(errorMap);
  return errorMap;
};
