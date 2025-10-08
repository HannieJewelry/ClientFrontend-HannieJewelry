// Product3.model.ts
export interface ProductImage {
    id: string;
    created_at: string;
    filename?: string;
    position: number;
    product_id: string;
    src: string;
    updated_at: string;
    variant_ids?: any[];
}

export interface ProductOption {
    id?: string;
    name: string;
    position: number;
    product_id?: string;
    values?: string[];
}

export interface ProductVariant {
    id: number;
    barcode: string;
    compare_at_price: number;  // <-- LUÔN là number
    created_at?: string;
    grams: number;
    image_id?: string | null;
    inventory_management?: string;
    inventory_policy?: string;
    inventory_quantity?: number;
    option1?: string;
    option2?: string | null;
    option3?: string | null;
    position?: number;
    price: number;
    product_id?: string | null;
    requires_shipping?: boolean;
    sku?: string;
    taxable?: boolean;
    title: string;
    updated_at?: string | null;
    old_inventory_quantity?: number;
    weight?: number;
    available?: boolean;
    weight_unit?: string;
}

export interface Product {
    id: string;
    body_html: string;
    body_plain?: string; // optional nếu BE không trả về
    created_at: string;
    handle: string;
    images: ProductImage[];
    not_allow_promotion: boolean;
    only_hide_from_list?: boolean; // optional nếu BE không trả về
    options: ProductOption[];
    product_type: string;
    published_at: string;
    published_scope: string;
    tags: string;
    template_suffix: string;
    title: string;
    updated_at: string;
    variants: ProductVariant[];
    vendor: string;
    [key: string]: any;
}
