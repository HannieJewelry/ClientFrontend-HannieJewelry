import {  useState } from "react";
// MUI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
// FORMIK
import { useFormik } from "formik";
// YUP
import * as yup from "yup";
// LOCAL CUSTOM COMPONENT
import { H5 } from "components/Typography";
// CUSTOM DATA MODEL
import { Address } from "./_types";
import { useTranslation } from "react-i18next";

const validationSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("required"),
  street1: yup.string().required("required"),
  phone: yup.number().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  country: yup.string().required("required"),
  zip: yup.number().required("required")
});

// ==================================================================
interface Props {
  handleAddNewAddress: (value: Omit<Address, "id">) => void;
}
// ==================================================================

export default function NewAddressForm({ handleAddNewAddress }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleCloseModal = () => setOpenModal(false);

  const initialValues = {
    name: "UI Lib",
    street1: "321, Subid Bazaar",
    street2: "",
    phone: "01789123456",
    city: "Sylhet",
    state: "Sylhet",
    country: "Bangladesh",
    zip: 4336
  };

  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleAddNewAddress(values);
      handleCloseModal();
      resetForm({});
    }
  });

  return (
    <>
      <Button color="primary" variant="outlined" onClick={() => setOpenModal(true)}>
        {t("ADD_NEW_ADDRESS")}
      </Button>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          <H5 mb={4}>{t("ADD_NEW_ADDRESS_INFO")}</H5>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  value={values.name}
                  label={t("ENTER_YOUR_NAME")}
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street1"
                  label={t("STREET_LINE_1")}
                  value={values.street1}
                  onChange={handleChange}
                  helperText={touched.street1 && errors.street1}
                  error={touched.street1 && Boolean(errors.street1)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street2"
                  label={t("ADDRESS_LINE_2")}
                  value={values.street2}
                  onChange={handleChange}
                  helperText={touched.street2 && errors.street2}
                  error={touched.street2 && Boolean(errors.street2)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  label={t("ENTER_YOUR_PHONE")}
                  helperText={touched.phone && errors.phone}
                  error={touched.phone && Boolean(errors.phone)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label={t("CITY")}
                  value={values.city}
                  onChange={handleChange}
                  helperText={touched.city && errors.city}
                  error={touched.city && Boolean(errors.city)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label={t("STATE")}
                  value={values.state}
                  onChange={handleChange}
                  helperText={touched.state && errors.state}
                  error={touched.state && Boolean(errors.state)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="zip"
                  label={t("ZIP")}
                  type="number"
                  value={values.zip}
                  onChange={handleChange}
                  helperText={touched.zip && errors.zip}
                  error={touched.zip && Boolean(errors.zip)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="country"
                  label={t("COUNTRY")}
                  value={values.country}
                  onChange={handleChange}
                  helperText={touched.country && errors.country}
                  error={touched.country && Boolean(errors.country)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button color="primary" variant="contained" type="submit">
                  {t("SAVE")}
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
