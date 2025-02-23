import { countries } from "@doubco/countries";
import useErrorResponse from "~/composables/useErrorResponse";
import useFilteredInput from "~/composables/useFilteredInput";

export default defineEventHandler(async (event) => {
  const { capital } = await readBody(event);

  const countryList = Object.values(countries).filter((country) =>
    country.capital?.toLowerCase().includes(useFilteredInput(capital))
  );

  if (!countryList?.length) {
    return useErrorResponse(`Country with capital ${capital} not found.`);
  }

  return {
    success: true,
    error: false,
    message: "Successfully fetched countries",
    countries: countryList,
  };
});
