import { useState } from "react";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

// GLOBAL CUSTOM COMPONENTS
import { H6 } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";

// CUSTOM HOOKS
import { useAddressesQuery } from "../../../services/hooks/address/useAddressesQuery";

// ==============================================================
interface Props {
  title: string;
  onSelectAddress: (address: any) => void;
  selectedAddressId?: string;
}
// ==============================================================

export default function AddressList({ title, onSelectAddress, selectedAddressId }: Props) {
  const router = useRouter();
  const { data: addressData, isLoading } = useAddressesQuery();
  const addresses = addressData?.data?.result?.content || [];

  const handleAddressSelect = (address: any) => {
    onSelectAddress(address);
  };

  const handleAddNewAddress = () => {
    router.push("/address/create");
  };

  if (isLoading) {
    return (
      <Card sx={{ mb: 4, p: 3 }}>
        <FlexBox justifyContent="center" alignItems="center" height="200px">
          <CircularProgress />
        </FlexBox>
      </Card>
    );
  }

  return (
    <Card sx={{ mb: 4, p: 3 }}>
      <FlexBetween mb={2}>
        <H6>{title}</H6>
        <Button 
          color="primary" 
          variant="outlined" 
          startIcon={<AddIcon />}
          onClick={handleAddNewAddress}
        >
          Thêm địa chỉ mới
        </Button>
      </FlexBetween>

      {addresses.length === 0 ? (
        <Typography color="text.secondary" align="center" py={3}>
          Bạn chưa có địa chỉ nào. Vui lòng thêm địa chỉ mới.
        </Typography>
      ) : (
        <RadioGroup
          name="selectedAddress"
          value={selectedAddressId || ""}
          onChange={(e) => {
            const selectedAddress = addresses.find(addr => addr.id === e.target.value);
            if (selectedAddress) {
              handleAddressSelect(selectedAddress);
            }
          }}
        >
          {addresses.map((address, index) => {
            const fullName = address.name || `${address.first_name} ${address.last_name}`;
            const addressLine = [
              address.address1,
              address.address2,
              address.district,
              address.city,
              address.province,
            ].filter(Boolean).join(", ");

            return (
              <div key={address.id}>
                {index > 0 && <Divider sx={{ my: 2 }} />}
                
                <FormControlLabel
                  value={address.id}
                  control={<Radio />}
                  sx={{ 
                    width: '100%', 
                    alignItems: 'flex-start',
                    '& .MuiFormControlLabel-label': { width: '100%' } 
                  }}
                  label={
                    <div>
                      <Typography fontWeight={600} mb={0.5}>
                        {fullName} {address.default && " (Mặc định)"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={0.5}>
                        {addressLine}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {address.phone}
                      </Typography>
                    </div>
                  }
                />
              </div>
            );
          })}
        </RadioGroup>
      )}
    </Card>
  );
} 