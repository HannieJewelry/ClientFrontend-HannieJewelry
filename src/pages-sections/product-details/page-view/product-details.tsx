import Container from "@mui/material/Container";
// Local CUSTOM COMPONENTS
import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
// CUSTOM DATA MODEL
import ProductSearchPageView from "./product-search";
import {Product} from "../../../models/Product.model";

// ==============================================================
interface Props {
  product: Product;
}
// ==============================================================

export default function ProductDetailsPageView(props: Props) {
  return (
    <Container maxWidth="lg" className="mt-2 mb-2">
      {/* PRODUCT DETAILS INFO AREA */}
      <ProductIntro product={props.product} />

      {/* PRODUCT DESCRIPTION AND REVIEW */}
      <ProductTabs />

      {/* FREQUENTLY BOUGHT PRODUCTS AREA */}
      {/*<FrequentlyBought products={props.frequentlyBought} />*/}

      {/* AVAILABLE SHOPS AREA */}
      {/*<AvailableShops />*/}

      {/* RELATED PRODUCTS AREA */}
      {/*<RelatedProducts products={props.relatedProducts} />*/}
        <ProductSearchPageView/>
    </Container>
  );
}
