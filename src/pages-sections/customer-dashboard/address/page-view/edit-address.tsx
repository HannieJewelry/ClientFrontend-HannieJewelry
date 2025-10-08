"use client";

import Place from "@mui/icons-material/Place";
import { useParams } from "next/navigation";
import Card from "@mui/material/Card";
// Local CUSTOM COMPONENT
import AddressForm from "../address-form";
import DashboardHeader from "../../dashboard-header";
import { useAddressesQuery } from "../../../../services/hooks/address";

export default function EditAddressPageView() {
  const { id } = useParams();
  const { data: addressData, isLoading } = useAddressesQuery();
  
  const address = addressData?.data?.result?.content?.find(
    (addr) => addr.id === id
  );

  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Place}
        href="/address"
        title="Chỉnh sửa địa chỉ"
        buttonText="Quay lại"
      />

      {/*/!* ADDRESS FORM AREA *!/*/}
      {/*<Card sx={{ p: 3, pt: 4 }}>*/}
      {/*  {isLoading ? (*/}
      {/*    <p></p>*/}
      {/*  ) : address ? (*/}
      {/*    <AddressForm address={address} isEdit={true} />*/}
      {/*  ) : (*/}
      {/*    <p>Không tìm thấy địa chỉ</p>*/}
      {/*  )}*/}
      {/*</Card>*/}
    </>
  );
} 