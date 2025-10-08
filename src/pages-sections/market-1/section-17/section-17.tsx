"use client";

import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
// Local CUSTOM COMPONENT
import BlogCard from "./blog-card";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";
import { SectionCreator } from "../../../components/section-header";
import { useTranslation } from "react-i18next";

export default function Section17() {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogList = await api.getBlogs();
            setBlogs(blogList);
        };

        fetchBlogs();
    }, []);

    return (
        <SectionCreator title={t("RECENT_POSTS")} seeMoreLink="#">
            <Grid container spacing={3}>
                {blogs.map((item) => (
                    <Grid item md={4} xs={12} key={item.id}>
                        <BlogCard
                            title={item.title}
                            date={item.createdAt}
                            image={item.thumbnail}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </SectionCreator>
    );
}