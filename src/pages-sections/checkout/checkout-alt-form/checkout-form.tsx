"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import DeliveryDate from "./delivery-date";
import PaymentDetails from "./payment-details";
import DeliveryAddress from "./delivery-address";

import { InitialValues } from "./_types";

const checkoutSchema = yup.object().shape({
  card: yup.string().required("required"),
  date: yup.string().required("required"),
  time: yup.string().required("required"),
  address: yup.string().required("required"),
  cardHolderName: yup.string().required("required"),
  cardNumber: yup.number().required("required"),
  cardMonth: yup.string().required("required"),
  cardYear: yup.number().required("required"),
  cardCVC: yup.number().required("required"),
  voucher: yup.string()
});

export default function CheckoutForm() {
  const router = useRouter();
  const [hasVoucher, setHasVoucher] = useState(false);

  const toggleHasVoucher = () => setHasVoucher((has) => !has);

  const initialValues: InitialValues = {
    card: "",
    date: "",
    time: "",
    address: "",
    voucher: "",
    cardHolderName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCVC: ""
  };

  const handleFormSubmit = async (values: InitialValues) => {
    console.log(values);
    router.push("/payment");
  };
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}>
      {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => {
        // CHANGE FIELD VALUE DATA
        const handleFieldValueChange = (value: string, fieldName: string) => {
          setFieldValue(fieldName, value);
        };

        return (
          <form onSubmit={handleSubmit}>
            <DeliveryAddress handleFieldValueChange={handleFieldValueChange} values={values} />
            
            <DeliveryDate
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
            />
            
            {/*<PaymentMethodSelect*/}
            {/*    value={paymentMethod}*/}
            {/*    onChange={(e) => setPaymentMethod(e.target.value)}*/}
            {/*/>*/}

            <PaymentDetails
              values={values}
              errors={errors}
              touched={touched}
              hasVoucher={hasVoucher}
              handleChange={handleChange}
              toggleHasVoucher={toggleHasVoucher}
              handleFieldValueChange={handleFieldValueChange}
            />

          </form>
        );
      }}
    </Formik>
  );
}
