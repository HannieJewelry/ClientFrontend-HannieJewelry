"use client";

import { useState } from "react";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
// LOCAL CUSTOM COMPONENTS
import CheckboxLabel from "./checkbox-label";
// GLOBAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography";
import AccordionHeader from "components/accordion/accordion-header";
// HOOKS
import { useProductTypes, useVendors } from "services/hooks/product/useProducts";
// TYPE
import { ProductFilterKeys, ProductFilterValues, ProductFilters } from "./types";
import { Slider } from "@mui/material";

// ============================================================================
interface Props {
    filters?: ProductFilters;
    changeFilters?: (key: ProductFilterKeys, values: ProductFilterValues) => void;
    onClearAllFilters?: () => void;
    hasActiveFilters?: boolean;
}
// ============================================================================

export default function ProductFilterCard({ filters, changeFilters, onClearAllFilters, hasActiveFilters }: Props) {
    const { data: productTypesResponse, isLoading: isLoadingTypes } = useProductTypes();
    const { data: vendorsResponse, isLoading: isLoadingVendors } = useVendors();

    const productTypes = productTypesResponse?.data || [];
    const vendors = vendorsResponse?.data || [];

    const handleChangePrice = (values: number[]) => {
        changeFilters("price", values);
    };

    const handleChangeProductType = (value: string) => {
        const values = filters.productType?.includes(value)
            ? filters.productType.filter((item) => item !== value)
            : [...(filters.productType || []), value];

        changeFilters("productType", values);
    };

    const handleChangeVendor = (value: string) => {
        const values = filters.vendor?.includes(value)
            ? filters.vendor.filter((item) => item !== value)
            : [...(filters.vendor || []), value];

        changeFilters("vendor", values);
    };



    // Format price for Vietnamese currency
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    // Format number input with dots
    const formatNumberInput = (value: number) => {
        return new Intl.NumberFormat('vi-VN').format(value);
    };

    // Parse formatted number input
    const parseNumberInput = (value: string) => {
        return parseInt(value.replace(/\./g, '')) || 0;
    };

    return (
        <div>

            {/* VENDOR FILTER */}
            <H6 mb={2}>Thương hiệu</H6>
            {isLoadingVendors ? (
                <Box display="flex" justifyContent="center" py={2}>
                    <CircularProgress size={20} />
                </Box>
            ) : (
                <FormGroup>
                    {vendors.map((vendor) => (
                        <CheckboxLabel
                            key={vendor.id}
                            label={vendor.name}
                            checked={filters.vendor?.includes(vendor.id) || false}
                            onChange={() => handleChangeVendor(vendor.id)}
                        />
                    ))}
                </FormGroup>
            )}
            <Box component={Divider} my={1} />

            <H6 mb={1.25}>Loại sản phẩm</H6>
            {isLoadingTypes ? (
                <Box display="flex" justifyContent="center" py={2}>
                    <CircularProgress size={20} />
                </Box>
            ) : (
                <FormGroup>
                    {productTypes.map((type) => (
                        <CheckboxLabel
                            key={type.id}
                            label={type.name}
                            checked={filters.productType?.includes(type.id) || false}
                            onChange={() => handleChangeProductType(type.id)}
                        />
                    ))}
                </FormGroup>
            )}

            <Box component={Divider} my={1} />

            {/* PRICE VARIANT FILTER */}
            <H6 mb={1}>Mức giá</H6>
            {/* Price Range Checkboxes */}
            <Box >
                <FormGroup>
                    <CheckboxLabel
                        label="Tất cả"
                        checked={filters.price[0] === 0 && filters.price[1] === 100000000}
                        onChange={() => handleChangePrice([0, 100000000])}
                    />
                    <CheckboxLabel
                        label="Dưới 2 triệu"
                        checked={filters.price[0] === 0 && filters.price[1] === 2000000}
                        onChange={() => handleChangePrice([0, 2000000])}
                    />
                    <CheckboxLabel
                        label="Từ 2 - 4 triệu"
                        checked={filters.price[0] === 2000000 && filters.price[1] === 4000000}
                        onChange={() => handleChangePrice([2000000, 4000000])}
                    />
                    <CheckboxLabel
                        label="Từ 4 - 7 triệu"
                        checked={filters.price[0] === 4000000 && filters.price[1] === 7000000}
                        onChange={() => handleChangePrice([4000000, 7000000])}
                    />
                    <CheckboxLabel
                        label="Từ 7 - 13 triệu"
                        checked={filters.price[0] === 7000000 && filters.price[1] === 13000000}
                        onChange={() => handleChangePrice([7000000, 13000000])}
                    />
                    <CheckboxLabel
                        label="Từ 13 - 20 triệu"
                        checked={filters.price[0] === 13000000 && filters.price[1] === 20000000}
                        onChange={() => handleChangePrice([13000000, 20000000])}
                    />
                    <CheckboxLabel
                        label="Trên 20 triệu"
                        checked={filters.price[0] === 20000000 && filters.price[1] === 100000000}
                        onChange={() => handleChangePrice([20000000, 100000000])}
                    />
                </FormGroup>
            </Box>

            <Slider
                min={0}
                max={100000000}
                step={1000000}
                size="small"
                value={filters.price}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => formatPrice(v)}
                onChange={(_, v) => handleChangePrice(v as number[])}
            />
            <FlexBetween>
                <TextField
                    key="price-min"
                    fullWidth
                    size="small"
                    type="text"
                    placeholder="0"
                    value={filters.price[0] > 0 ? formatNumberInput(filters.price[0]) : ''}
                    onChange={(e) => {
                        const numValue = parseNumberInput(e.target.value);
                        handleChangePrice([numValue, filters.price[1]]);
                    }}
                    InputProps={{
                        endAdornment: <Span color="grey.600">đ</Span>
                    }}
                />

                <H5 color="grey.600" px={1}>
                    ~
                </H5>

                <TextField
                    key="price-max"
                    fullWidth
                    size="small"
                    type="text"
                    placeholder="100.000.000"
                    value={filters.price[1] < 100000000 ? formatNumberInput(filters.price[1]) : ''}
                    onChange={(e) => {
                        const numValue = parseNumberInput(e.target.value);
                        handleChangePrice([filters.price[0], numValue]);
                    }}
                    InputProps={{
                        endAdornment: <Span color="grey.600">đ</Span>
                    }}
                />
            </FlexBetween>

            {/* CLEAR ALL FILTERS BUTTON - MOBILE ONLY, AT BOTTOM */}
            {hasActiveFilters && onClearAllFilters && (
                <Box
                    mt={5}
                    sx={{
                        display: { xs: 'block', md: 'none' } // Only show on mobile
                    }}
                >
                    <Button
                        variant="contained"
                        // size="small"
                        color="primary"
                        fullWidth
                        onClick={onClearAllFilters}
                    >
                        Clear All Filters
                    </Button>
                </Box>
            )}

        </div>
    );
}
