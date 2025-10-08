// Discount code
export interface DiscountCode {
    id: string;
    amount: number;
    code: string;
    is_coupon_code: boolean;
    type: string;
}

// Địa chỉ (address)
export interface Address {
    id: string;
    address1: string;
    address2: string;
    city: string | null;
    company: string;
    country: string;
    country_code: string;
    default_address: boolean;
    district: string | null;
    district_code: string;
    first_name: string;
    last_name: string;
    name: string;
    phone: string;
    province: string | null;
    province_code: string;
    ward: string | null;
    ward_code: string;
    zip: string;
    latitude?: number | null;
    longitude?: number | null;
}

// Sản phẩm trong đơn
export interface LineItem {
    id: string;
    actual_price: number;
    barcode: string;
    fulfillable_quantity: number;
    fulfillment_service: string | null;
    fulfillment_status: string;
    gift_card: boolean;
    grams: number;
    image_src: string;
    ma_cost_amount: number;
    name: string;
    not_allow_promotion: boolean;
    price: number;
    price_original: number;
    price_promotion: number;
    product_exists: boolean;
    product_id: string;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: number;
    type: string;
    variant_id: number;
    variant_title: string;
    vendor: string;
}

// Ghi chú đơn hàng
export interface NoteAttribute {
    id: string;
    name: string;
    value: string;
}

// Shipping line
export interface ShippingLine {
    id: string;
    code: string;
    price: number;
    source: string;
    title: string;
}

// Transaction
export interface Transaction {
    id: string;
    amount: number;
    auth_code: string | null;
    client_id: string | null;
    created_user: string | null;
    currency: string;
    device_id: string | null;
    external_transaction_id: string | null;
    gateway: string;
    haravan_transaction_id: string | null;
    kind: string;
    location_id: string | null;
    parent_id: string | null;
    payment_details: string | null;
    payment_method_id: string | null;
    receipt: string | null;
    send_email: boolean;
    status: string | null;
    test: boolean | null;
    transaction_type_id: string | null;
    user_id: string | null;
}

// Enums cho trạng thái đơn hàng
export type OrderProcessingStatus = 
    | 'pending'
    | 'processing' 
    | 'confirmed'
    | 'self_delivery'
    | 'completed'
    | 'failed'
    | 'cancel'
    | 'shipped';

export type FulfillmentStatus = 
    | 'fulfilled'
    | 'partial'
    | 'restocked'
    | 'unfulfilled';

// Model đơn hàng chính
export interface OrderDetail {
    id: string;
    billing_address: Address;
    browser_ip: string | null;
    buyer_accepts_marketing: boolean;
    cancel_reason: string | null;
    cancelled_at: string | null;
    cancelled_reason: string | null;
    cancelled_status: string;
    cart_token: string;
    checkout_token: string;
    closed_at: string | null;
    closed_status: string;
    confirm_user: string | null;
    confirmed_at: string | null;
    confirmed_status: string;
    contact_email: string | null;
    created_at: string;
    currency: string;
    device_id: string | null;
    discount_codes: DiscountCode[];
    email: string;
    estimated_delivery_date: string | null;
    financial_status: string;
    fulfillment_status: FulfillmentStatus;
    gateway: string | null;
    gateway_code: string | null;
    is_deleted: boolean;
    landing_site: string | null;
    landing_site_ref: string | null;
    line_items: LineItem[];
    location_id: string | null;
    location_name: string | null;
    name: string;
    note: string;
    note_attributes: NoteAttribute[];
    order_code: string;
    order_number: string;
    order_processing_status: OrderProcessingStatus;
    processing_method: string | null;
    referring_site: string | null;
    shipping_address: Address;
    shipping_lines: ShippingLine[];
    source: string | null;
    source_name: string | null;
    subtotal_price: number;
    tags: string | null;
    taxes_included: boolean;
    token: string;
    total_discounts: number;
    total_line_items_price: number;
    total_price: number;
    total_tax: number;
    total_weight: number | null;
    transactions: Transaction[];
    updated_at: string;
    user_id: string | null;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_medium: string | null;
    utm_source: string | null;
    utm_term: string | null;
}

export interface OrderResponse {
    message: string;
    code: number;
    data: OrderDetail;
}

