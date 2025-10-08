"use client";

import { usePathname } from "next/navigation";
// MUI ICON COMPONENTS
import Place from "@mui/icons-material/Place";
import Person from "@mui/icons-material/Person";
import CreditCard from "@mui/icons-material/CreditCard";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Paragraph, Span } from "components/Typography";
// CUSTOM ICON COMPONENT
import CustomerService from "icons/CustomerService";
// STYLED COMPONENTS
import { MainContainer, StyledNavLink } from "./styles";
import {Box} from "@mui/material";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <MainContainer>
            {MENUS.map((item) => (
                <Box key={item.title}>
                    <Paragraph p="26px 30px 1rem" color="grey.600" fontSize={12}>
                        {item.title}
                    </Paragraph>

                    {item.list.map(({ Icon, count, href, title }) => (
                        <StyledNavLink href={href} key={title} isCurrentPath={pathname.includes(href)}>
                            <FlexBox alignItems="center" gap={1}>
                                <Icon color="inherit" fontSize="small" className="nav-icon" />
                                <Span>{title}</Span>
                            </FlexBox>

                            <Span>{count}</Span>
                        </StyledNavLink>
                    ))}
                </Box>
            ))}
        </MainContainer>
    );
}

const MENUS = [
    {
        title: "OVERVIEW",
        list: [
            { href: "/orders", title: "Orders", Icon: ShoppingBagOutlined
                // , count: 5
            },
            {
                href: "/wish-list",
                title: "Wish List",
                Icon: FavoriteBorder,
                // count: 0
            },
            {
                href: "/support-tickets",
                title: "Support Requests",
                Icon: CustomerService,
                count: 1
            }
        ]
    },
    {
        title: "ACCOUNT SETTINGS",
        list: [
            { href: "/profile", title: "Profile Information", Icon: Person
                // , count: 0
            },
            { href: "/address", title: "Addresses", Icon: Place
                // , count: 0
            },
        ]
    }
];
