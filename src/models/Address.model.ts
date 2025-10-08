import User from "./User.model";

interface Address {
  id: string;
  user?: User;
  address1: string;
  address2?: string;
  city: string;
  company?: string;
  country?: string;
  country_code: string;
  district?: string;
  district_code: string;
  first_name: string;
  default: boolean;
  last_name: string;
  name?: string;
  phone: string;
  province?: string;
  province_code: string;
  ward?: string;
  ward_code: string;
  zip: string;
  
  // For backward compatibility
  title?: string;
  street?: string;
}

export default Address;
