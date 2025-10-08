"use client";

import Person from "@mui/icons-material/Person";
// Local CUSTOM COMPONENT
import UserInfo from "../user-info";
import UserAnalytics from "../user-analytics";
import DashboardHeader from "../../dashboard-header";
// CUSTOM DATA MODEL
import {Customer} from "../../../../services/model/customer.model";
import {useCustomerProfile} from "../../../../services/hooks/customer/useCustomerProfile";

// ============================================================

export default function ProfilePageView() {
    const { data, isLoading } = useCustomerProfile();
    if (isLoading) return null;
    if (!data?.customer) return null;

    const user: Customer = data.customer;
  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Person}
        title="My Profile"
        buttonText="Edit Profile"
        href={`/profile/${user.id}`}
      />

      {/* USER PROFILE INFO */}
      <UserAnalytics user={user} />

      {/* USER PROFILE INFO */}
      <UserInfo user={user} />
    </>
  );
}
