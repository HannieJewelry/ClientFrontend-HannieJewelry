"use client";

import { useCallback, useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
// MUI ICON COMPONENTS
import Apps from "@mui/icons-material/Apps";
import ViewList from "@mui/icons-material/ViewList";
import FilterList from "@mui/icons-material/FilterList";
// Local CUSTOM COMPONENT
import ProductFilterCard from "../product-filter-card";
// GLOBAL CUSTOM COMPONENTS
import Sidenav from "components/side-nav";
import { H5, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// HOOKS
import { useProducts } from "services/hooks/product/useProducts";
// COMPONENTS
import ProductsGridView from "components/products-view/products-grid-view";
import ProductsListView from "components/products-view/products-list-view";
import { SearchTagsContainer } from "components/search-tag/search-tag";
// TYPE
import { ProductFilterKeys, ProductFilterValues, ProductFilters } from "../types";

const SORT_OPTIONS = [
    { label: "Relevance", value: "relevance" },
    { label: "Date", value: "date" },
    { label: "Price Low to High", value: "asc" },
    { label: "Price High to Low", value: "desc" }
];

const initialFilters = {
    rating: 0,
    color: [],
    brand: [],
    sales: [],
    price: [0, 100000000],
    productType: [],
    vendor: []
};

interface ProductSearchPageViewProps {
    slug?: string;
}

// Helper function to format search term for API
const formatSearchTerm = (term: string): string => {
    // Wrap in quotes and encode properly for API
    return encodeURIComponent(`"${term}"`);
};

export default function ProductSearchPageView({ slug }: ProductSearchPageViewProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState("relevance");
    const [filters, setFilters] = useState<ProductFilters>({ ...initialFilters });
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTags, setSearchTags] = useState<string[]>([]);
    const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

    // Handle search query from URL parameters
    const searchQuery = searchParams?.get('q');
    useEffect(() => {
        if (searchQuery) {
            const decodedQuery = decodeURIComponent(searchQuery);
            // Always replace with current search term, don't accumulate
            setSearchTags([decodedQuery]);
            setCurrentPage(1); // Reset to first page when search term changes
        } else {
            // Clear tags when no search query
            setSearchTags([]);
            setCurrentPage(1); // Reset to first page when clearing search
        }
    }, [searchQuery]);

    // Prepare query parameters based on slug, filters, and search tags
    const queryParams = useMemo(() => {
        const params: any = {};
        const filterParams: string[] = [];

        // Add pagination
        params.page = currentPage;
        params.size = 10; // Items per page

        // Add search tags as title filter
        if (searchTags.length > 0) {
            searchTags.forEach(tag => {
                // Format: title=ilike=%22<encoded_tag>%22 (with quotes encoded as %22)
                const encodedTag = formatSearchTerm(tag);
                filterParams.push(`title=ilike=${encodedTag}`);
            });
        }

        // If slug exists, use it as a category filter
        if (slug && slug !== 'all') {
            filterParams.push(`productType=='${slug}'`);
        }

        // Add price filter using API format
        if (filters.price && filters.price.length === 2 &&
            (filters.price[0] > 0 || filters.price[1] < 100000000)) {
            filterParams.push(`variants.price>=${filters.price[0]};variants.price<=${filters.price[1]}`);
        }

        // Add product type filter
        if (filters.productType && filters.productType.length > 0) {
            const productTypeFilter = filters.productType.map(type => `productType=='${type}'`).join(' or ');
            filterParams.push(`(${productTypeFilter})`);
        }

        // Add vendor filter
        if (filters.vendor && filters.vendor.length > 0) {
            const vendorFilter = filters.vendor.map(vendor => `vendor=='${vendor}'`).join(' or ');
            filterParams.push(`(${vendorFilter})`);
        }

        // Combine all filters
        if (filterParams.length > 0) {
            // Join multiple filters with ';' separator for proper API format
            params.filter = filterParams.join(';');
        }

        // Add sorting
        if (sortBy && sortBy !== 'relevance') {
            switch (sortBy) {
                case 'asc':
                    params.sortProperty = 'variants.price';
                    params.direction = 'ASC';
                    break;
                case 'desc':
                    params.sortProperty = 'variants.price';
                    params.direction = 'DESC';
                    break;
                case 'date':
                    params.sortProperty = 'createdAt';
                    params.direction = 'DESC';
                    break;
            }
        }


        return params;
    }, [slug, filters, sortBy, currentPage, searchTags]);

    // Fetch products using the hook
    const { data: productsResponse, isLoading, error } = useProducts(queryParams);

    const products = productsResponse?.data?.content || [];
    const totalCount = productsResponse?.data?.total_elements || 0;

    const handleChangeFilters = (key: ProductFilterKeys, values: ProductFilterValues) => {
        setFilters((prev) => ({ ...prev, [key]: values }));
        setCurrentPage(1); // Reset to first page when filters change
    };

    const handleChangeSortBy = useCallback((v: string) => {
        setSortBy(v);
        setCurrentPage(1); // Reset to first page when sorting changes
    }, []);

    const toggleView = useCallback((v: string) => () => setView(v), []);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleRemoveSearchTag = useCallback((tagToRemove: string) => {
        // Navigate back to search page without query parameter
        router.push('/products/search');
        setCurrentPage(1); // Reset to first page when removing tags
    }, [router]);

    const handleClearAllFilters = useCallback(() => {
        // Clear all filters and search tags
        setFilters({ ...initialFilters });
        router.push('/products/search');
        setCurrentPage(1);
    }, [router]);


    // Get pagination data
    const totalPages = productsResponse?.data?.total_pages || 1;
    const currentPageFromAPI = productsResponse?.data?.page || 1;
    return (
        <div className="bg-white pt-2 pb-4">
            <Container>

                {/* FILTER ACTION AREA */}
                <Grid
                    container
                    alignItems="flex-start"

                >
                    {/* LEFT SIDE: Bộ lọc + Xóa tất cả - HIDDEN ON MOBILE */}
                    <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                        <Box
                            mb={2}
                            sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <FlexBetween alignItems="center" mb={1}>
                                <H5 lineHeight={1}>
                                    Bộ lọc
                                </H5>
                                {(searchTags.length > 0 || Object.values(filters).some(filter => {
                                    if (Array.isArray(filter)) return filter.length > 0;
                                    if (typeof filter === 'object' && filter !== null) return Object.keys(filter).length > 0;
                                    return filter !== null && filter !== undefined && filter !== '';
                                })) && (
                                    <Paragraph
                                        color="primary.main"
                                        sx={{ cursor: 'pointer'}}
                                        onClick={handleClearAllFilters}
                                    >
                                        Xóa tất cả
                                    </Paragraph>
                                )}
                            </FlexBetween>

                            {/* SEARCH TAGS - FIXED CONTAINER */}
                            <Box
                                sx={{
                                    minHeight: "40px", // Fixed height for tags area
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexWrap: "wrap"
                                }}
                            >
                                <SearchTagsContainer
                                    tags={searchTags}
                                    onRemoveTag={handleRemoveSearchTag}
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* RIGHT SIDE: Sort by + View */}
                    <Grid item xs={12} md={9}>
                        <FlexBox alignItems="center" justifyContent="flex-end" columnGap={3} flexWrap="wrap">

                            {/* Sort by */}
                            <FlexBox alignItems="center" gap={1}>
                                <Paragraph color="grey.600" whiteSpace="pre">
                                    Sort by:
                                </Paragraph>

                                <TextField
                                    select
                                    size="small"
                                    value={sortBy}
                                    variant="outlined"
                                    placeholder="Sort by"
                                    onChange={(e) => handleChangeSortBy(e.target.value)}
                                    sx={{ minWidth: "150px" }}
                                >
                                    {SORT_OPTIONS.map((item) => (
                                        <MenuItem value={item.value} key={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </FlexBox>

                            {/* View */}
                            <FlexBox alignItems="center" gap={1}>
                                <Paragraph color="grey.600" mr={1}>
                                    View:
                                </Paragraph>

                                <IconButton onClick={toggleView("grid")}>
                                    <Apps fontSize="small" color={view === "grid" ? "primary" : "inherit"} />
                                </IconButton>

                                <IconButton onClick={toggleView("list")}>
                                    <ViewList fontSize="small" color={view === "list" ? "primary" : "inherit"} />
                                </IconButton>

                                {/* MOBILE FILTER BUTTON */}
                                {downMd && (
                                    <Sidenav
                                        handler={(close) => (
                                            <IconButton onClick={close}>
                                                <FilterList fontSize="small" />
                                            </IconButton>
                                        )}>
                                        <Box px={3} py={2}>
                                            <ProductFilterCard
                                                filters={filters}
                                                changeFilters={handleChangeFilters}
                                                onClearAllFilters={handleClearAllFilters}
                                                hasActiveFilters={searchTags.length > 0 || Object.values(filters).some(filter => {
                                                    if (Array.isArray(filter)) return filter.length > 0;
                                                    if (typeof filter === 'object' && filter !== null) return Object.keys(filter).length > 0;
                                                    return filter !== null && filter !== undefined && filter !== '';
                                                })}
                                            />
                                        </Box>
                                    </Sidenav>
                                )}
                            </FlexBox>
                        </FlexBox>
                    </Grid>

                </Grid>


                <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
                    {/* PRODUCT FILTER SIDEBAR AREA */}
                    <Grid item xl={2} md={3} sx={{ display: { md: "block", xs: "none" } }}>
                        <ProductFilterCard
                            filters={filters}
                            changeFilters={handleChangeFilters}
                            onClearAllFilters={handleClearAllFilters}
                            hasActiveFilters={searchTags.length > 0 || Object.values(filters).some(filter => {
                                if (Array.isArray(filter)) return filter.length > 0;
                                if (typeof filter === 'object' && filter !== null) return Object.keys(filter).length > 0;
                                return filter !== null && filter !== undefined && filter !== '';
                            })}
                        />
                    </Grid>

                    {/* PRODUCT VIEW AREA */}
                    <Grid item xl={10} md={9} xs={12}>
                        {error ? (
                            <div>
                                <Paragraph color="error.main">
                                    Error loading products. Please try again later.
                                </Paragraph>
                            </div>
                        ) : view === "grid" ? (
                            <ProductsGridView
                                products={products}
                                totalPages={totalPages}
                                currentPage={currentPageFromAPI}
                                totalElements={totalCount}
                                onPageChange={handlePageChange}
                            />
                        ) : (
                            <ProductsListView
                                products={products}
                                totalPages={totalPages}
                                currentPage={currentPageFromAPI}
                                totalElements={totalCount}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
