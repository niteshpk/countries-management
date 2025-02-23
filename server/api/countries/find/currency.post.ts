import { countries } from "@doubco/countries";
import useErrorResponse from "~/composables/useErrorResponse";
import useFilteredInput from "~/composables/useFilteredInput";

export default defineEventHandler(async (event) => {
  const { currency } = await readBody(event);

  const countryList = Object.values(countries).filter((country) =>
    country.currency?.toLowerCase().includes(useFilteredInput(currency))
  );

  if (!countryList?.length) {
    return useErrorResponse(`Country with currency ${currency} not found.`);
  }

  return {
    success: true,
    error: false,
    message: "Successfully fetched countries",
    countries: countryList,
  };
});
