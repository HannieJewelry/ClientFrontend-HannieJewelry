"use client";

import {
    Box,
    Typography,
    Chip,
    Stack,
    IconButton,
    useTheme,
    Button,
} from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import ReviewSummary from "./ReviewSummary";
import ProductVariants from "./ProductVariants";
import SizeSelector from "./SizeSelector";
import RingSizeGuidePopover from "./RingSizeGuidePopover";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { fontSizes } from "../../../theme/sizes";
import { Product, ProductImage, ProductVariant } from "../../../models/Product.model";
import { useAddToCart } from "../../../services/hooks/shopping_cart/useAddToCart";
import { useCartQuery } from "../../../services/hooks/shopping_cart/useCartQuery";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

type Props = {
    product: Product;
};

export default function JewelryProductInfo({ product }: Props) {
    const theme = useTheme();
    const router = useRouter();
    const { mutate: addToCartApi, isPending: isAddingToCart } = useAddToCart();
    const { mutate: buyNowApi, isPending: isBuyingNow } = useAddToCart();
    const { data: cartData } = useCartQuery();

    // Lọc size là số, tăng dần
    const sizeOption = product.options.find(
        opt => opt.name.toLowerCase() === "size"
    );

    const sizeList = Array.from(
        new Set(
            product.variants
                .map(v => {
                    const rawSize =
                        sizeOption?.position === 1 ? v.option1 :
                            sizeOption?.position === 2 ? v.option2 :
                                sizeOption?.position === 3 ? v.option3 :
                                    null;

                    if (!rawSize) return null;
                    const match = rawSize.match(/\d+/);
                    return match ? match[0] : null;
                })
                .filter(Boolean)
                .map(Number)
                .sort((a, b) => a - b)
                .map(String)
        )
    );




    // Chọn biến thể
    const [selectVariants, setSelectVariants] = useState({
        size: "",
        color: product.variants?.[0]?.option1 || "",
    });
    const [showAllSizes, setShowAllSizes] = useState(false);
    const [measuredLength, setMeasuredLength] = useState("4.5");
    const [open, setOpen] = useState(false);

    // Bắt lỗi add to cart
    const [addCartError, setAddCartError] = useState<string | null>(null);

    const { strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(0), flip(), shift()],
    });

    // Tìm đúng variant theo size (chỉ số)
    const currentVariant =
        product.variants.find(
            v =>
                v.option1 === selectVariants.color &&
                typeof v.option2 === "string" &&
                v.option2.match(/\d+/)?.[0] === selectVariants.size
        ) || product.variants[0];

    // Lấy số lượng đã có trong giỏ của variant hiện tại
    const cartItemQty = cartData?.data?.items?.find(
        item => item.variant_id === currentVariant.id
    )?.quantity || 0;

    // Tính số tồn thực tế còn lại (có thể âm nếu bug backend)
    const availableStock = Number(currentVariant.inventory_quantity) - cartItemQty;
    const isAvailable = currentVariant.available === true && availableStock > 0;

    // Hiển thị trạng thái size kho
    const sizeStatus = product.variants.map((variant) => {
        let size = '';
        if (typeof variant.option2 === "string") {
            const match = variant.option2.match(/\d+/);
            size = match ? match[0] : variant.option2;
        }
        const itemInCart = cartData?.data?.items?.find(i => i.variant_id === variant.id);
        const qtyInCart = itemInCart?.quantity || 0;
        const inv = Number(variant.inventory_quantity) - qtyInCart;
        const isAvailable = variant.available === true && inv > 0;
        return {
            size,
            isAvailable,
            inventory: inv,
        }
    });

    const currentSizeNum = selectVariants.size;
    const currentVariantStatus = sizeStatus.find(s => s.size === currentSizeNum);

    // Giá, giảm giá
    const variant = currentVariant;
    const compareAtPrice = Number(variant?.compare_at_price);
    const price = Number(variant?.price);
    const hasDiscount = compareAtPrice > price;
    const discountPercent = hasDiscount
        ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
        : 0;

    // Lấy ảnh variant
    const getVariantImage = (variant: ProductVariant, images: ProductImage[]): string => {
        if (variant.image_id) {
            const found = images.find(img => img.id === variant.image_id);
            return found?.src || "";
        }
        return images[0]?.src || "";
    };
    const imgUrl = getVariantImage(currentVariant, product.images);

    // Xử lý thêm vào giỏ hàng
    const handleAddToCartClick = (event: React.MouseEvent) => {
        event?.preventDefault();
        setAddCartError(null);
        addToCartApi(
            { variant_id: currentVariant.id, quantity: 1 },
            {
                onSuccess: () => {
                    enqueueSnackbar('Đã thêm vào giỏ hàng!', { variant: 'success' });
                },
                onError: (err) => {
                    const msg = err?.message || 'Lỗi!';
                    if (msg) {
                        enqueueSnackbar('Bạn đã thêm hết số lượng còn lại vào giỏ hàng!', { variant: 'warning' });
                    } else {
                        enqueueSnackbar(msg, { variant: 'error' });
                    }
                }
            }
        );
    };

    // Xử lý mua ngay
    const handleBuyNow = (event: React.MouseEvent) => {
        event?.preventDefault();
        setAddCartError(null);
        buyNowApi(
            { variant_id: currentVariant.id, quantity: 1 },
            {
                onSuccess: () => {
                    enqueueSnackbar('Đã thêm vào giỏ hàng!', { variant: 'success' });
                    router.push('/cart');
                },
                onError: (err) => {
                    const msg = err?.message || 'Lỗi!';
                    if (msg) {
                        enqueueSnackbar('Bạn đã thêm hết số lượng còn lại vào giỏ hàng!', { variant: 'warning' });
                    } else {
                        enqueueSnackbar(msg, { variant: 'error' });
                    }
                }
            }
        );
    };

    return (
        <Box sx={{ width: "100%", mb: theme.spacing(5) }}>
            <Typography fontWeight={600} mb={theme.spacing(2)} variant='h5'>
                {product.title}
            </Typography>

            <ReviewSummary />

            <Box display="flex" alignItems="center" gap={theme.spacing(1)} mb={theme.spacing(1.5)}>
                <CheckCircleIcon fontSize="small" color={isAvailable ? "success" : "error"} />
                <Typography sx={{ color: "grey.700" }}>
                    Tình trạng:{" "}
                    <Box
                        component="span"
                        color={isAvailable ? "success.main" : "error.main"}
                        fontWeight={500}
                    >
                        {isAvailable ? "Còn hàng" : "Hết hàng"}
                    </Box>
                </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={theme.spacing(1)} mb={theme.spacing(1.5)}>
                <CodeIcon fontSize="small" color="action" />
                <Typography sx={{ color: "grey.700" }}>
                    Mã sản phẩm: <Box component="span" fontWeight={500}>{variant?.sku}</Box>
                </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={theme.spacing(2)} mb={theme.spacing(2)}>
                <Typography color="primary.main" fontWeight={600} fontSize={fontSizes["3xl"]}>
                    {price.toLocaleString("vi-VN")}₫
                </Typography>
                <IconButton size="small"><NotificationsNoneIcon /></IconButton>
                <IconButton size="small"><FavoriteBorderIcon /></IconButton>
            </Box>
            {hasDiscount && (
                <Stack direction="row" alignItems="center" spacing={1.5} mb={theme.spacing(4)}>
                    <Typography
                        sx={{
                            color: "grey.500",
                            textDecoration: "line-through"
                        }}>
                        {compareAtPrice.toLocaleString("vi-VN")}₫
                    </Typography>
                    <Chip
                        label={`-${discountPercent}%`}
                        size="small"
                        sx={{
                            backgroundColor: theme.palette.error.main,
                            color: theme.palette.error.contrastText
                        }}
                    />
                </Stack>
            )}

            {/*<Box mb={theme.spacing(4)}>*/}
            {/*    <ProductVariants*/}
            {/*        selectedColor={selectVariants.color}*/}
            {/*        onChangeColor={handleChangeVariant("color")}*/}
            {/*    />*/}
            {/*</Box>*/}

            {open && (
                <Box sx={{
                    position: strategy,
                    zIndex: 1300,
                    background: "#fff",
                    borderRadius: "8px",
                    maxWidth: 370,
                    boxShadow: "0px 4px 16px rgba(0,0,0,0.15)"
                }}>
                    <RingSizeGuidePopover measuredLength={measuredLength} onChange={setMeasuredLength}
                                          onClose={() => setOpen(false)} />
                </Box>
            )}

            <Box mb={theme.spacing(3)}>
                <Box mb={theme.spacing(2)}>
                    <Box display="flex" alignItems="center" flexWrap="wrap" gap={1} mb={theme.spacing(1)}>
                        <Typography fontWeight={500}>
                            Vui lòng chọn size <Box component="span" color={theme.palette.error.main}>*</Box>
                        </Typography>
                        <Box
                            onClick={() => setOpen(true)}
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                fontWeight: 400,
                                fontSize: fontSizes.sm,
                                cursor: "pointer",
                                color: "secondary.main",
                                textDecoration: "underline",
                                "&:hover": {
                                    color: theme.palette.primary[400],
                                },
                            }}
                        >
                            Cách đo size nhẫn
                            <ExpandMoreIcon sx={{ fontSize: 18, ml: 0.5 }} />
                        </Box>
                    </Box>

                    <SizeSelector
                        sizes={sizeList}
                        selectedSize={selectVariants.size}
                        onChangeSize={(size) => setSelectVariants((prev) => ({ ...prev, size }))}
                        showAll={showAllSizes}
                        onToggle={() => setShowAllSizes((prev) => !prev)}
                    />
                </Box>
            </Box>

            <Box display="flex" gap={theme.spacing(2)} mt={theme.spacing(4)}>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<CreditCardIcon />}
                    onClick={handleBuyNow}
                    disabled={isBuyingNow || !isAvailable}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        textTransform: "none",
                        fontWeight: 600,
                        px: theme.spacing(3),
                        py: theme.spacing(1.5),
                        borderRadius: theme.spacing(1),
                        fontSize: fontSizes.lg,
                        "&:hover": {
                            backgroundColor: theme.palette.primary[700] || theme.palette.primary.main,
                        },
                        "&.Mui-disabled": {
                            backgroundColor: theme.palette.grey[300],
                            color: theme.palette.text.disabled,
                        },
                    }}
                >
                    Mua ngay
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.grey[300],
                        px: theme.spacing(2.5),
                        py: theme.spacing(1.5),
                        borderRadius: theme.spacing(1),
                        fontSize: fontSizes.lg,
                        "&:hover": {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: theme.palette.primary[100],
                        },
                    }}

                    onClick={handleAddToCartClick}
                    disabled={isAddingToCart || !isAvailable}
                >
                    Thêm vào giỏ
                </Button>
            </Box>
            {/* Thông báo lỗi khi add */}
            {addCartError && (
                <Typography color="error" mt={1} fontSize={14}>
                    {addCartError}
                </Typography>
            )}
        </Box>
    );
}
