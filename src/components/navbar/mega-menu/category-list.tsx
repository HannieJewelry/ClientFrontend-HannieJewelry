'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import List from '@mui/material/List';
import { H6 } from 'components/Typography';
import { MenuListItem, StyledNavLink } from './styles';
import { NavWithChild } from './types';
import { useTranslation } from 'react-i18next';

type Props = {
    category: NavWithChild;
    onWidthChange?: (width: number) => void;
};

const measureTextWidth = (text: string, font: string = '16px Roboto') => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 0;
    context.font = font;
    return context.measureText(text).width;
};

export default function CategoryList({ category, onWidthChange }: Props) {
    const { title, child } = category;
    const [minWidth, setMinWidth] = useState<number>(0);
    const { t } = useTranslation();
    const router = useRouter();

    useEffect(() => {
        const font = '16px Roboto';
        const titleWidth = measureTextWidth(t(title), font);
        const childWidths = child.map((sub) => measureTextWidth(t(sub.title), font));
        const max = Math.max(titleWidth, ...childWidths);
        const computedWidth = Math.ceil(max + 48); // padding: 24px left/right

        setMinWidth(computedWidth);
        if (onWidthChange) onWidthChange(computedWidth);
    }, [title, child, onWidthChange, t]);

    const handleItemClick = (item: any) => {
        if (item.searchTerm) {
            // Navigate to search page with search term as query parameter
            router.push(`/products/search?q=${encodeURIComponent(item.searchTerm)}`);
        } else if (item.url) {
            // Use traditional URL navigation
            router.push(item.url);
        }
    };

    return (
        <List sx={{ minWidth }}>
            <H6 mb={0.5} pl={2} textTransform="uppercase">
                {t(title)}
            </H6>
            {child.map((sub, i) => (
                sub.searchTerm ? (
                    <MenuListItem 
                        key={sub.title + i}
                        onClick={() => handleItemClick(sub)}
                        sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'grey.100' } }}
                    >
                        {t(sub.title)}
                    </MenuListItem>
                ) : (
                    <StyledNavLink href={sub.url || '#'} key={sub.title + i}>
                        <MenuListItem>{t(sub.title)}</MenuListItem>
                    </StyledNavLink>
                )
            ))}
        </List>
    );
}
