"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
// Local CUSTOM COMPONENT
import ProductComment from "./product-comment";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import { H2, H5 } from "components/Typography";

export default function ProductReview() {
  const initialValues = {
    rating: 0,
    comment: "",
    date: new Date().toISOString()
  };

  const validationSchema = yup.object().shape({
    rating: yup.number().required("required"),
    comment: yup.string().required("required")
  });

  const {
    dirty,
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      console.log(values);
    }
  });

  return (
    <div>
      {commentList.map((item, ind) => (
        <ProductComment {...item} key={ind} />
      ))}

      <H2 fontWeight="600" mt={7} mb={2.5}>
        Viết đánh giá cho sản phẩm này
      </H2>

      <form onSubmit={handleSubmit}>
        <Box mb={2.5}>
          <FlexBox mb={1.5} gap={0.5}>
            <H5 color="grey.700">Đánh giá của bạn</H5>
            <H5 color="error.main">*</H5>
          </FlexBox>

          <Rating
            color="warn"
            size="medium"
            value={values.rating}
            onChange={(_, value: any) => setFieldValue("rating", value)}
          />
        </Box>

        <Box mb={3}>
          <FlexBox mb={1.5} gap={0.5}>
            <H5 color="grey.700">Nhận xét của bạn</H5>
            <H5 color="error.main">*</H5>
          </FlexBox>

          <TextField
            rows={8}
            multiline
            fullWidth
            name="comment"
            variant="outlined"
            onBlur={handleBlur}
            value={values.comment}
            onChange={handleChange}
            placeholder="Viết đánh giá tại đây..."
            error={!!touched.comment && !!errors.comment}
            helperText={(touched.comment && errors.comment) as string}
          />
        </Box>

        <Button variant="contained" color="primary" type="submit" disabled={!(dirty && isValid)}>
          Gửi đánh giá
        </Button>
      </form>
    </div>
  );
}

const commentList = [
  {
    name: "Trần Minh Quân",
    imgUrl: "/assets/images/faces/7.png",
    rating: 4.9,
    date: "2026-03-12",
    comment:
        "Mình rất hài lòng với chiếc Nhẫn cầu hôn Vàng 14K đá Moissanite. Nhẫn sáng, thiết kế tinh xảo, nhìn rất sang trọng. Đội ngũ tư vấn nhiệt tình, giao hàng đúng hẹn. Rất đáng tiền!"
  },
  {
    name: "Phạm Anh Tuấn",
    imgUrl: "/assets/images/faces/6.png",
    rating: 4.8,
    date: "2026-05-07",
    comment:
        "Nhẫn đẹp ngoài mong đợi, đá Moissanite lấp lánh không khác gì kim cương thật. Giá hợp lý, bảo hành tốt. Mình đã cầu hôn thành công nhờ chiếc nhẫn này, cảm ơn shop rất nhiều!"
  },
  {
    name: "Ngô Văn Dũng",
    imgUrl: "/assets/images/faces/10.jpg",
    rating: 5.0,
    date: "2026-01-25",
    comment:
        "Sản phẩm rất chất lượng, thiết kế tinh tế, hợp xu hướng. Mình rất thích sự tỉ mỉ trong từng chi tiết của nhẫn. Sẽ giới thiệu cho bạn bè và người thân!"
  }
];
