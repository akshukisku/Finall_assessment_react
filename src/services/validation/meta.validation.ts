import * as yup from "yup";

export const urlvalidation = yup.object({
  url: yup
    .string()
    .required("Website URL is required")
    .url("Please enter a valid URL"),
});

export type UrlSchema = yup.InferType<typeof urlvalidation>;