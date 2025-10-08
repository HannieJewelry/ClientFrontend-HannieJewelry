import React from 'react';
import { useCustomerProfile, useUpdateCustomerProfile } from "../hooks/customer/useCustomerProfile";

export const ProfilePage = () => {
    const { data, isLoading } = useCustomerProfile();
    const updateProfile = useUpdateCustomerProfile();

    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data</div>;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile.mutate({
            birthday: '1996-08-20T00:00:00Z',
            gender: 'MALE',
            avatar: (e.target as any).avatar.files[0],
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="birthday"
                    defaultValue={data.customer.birthday.slice(0, 10)}
                />
                <select name="gender" defaultValue={data.customer.gender}>
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                    <option value="OTHER">Khác</option>
                </select>
                <input type="file" name="avatar" accept="image/*" />
                <button type="submit">Update</button>
            </form>

            <h3>Profile Data (JSON):</h3>
            <pre style={{ background: "#f6f6f6", padding: 16, borderRadius: 8 }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    );
};
