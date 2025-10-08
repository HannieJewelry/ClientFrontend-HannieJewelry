import { useQuery } from "@tanstack/react-query";
import { getWardsByDistrict } from "../../location.service";

export const useWardsQuery = (districtId: number) => {
    return useQuery({
        queryKey: ['wards', districtId],
        queryFn: () => getWardsByDistrict(districtId),
        enabled: !!districtId,
    });
}; 