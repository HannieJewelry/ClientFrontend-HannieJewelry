import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { FlexBetween } from "components/flex-box";
import ProductCard1 from "../product-cards/product-card-1";
import { StyledBazaarCard } from "../product-cards/product-card-1/styles";
import { Product } from "../../models/Product.model";

// ========================================================
type Props = { 
  products: Product[];
  totalPages?: number;
  currentPage?: number;
  totalElements?: number;
  onPageChange?: (page: number) => void;
};
// ========================================================

// Helper function to transform API Product to ProductCard1 props
const transformProductForCard = (product: Product) => {
  // Get the first variant for pricing
  const firstVariant = product.variants?.[0];
  const price = firstVariant ? parseFloat(firstVariant.price.toString()) : 0;
  const compareAtPrice = firstVariant ? parseFloat(firstVariant.compare_at_price.toString()) : undefined;
  
  // Get main image
  const mainImage = product.images?.[0]?.src || product.image?.src || '';
  const hoverImage = product.images?.[1]?.src || '';
  
  // Calculate sold quantity from variants
  const totalSold = product.variants?.reduce((total, variant) => {
    const oldQty = variant.old_inventory_quantity || 0;
    const currentQty = variant.inventory_quantity || 0;
    return total + (oldQty - currentQty);
  }, 0) || 0;
  
  return {
    id: product.id,
    slug: product.handle,
    title: product.title,
    price,
    compareAtPrice,
    imgUrl: mainImage,
    hoverImgUrl: hoverImage,
    rating: 5, // Default rating since API doesn't provide it
    hideRating: false,
    hoverEffect: true,
    showProductSize: false,
    sold: totalSold
  };
};

export default function ProductsGridView({ 
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
    <>
      <Grid container spacing={3}>
        {products.map((item: Product) => {
          const cardProps = transformProductForCard(item);
          return (
              <Grid item lg={3} sm={6} xs={6} key={item.id}>
                  <StyledBazaarCard>
                      <ProductCard1 {...cardProps} hideRating={true} />
                  </StyledBazaarCard>
              </Grid>
          );
        })}
      </Grid>

      {totalElements > 0 && (
        <FlexBetween flexWrap="wrap" mt={6}>
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
    </>
  );
}
