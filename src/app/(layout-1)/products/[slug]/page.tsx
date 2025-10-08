"use client";
import { useParams } from "next/navigation";
import { useProductDetail } from "services/hooks/product/useProducts";
import { ProductDetailsPageView } from "pages-sections/product-details/page-view";

export default function ProductDetailsPage() {
    const { data, isLoading, error } = useProductDetail(useParams().slug as string);
    if (isLoading) return null;
    if (error) return null;
    if (!data?.data) return null;

    console.log("Product Details Data:", data.data);

    return <ProductDetailsPageView product={data.data} />;
}
