import { countries } from "@doubco/countries";
import useErrorResponse from "~/composables/useErrorResponse";
import useFilteredInput from "~/composables/useFilteredInput";

export default defineEventHandler(async (event) => {
  const { code } = await readBody(event);

  const country = Object.values(countries).find((country) =>
    country.code?.includes(useFilteredInput(code))
  );

  if (!country) {
    return useErrorResponse(`Country with code ${code} not found.`);
  }

  return {
    success: true,
    error: false,
    message: "Successfully fetched country",
    country,
  };
});
