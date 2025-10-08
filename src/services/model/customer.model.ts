export interface Address {
    id: string;
    address1: string;
    address2: string;
    city: string;
    company: string;
    country: string | null;
    country_code: string;
    district: string | null;
    district_code: string;
    first_name: string;
    default: boolean;
    last_name: string;
    name: string;
    phone: string;
    province: string | null;
    province_code: string;
    ward: string | null;
    ward_code: string;
    zip: string;
}

export interface Customer {
    id: string;
    accepts_marketing: boolean;
    addresses: Address[];
    avatar_url: string;
    birthday: string;
    created_at: string;
    email: string;
    first_name: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    group_name: string | null;
    last_name: string;
    last_order_date: string | null;
    last_order_id: string | null;
    last_order_name: string | null;
    note: string | null;
    orders_count: number;
    phone: string | null;
    segments: any[];
    tags: string | null;
    total_paid: number;
    total_spent: number;
    updated_at: string;
    einvoice_info: any;
}

export interface GetProfileResponse {
    customer: Customer;
}
