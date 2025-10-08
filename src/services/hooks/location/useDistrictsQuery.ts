import { useQuery } from "@tanstack/react-query";
import { getDistrictsByProvince } from "../../location.service";

export const useDistrictsQuery = (provinceId: number) => {
    return useQuery({
        queryKey: ['districts', provinceId],
        queryFn: () => getDistrictsByProvince(provinceId),
        enabled: !!provinceId,
    });
}; 