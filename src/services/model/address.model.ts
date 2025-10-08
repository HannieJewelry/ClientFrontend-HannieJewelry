export interface Address {
    id: string;
    address1: string;
    address2?: string;
    city: string;
    company?: string;
    country?: string;
    country_code: string;
    district?: string;
    district_code: string;
    first_name: string;
    default: boolean;
    last_name: string;
    name?: string;
    phone: string;
    province?: string;
    province_code: string;
    ward?: string;
    ward_code: string;
    zip: string;
}

export interface AddressesResponse {
    message: string;
    code: number;
    data: {
        result: {
            content: Address[];
            page: number;
            size: number;
            total_elements: number;
            total_pages: number;
            sorts: {
                property: string;
                direction: string;
            }[];
        }
    }
}

export interface AddressRequest {
    address: {
        address1: string;
        address2?: string;
        city: string;
        first_name: string;
        last_name: string;
        company?: string;
        phone: string;
        zip: string;
        province_code: string;
        country_code: string;
        district_code: string;
        ward_code: string;
    }
} 