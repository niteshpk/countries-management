import { countries } from "@doubco/countries";
import useErrorResponse from "~/composables/useErrorResponse";
import useFilteredInput from "~/composables/useFilteredInput";

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);

  const countryList = Object.values(countries).filter((country) =>
    country.name?.toLowerCase().includes(useFilteredInput(name))
  );

  if (!countryList.length) {
    return useErrorResponse(`Country with name ${name} not found.`);
  }

  return {
    success: true,
    error: false,
    message: "Successfully fetched countries",
    countries: countryList,
  };
});
