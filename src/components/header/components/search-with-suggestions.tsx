import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    TextField,
    InputAdornment,
    Paper,
    List,
    ListItem,
    ListItemText,
    Box,
    CircularProgress,
    ClickAwayListener
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useProductTypes } from 'services/hooks/product/useProducts';
import { useTranslation } from 'react-i18next';

interface ProductType {
    id: string;
    name: string;
}

export default function SearchWithSuggestions() {
    const { t } = useTranslation();
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<ProductType[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Fetch product types
    const { data: productTypesResponse, isLoading } = useProductTypes();
    const productTypes = useMemo(() => productTypesResponse?.data || [], [productTypesResponse?.data]);

    // Filter suggestions based on search value
    useEffect(() => {
        if (searchValue.trim() && productTypes.length > 0) {
            const filtered = productTypes.filter((type: ProductType) =>
                type.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    }, [searchValue, productTypes]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        setShowSuggestions(value.trim().length > 0);
    };

    const handleInputFocus = () => {
        if (searchValue.trim().length > 0) {
            setShowSuggestions(true);
        }
    };

    const handleSuggestionClick = (productType: ProductType) => {
        // Navigate to search page with the selected product type as a search query
        router.push(`/products/search?q=${encodeURIComponent(productType.name)}`);
        setSearchValue('');
        setShowSuggestions(false);
    };

    const handleClickAway = () => {
        setShowSuggestions(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && searchValue.trim()) {
            // Navigate to search page with the search query
            router.push(`/products/search?q=${encodeURIComponent(searchValue.trim())}`);
            setSearchValue('');
            setShowSuggestions(false);
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box position="relative" sx={{ minWidth: 300 }}>
                <TextField
                    ref={inputRef}
                    variant="outlined"
                    size="small"
                    placeholder={t("SEARCH")}
                    value={searchValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onKeyDown={handleKeyDown}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: '100%' }}
                />

                {/* Suggestions dropdown */}
                {showSuggestions && (
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 1300,
                            maxHeight: 300,
                            overflow: 'auto',
                            mt: 0.5
                        }}
                    >
                        {isLoading ? (
                            <Box display="flex" justifyContent="center" py={2}>
                                <CircularProgress size={20} />
                            </Box>
                        ) : filteredSuggestions.length > 0 ? (
                            <List dense>
                                {filteredSuggestions.map((suggestion) => (
                                    <ListItem
                                        key={suggestion.id}
                                        button
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'grey.100'
                                            }
                                        }}
                                    >
                                        <ListItemText
                                            primary={suggestion.name}
                                            sx={{
                                                '& .MuiListItemText-primary': {
                                                    fontSize: '0.875rem'
                                                }
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : searchValue.trim() ? (
                            <Box p={2} textAlign="center" color="grey.600">
                                Không tìm thấy kết quả phù hợp
                            </Box>
                        ) : null}
                    </Paper>
                )}
            </Box>
        </ClickAwayListener>
    );
}
