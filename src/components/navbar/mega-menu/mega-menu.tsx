'use client';

import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
    inline,
} from '@floating-ui/react-dom';

import FlexRowCenter from 'components/flex-box/flex-row-center';
import CategoryList from './category-list';
import { NavWithChild } from './types';
import { Wrapper, MenusContainer } from './styles';

// i18n
import { useTranslation } from 'react-i18next';

interface Props {
    title: string;
    menuList: NavWithChild[][];
}

export default function MegaMenu({ title, menuList }: Props) {
    const [open, setOpen] = useState(false);
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);
    const columnWidths = useRef<number[]>([]);

    const { x, y, strategy, refs, update } = useFloating({
        placement: 'bottom',
        middleware: [offset(20), flip(), shift(), inline()],
        whileElementsMounted: autoUpdate,
    });

    const handleMouseEnter = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        update();
        setOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setOpen(false);
        }, 150);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const updateColumnWidth = (index: number, width: number) => {
        columnWidths.current[index] = width;
    };

    const totalWidth = columnWidths.current.reduce((sum, w) => sum + w, 0);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <Wrapper
                    ref={refs.setReference}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FlexRowCenter fontWeight={600} alignItems="flex-end" gap={0.3}  sx={{ textTransform: "capitalize" }} >
                        {title}
                        <KeyboardArrowDown className="icon" />
                    </FlexRowCenter>
                </Wrapper>

                {open && (
                    <MenusContainer
                        ref={refs.setFloating}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            zIndex: 1300,
                            minWidth: totalWidth || undefined,
                            transition: 'opacity 0.2s ease, transform 0.2s ease',
                        }}
                    >
                        <Card elevation={3} sx={{ overflow: 'hidden' }}>
                            <Grid container>
                                {menuList.slice(0, 6).map((column, idx) => (
                                    <Grid
                                        item
                                        key={idx}
                                        sx={{
                                            py: 2,
                                            backgroundColor: idx % 2 === 0 ? 'grey.100' : 'inherit',
                                        }}
                                    >
                                        {column.map((category, catIdx) => (
                                            <CategoryList
                                                key={catIdx}
                                                category={category}
                                                onWidthChange={(w) => updateColumnWidth(idx, w)}
                                            />
                                        ))}
                                    </Grid>
                                ))}
                            </Grid>
                        </Card>
                    </MenusContainer>
                )}
            </div>
        </ClickAwayListener>
    );
}
