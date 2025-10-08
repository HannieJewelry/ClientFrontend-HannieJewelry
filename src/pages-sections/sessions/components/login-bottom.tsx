import BoxLink from "./box-link";
import { FlexBox, FlexRowCenter } from "components/flex-box";

export default function LoginBottom() {
  return (
    <>
      {/*/!* DON'T HAVE ACCOUNT AREA *!/*/}
      {/*<FlexRowCenter gap={1} my={3}>*/}
      {/*    Bạn chưa có tài khoản?*/}
      {/*  <BoxLink title="Đăng ký" href="/register" />*/}
      {/*</FlexRowCenter>*/}

      {/*/!* FORGET YOUR PASSWORD AREA *!/*/}
      {/*<FlexBox gap={1} py={2} borderRadius={1} justifyContent="center" bgcolor="grey.200">*/}
      {/*    Quên mật khẩu?*/}
      {/*  <BoxLink title="Đặt lại mật khẩu" href="/reset-password" />*/}
      {/*</FlexBox>*/}
    </>
  );
}
