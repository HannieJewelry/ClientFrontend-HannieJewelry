import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import * as yup from "yup";
// CUSTOM DATA MODEL
import Address from "models/Address.model";
import { useCreateAddress, useUpdateAddress } from "../../../services/hooks/address";
import { AddressRequest } from "../../../services/model/address.model";
import { 
  useCountriesQuery, 
  useProvincesQuery, 
  useDistrictsQuery, 
  useWardsQuery 
} from "../../../services/hooks/location";

// =============================================================
type Props = { 
  address?: Address;
  isEdit?: boolean;
};
// =============================================================

export default function AddressForm({ address, isEdit = false }: Props) {
  const router = useRouter();
  const createAddress = useCreateAddress();
  const updateAddress = useUpdateAddress();
  
  // Default Vietnam country ID
  const [selectedCountryId, setSelectedCountryId] = useState<number>(241); // Vietnam
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(0);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number>(0);

  // Fetch location data
  const { data: countriesData } = useCountriesQuery();
  const { data: provincesData } = useProvincesQuery(selectedCountryId);
  const { data: districtsData } = useDistrictsQuery(selectedProvinceId);
  const { data: wardsData } = useWardsQuery(selectedDistrictId);

  // Set initial location values when editing
  useEffect(() => {
    if (isEdit && address) {
      // Find province ID by code
      const province = provincesData?.data?.country?.provinces?.find(
        p => p.code === address.province_code
      );
      if (province) {
        setSelectedProvinceId(province.id);
      }

      // Find district ID by code
      const district = districtsData?.data?.districts?.find(
        d => d.code === address.district_code
      );
      if (district) {
        setSelectedDistrictId(district.id);
      }
    }
  }, [isEdit, address, provincesData, districtsData]);

  const INITIAL_VALUES = {
    first_name: address?.first_name || "",
    last_name: address?.last_name || "",
    address1: address?.address1 || "",
    address2: address?.address2 || "",
    city: address?.city || "",
    phone: address?.phone || "",
    company: address?.company || "",
    zip: address?.zip || "",
    country_code: address?.country_code || "VN",
    province_code: address?.province_code || "",
    district_code: address?.district_code || "",
    ward_code: address?.ward_code || "",
    default: address?.default || false
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    first_name: yup.string().required("Tên là bắt buộc"),
    last_name: yup.string().required("Họ là bắt buộc"),
    address1: yup.string().required("Địa chỉ là bắt buộc"),
    city: yup.string().required("Thành phố là bắt buộc"),
    phone: yup.string().required("Số điện thoại là bắt buộc"),
    zip: yup.string().required("Mã bưu điện là bắt buộc"),
    province_code: yup.string().required("Tỉnh/Thành phố là bắt buộc"),
    district_code: yup.string().required("Quận/Huyện là bắt buộc"),
    ward_code: yup.string().required("Phường/Xã là bắt buộc")
  });

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values: typeof INITIAL_VALUES) => {
    const payload: AddressRequest = {
      address: {
        first_name: values.first_name,
        last_name: values.last_name,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        phone: values.phone,
        company: values.company,
        zip: values.zip,
        country_code: values.country_code,
        province_code: values.province_code,
        district_code: values.district_code,
        ward_code: values.ward_code
      }
    };

    try {
      if (isEdit && address?.id) {
        await updateAddress.mutateAsync({ id: address.id, payload });
      } else {
        await createAddress.mutateAsync(payload);
      }
      router.push("/address");
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const isLoading = createAddress.isPending || updateAddress.isPending;

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      enableReinitialize>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="last_name"
                label="Họ"
                onBlur={handleBlur}
                value={values.last_name}
                onChange={handleChange}
                error={!!touched.last_name && !!errors.last_name}
                helperText={(touched.last_name && errors.last_name) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="first_name"
                label="Tên"
                onBlur={handleBlur}
                value={values.first_name}
                onChange={handleChange}
                error={!!touched.first_name && !!errors.first_name}
                helperText={(touched.first_name && errors.first_name) as string}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                name="address1"
                onBlur={handleBlur}
                label="Địa chỉ"
                value={values.address1}
                onChange={handleChange}
                error={!!touched.address1 && !!errors.address1}
                helperText={(touched.address1 && errors.address1) as string}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                name="address2"
                onBlur={handleBlur}
                label="Địa chỉ bổ sung (tùy chọn)"
                value={values.address2}
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="city"
                onBlur={handleBlur}
                label="Thành phố"
                value={values.city}
                onChange={handleChange}
                error={!!touched.city && !!errors.city}
                helperText={(touched.city && errors.city) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Số điện thoại"
                name="phone"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                error={!!touched.phone && !!errors.phone}
                helperText={(touched.phone && errors.phone) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="company"
                label="Công ty (tùy chọn)"
                onBlur={handleBlur}
                value={values.company}
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="zip"
                label="Mã bưu điện"
                onBlur={handleBlur}
                value={values.zip}
                onChange={handleChange}
                error={!!touched.zip && !!errors.zip}
                helperText={(touched.zip && errors.zip) as string}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                select
                fullWidth
                name="province_code"
                label="Tỉnh/Thành phố"
                value={values.province_code}
                onChange={(e) => {
                  const provinceCode = e.target.value;
                  setFieldValue("province_code", provinceCode);
                  setFieldValue("district_code", "");
                  setFieldValue("ward_code", "");
                  
                  // Find province ID by code
                  const province = provincesData?.data?.country?.provinces?.find(
                    p => p.code === provinceCode
                  );
                  if (province) {
                    setSelectedProvinceId(province.id);
                  }
                }}
                error={!!touched.province_code && !!errors.province_code}
                helperText={(touched.province_code && errors.province_code) as string}
              >
                <MenuItem value="">
                  <em>Chọn Tỉnh/Thành phố</em>
                </MenuItem>
                {provincesData?.data?.country?.provinces?.map((province) => (
                  <MenuItem key={province.id} value={province.code}>
                    {province.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                select
                fullWidth
                name="district_code"
                label="Quận/Huyện"
                value={values.district_code}
                onChange={(e) => {
                  const districtCode = e.target.value;
                  setFieldValue("district_code", districtCode);
                  setFieldValue("ward_code", "");
                  
                  // Find district ID by code
                  const district = districtsData?.data?.districts?.find(
                    d => d.code === districtCode
                  );
                  if (district) {
                    setSelectedDistrictId(district.id);
                  }
                }}
                disabled={!values.province_code}
                error={!!touched.district_code && !!errors.district_code}
                helperText={(touched.district_code && errors.district_code) as string}
              >
                <MenuItem value="">
                  <em>Chọn Quận/Huyện</em>
                </MenuItem>
                {districtsData?.data?.districts?.map((district) => (
                  <MenuItem key={district.id} value={district.code}>
                    {district.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                select
                fullWidth
                name="ward_code"
                label="Phường/Xã"
                value={values.ward_code}
                onChange={handleChange}
                disabled={!values.district_code}
                error={!!touched.ward_code && !!errors.ward_code}
                helperText={(touched.ward_code && errors.ward_code) as string}
              >
                <MenuItem value="">
                  <em>Chọn Phường/Xã</em>
                </MenuItem>
                {wardsData?.data?.wards?.map((ward) => (
                  <MenuItem key={ward.code} value={ward.code}>
                    {ward.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.default}
                    onChange={(e) => setFieldValue("default", e.target.checked)}
                  />
                }
                label="Đặt làm địa chỉ mặc định"
              />
            </Grid>

            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={isLoading}
              >
                {isLoading ? "Đang lưu..." : isEdit ? "Cập nhật" : "Thêm địa chỉ"}
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
