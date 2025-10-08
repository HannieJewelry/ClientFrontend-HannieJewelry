"use client";

import { useEffect } from "react";
import * as yup from "yup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// LOCAL
import { AddressList } from "../address-selection";
import { useDefaultAddressQuery } from "../../../services/hooks/address/useAddressesQuery";

export default function CheckoutForm({
                                         shippingAddress,
                                         setShippingAddress,
                                         billingAddress,
                                         setBillingAddress,
                                         sameAsShipping,
                                         setSameAsShipping,
                                     }) {
    const { data: defaultAddressData, isLoading: isLoadingDefault } =
        useDefaultAddressQuery();

    useEffect(() => {
        if (defaultAddressData?.data) {
            setShippingAddress(defaultAddressData.data);
            setBillingAddress(defaultAddressData.data);
            setSameAsShipping(true);
        }
    }, [defaultAddressData, setShippingAddress, setBillingAddress, setSameAsShipping]);

    const handleShippingAddressSelect = (address: any) => {
        setShippingAddress(address);
        if (sameAsShipping) {
            setBillingAddress(address);
        }
    };

    const handleBillingAddressSelect = (address: any) => {
        setBillingAddress(address);
    };

    const handleSameAsShipping = (checked: boolean) => {
        setSameAsShipping(checked);
        if (checked && shippingAddress) {
            setBillingAddress(shippingAddress);
        }
    };

    if (isLoadingDefault) {
        return (
            <div style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <AddressList
                title="Địa chỉ giao hàng"
                onSelectAddress={handleShippingAddressSelect}
                selectedAddressId={shippingAddress?.id}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={sameAsShipping}
                        onChange={(e) => handleSameAsShipping(e.target.checked)}
                        color="primary"
                    />
                }
                label={
                    <Typography>Sử dụng địa chỉ giao hàng làm địa chỉ thanh toán</Typography>
                }
                sx={{ mb: 2 }}
            />

            {!sameAsShipping && (
                <AddressList
                    title="Địa chỉ thanh toán"
                    onSelectAddress={handleBillingAddressSelect}
                    selectedAddressId={billingAddress?.id}
                />
            )}
        </div>
    );
}
