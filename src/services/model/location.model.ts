import { ApiResponse } from "./ApiResponse.model";

export interface Country {
    id: number;
    code: string;
    name: string;
}

export interface Province {
    id: number;
    code: string;
    name: string;
    country_id: number;
}

export interface District {
    id: number;
    code: string;
    name: string;
    province_id: number;
}

export interface Ward {
    code: string;
    name: string;
    district_id: number;
}

export interface CountriesResponse extends ApiResponse<{
    countries: Country[];
}> {}

export interface CountryWithProvincesResponse extends ApiResponse<{
    country: {
        code: string;
        id: number;
        name: string;
        provinces: Province[];
    }
}> {}

export interface DistrictsResponse extends ApiResponse<{
    districts: District[];
}> {}

export interface WardsResponse extends ApiResponse<{
    wards: Ward[];
}> {} 