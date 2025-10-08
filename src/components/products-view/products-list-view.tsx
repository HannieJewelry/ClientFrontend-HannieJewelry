import Pagination from "@mui/material/Pagination";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
import { ProductCard9 } from "components/product-cards/product-card-9";
// CUSTOM DATA MODEL
import { Product } from "models/Product.model";

// ==========================================================
type Props = { 
  products: Product[];
  totalPages?: number;
  currentPage?: number;
  totalElements?: number;
  onPageChange?: (page: number) => void;
};
// ==========================================================

// Helper function to transform API Product to ProductCard9 props
const transformProductForListCard = (product: Product) => {
  // Get the first variant for pricing
  const firstVariant = product.variants?.[0];
  const price = firstVariant ? parseFloat(firstVariant.price.toString()) : 0;
  const compareAtPrice = firstVariant ? parseFloat(firstVariant.compare_at_price.toString()) : undefined;
  
  // Calculate discount percentage
  const discount = compareAtPrice && compareAtPrice > price 
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;
  
  // Get main image
  const mainImage = product.images?.[0]?.src || product.image?.src || '';
  
  return {
    id: product.id,
    slug: product.handle,
    title: product.title,
    price,
    off: discount,
    rating: 5, // Default rating since API doesn't provide it
    imgUrl: mainImage
  };
};

export default function ProductsListView({ 
  products, 
  totalPages = 1, 
  currentPage = 1, 
  totalElements = 0,
  onPageChange 
}: Props) {
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div>
      {products.map((item) => {
        const cardProps = transformProductForListCard(item);
        return (
          <ProductCard9
            key={item.id}
            {...cardProps}
          />
        );
      })}

      {totalElements > 0 && (
        <FlexBetween flexWrap="wrap" mt={4}>
          <Span color="grey.600">
            Showing {products.length} of {totalElements} Products
          </Span>
          <Pagination 
            count={totalPages} 
            page={currentPage}
            variant="outlined" 
            color="primary"
            onChange={handlePageChange}
          />
        </FlexBetween>
      )}
    </div>
  );
}
