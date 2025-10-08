"use client";

import { useState, ChangeEvent } from "react";
import Place from "@mui/icons-material/Place";
import { useRouter } from "next/navigation";
// Local CUSTOM COMPONENT
import Pagination from "../../pagination";
import AddressListItem from "../address-item";
import DashboardHeader from "../../dashboard-header";
// CUSTOM DATA MODEL
import Address from "models/Address.model";
import { useAddressesQuery } from "../../../../services/hooks/address";
import { useDeleteAddress, useSetDefaultAddress } from "../../../../services/hooks/address";
import { URLSearchQueryParams } from "../../../../utils/apiUtils";

// =======================================================
type Props = { addressList?: Address[] };
// =======================================================

export default function AddressPageView({ addressList = [] }: Props) {
  const router = useRouter();
  const [params, setParams] = useState<URLSearchQueryParams>({
    page: 1,
    size: 10
  });

  const { data: addressData, isLoading } = useAddressesQuery(params);
  const deleteAddress = useDeleteAddress();
  const setDefaultAddress = useSetDefaultAddress();
  
  const addresses = addressData?.data?.result?.content || addressList;
  const totalPages = addressData?.data?.result?.total_pages || 5;

  // HANDLE ADDRESS DELETE
  const handleAddressDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa địa chỉ này?")) {
      deleteAddress.mutate(id);
    }
  };

  // HANDLE SET DEFAULT ADDRESS
  const handleSetDefault = (id: string) => {
    setDefaultAddress.mutate(id);
  };

  // HANDLE PAGINATION CHANGE
  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setParams(prev => ({ ...prev, page }));
  };

  // HANDLE ADD NEW ADDRESS
  const handleAddNewAddress = () => {
    router.push("/address/create");
  };

  // HANDLE EDIT ADDRESS
  const handleEditAddress = (id: string) => {
    router.push(`/address/edit/${id}`);
  };

  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Place}
        href="/address"
        title="Địa chỉ của tôi"
        buttonText="Thêm địa chỉ mới"
        buttonClick={handleAddNewAddress}
      />

      {/* ALL ADDRESS LIST AREA */}
      {isLoading ? (
        <p></p>
      ) : addresses && addresses.length > 0 ? (
        addresses.map((address) => (
          <AddressListItem 
            key={address.id} 
            address={address} 
            handleDelete={handleAddressDelete}
            handleSetDefault={handleSetDefault}
            handleEdit={handleEditAddress}
          />
        ))
      ) : (
        <p>Không có địa chỉ nào</p>
      )}

      {/* PAGINATION AREA */}
      <Pagination count={totalPages} onChange={handlePageChange} />
    </>
  );
}
