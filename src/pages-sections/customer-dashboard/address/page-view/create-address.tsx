"use client";

import Place from "@mui/icons-material/Place";
import Card from "@mui/material/Card";
// Local CUSTOM COMPONENT
import AddressForm from "../address-form";
import DashboardHeader from "../../dashboard-header";

export default function CreateAddressPageView() {
  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Place}
        href="/address"
        title="Thêm địa chỉ mới"
        buttonText="Quay lại"
      />

      {/* ADDRESS FORM AREA */}
      <Card sx={{ p: 3, pt: 4 }}>
        <AddressForm />
      </Card>
    </>
  );
} 