import { useQuery } from "@tanstack/react-query";
import { getProvincesByCountry } from "../../location.service";

export const useProvincesQuery = (countryId: number) => {
    return useQuery({
        queryKey: ['provinces', countryId],
        queryFn: () => getProvincesByCountry(countryId),
        enabled: !!countryId,
    });
}; 