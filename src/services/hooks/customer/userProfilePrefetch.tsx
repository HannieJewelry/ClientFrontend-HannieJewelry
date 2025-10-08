"use client";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getCustomerProfile } from "../../customer.service";

export default function UserProfilePrefetcher() {
    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: ['customer-profile'],
            queryFn: getCustomerProfile,
            staleTime: 60 * 1000,
        });
    }, [queryClient]);

    return null;
}
