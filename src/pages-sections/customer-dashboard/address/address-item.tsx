import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import TableRow from "../table-row";
// CUSTOM DATA MODEL
import Address from "models/Address.model";

// ==============================================================
interface Props {
  address: Address;
  handleDelete: (id: string) => void;
  handleSetDefault?: (id: string) => void;
  handleEdit?: (id: string) => void;
}
// ==============================================================

export default function AddressListItem({ address, handleDelete, handleSetDefault, handleEdit }: Props) {
  const { 
    id, 
    default: isDefault,
    first_name, 
    last_name,
    name,
    address1,
    address2,
    city,
    district,
    province,
    phone
  } = address || {};

  // Construct display name
  const displayName = name || `${first_name} ${last_name}`;
  
  // Construct address line
  const addressLine = [
    address1,
    address2,
    district,
    city,
    province
  ].filter(Boolean).join(", ");

  return (
    <TableRow>
      <div>
        <Paragraph fontWeight={600} ellipsis>{displayName}</Paragraph>
        {handleSetDefault && (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={isDefault}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSetDefault(id);
                }}
              />
            }
            label="Mặc định"
          />
        )}
      </div>
      <Paragraph ellipsis>{addressLine}</Paragraph>
      <Paragraph ellipsis>{phone}</Paragraph>
      <Paragraph color="grey.600">
        {handleEdit && (
          <IconButton onClick={() => handleEdit(id)}>
            <Edit fontSize="small" color="inherit" />
          </IconButton>
        )}

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}>
          <Delete fontSize="small" color="inherit" />
        </IconButton>
      </Paragraph>
    </TableRow>
  );
}
