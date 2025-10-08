export interface CheckoutLineItem {
    id: string;
    seq: number | null;
    price: number;
    quantity: number;
    weight: number;
    unit: string | null;
    attributes: any[];
    components: any[] | null;
    variant_id: number;
    variant_type: string | null;
    product_id: string;
    product_title: string;
    variant_title: string;
    image_url: string | null;
    price_original: number;
    line_price: number;
    line_discount: number | null;
    line_weight: number;
    line_tax: number | null;
    line_amount: number;
    available_quantity: number | null;
    lot_support: any | null;
    variant_unit_id: number | null;
    unit_ratio: any | null;
    requires_shipping: boolean;
    not_allow_promotion: boolean;
    discount_allocations: any[];
}

export interface CheckoutShippingMethod {
    id: number;
    name: string;
    description: string;
    price: number;
    code: string;
}

export interface CheckoutPaymentMethod {
    id: number;
    name: string;
    description: string;
    code: string;
    online: boolean;
    system_type_id: number;
}

export interface UTMParameters {
    [key: string]: string | null;
}

export interface CheckoutData {
    id: string;
    phone_country_code: string;
    phone: string | null;
    full_name: string | null;
    email: string | null;
    email_option: number;
    shipping_address: string | null;
    shipping_city: string | null;
    shipping_zip_code: string | null;
    shipping_company: string | null;
    shipping_country_id: string | null;
    shipping_province_id: string | null;
    shipping_district_id: string | null;
    shipping_ward_id: string | null;
    shipping_method_id: string | null;
    shipping_method_name: string | null;
    payment_method_name: string | null;
    payment_method_id: string | null;
    pay_deposit_only: boolean;
    deposit_required: boolean;
    utm_parameters: UTMParameters;
    deposit_amount: number;
    deposit_codamount: number;
    note: string;
    requires_shipping: boolean;
    created_at: string;
    updated_at: string;
    completed_at: string;
    errors: any[];
    warnings: any[];
    user_errors: any[];
    ready: boolean;
    line_items: CheckoutLineItem[];
    shipping_methods: CheckoutShippingMethod[];
    payment_methods: CheckoutPaymentMethod[];
    discount_allocations: any[];
    gift_cards: any[];
    attributes: any;
    discount: number;
    location_id: string | null;
    location_name: string | null;
    location_country_id: string | null;
    auth_email: string;
    auth_phone: string | null;
    auth_name: string;
    customer_membership: any | null;
    sub_total_before_tax: number;
    sub_total_tax: number;
    sub_total: number;
    shipping_before_tax: number;
    shipping_tax: number;
    shipping: number;
    total_tax_included: number;
    total_tax_not_included: number;
    total: number;
    order: any | null;
    channel: string;
    disallow_loyalty_program: boolean;
    send_notify: boolean;
    send_receipt: boolean;
    allow_pick_at_location: boolean;
    pick_at_location: boolean;
    next_actions: any;
    einvoice_info: any;
    einvoice_request: any;
}

export interface CheckoutResponse {
    message: string;
    code: number;
    data: CheckoutData;
}
