import ListItem from "@mui/material/ListItem";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import { NavLink } from "components/nav-link";

// STYLED COMPONENTS

export const Wrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  transition: 'color 150ms ease-in-out',
  ".icon": {
    fontSize: "1.1rem",
    color: theme.palette.grey[500]
  },
  ":hover": {
    color: theme.palette.primary.main
  }
}));

export const MenusContainer = styled(ListItem)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  transform: 'translateX(0)',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  padding: 0,
}));

export const MenuListItem = styled(ListItem)(({ theme }) => ({
  padding: '.5rem 1rem',
  maxWidth: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  display: 'block',
}));

export const StyledNavLink = styled(NavLink)({
  display: 'block',
  width: '100%',
  textDecoration: 'none',
});
