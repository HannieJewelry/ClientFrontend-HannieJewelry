export interface CartChangeBody {
    line: string;
    quantity: number;
}

export interface CartAttributes {
    shipping_instructions: string;
    shipping_company: string;
    shipping_method_id: string;
    shipping_city: string;
    shipping_province_id: string;
    shipping_ward_id: string;
    shipping_district_id: string;
    payment_method_id: string;
    full_name: string;
    shipping_country_id: string;
    phone_number: string;
    shipping_address: string;
    email: string;
    shipping_zip_code: string;
}

export interface CartItem {
    id: string | number;
    variant_id?: string | number;
    price: number;
    qty: number;
    [key: string]: any;
}

export interface Cart {
    id: string;
    token: string;
    item_count: number;
    total_price: number;
    items: CartItem[];
    attributes: CartAttributes;
}

export interface CartResponse {
    message: string;
    code: number;
    data: Cart;
}
