import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../location.service";

export const useCountriesQuery = () => {
    return useQuery({
        queryKey: ['countries'],
        queryFn: getCountries,
    });
}; 