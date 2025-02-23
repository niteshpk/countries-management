import { countries } from "@doubco/countries";
import useSuccessResponse from "~/composables/useSuccessResponse";

export default defineEventHandler(() => {
  return useSuccessResponse(
    "countries",
    countries,
    "Successfully fetched countries list"
  );
});
