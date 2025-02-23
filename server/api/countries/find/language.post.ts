import { countries } from "@doubco/countries";
import useErrorResponse from "~/composables/useErrorResponse";
import useFilteredInput from "~/composables/useFilteredInput";

export default defineEventHandler(async (event) => {
  const { language } = await readBody(event);

  const countryList = Object.values(countries).filter((country) =>
    country.languages?.some((lang) => lang.includes(useFilteredInput(language)))
  );

  if (!countryList?.length) {
    return useErrorResponse(`Country with language ${language} not found.`);
  }

  return {
    success: true,
    error: false,
    message: "Successfully fetched countries",
    countries: countryList,
  };
});
