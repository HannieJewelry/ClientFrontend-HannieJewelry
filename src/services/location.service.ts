import axiosInstance from "../utils/axiosInstance";
import { 
    CountriesResponse, 
    CountryWithProvincesResponse, 
    DistrictsResponse, 
    WardsResponse 
} from "./model/location.model";

export const getCountries = async (): Promise<CountriesResponse> => {
    const { data } = await axiosInstance.get("/api/countries");
    return data;
};

export const getProvincesByCountry = async (countryId: number): Promise<CountryWithProvincesResponse> => {
    const { data } = await axiosInstance.get(`/api/countries/${countryId}/provinces`);
    return data;
};

export const getDistrictsByProvince = async (provinceId: number): Promise<DistrictsResponse> => {
    const { data } = await axiosInstance.get(`/api/districts?province_id=${provinceId}`);
    return data;
};

export const getWardsByDistrict = async (districtId: number): Promise<WardsResponse> => {
    const { data } = await axiosInstance.get(`/api/wards?district_id=${districtId}`);
    return data;
}; 