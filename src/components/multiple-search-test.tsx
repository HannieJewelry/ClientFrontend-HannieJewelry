"use client";

import { useProducts } from 'services/hooks/product/useProducts';

// Test multiple search terms to see which ones work
export default function MultipleSearchTest() {
    const searchTerms = [
        "nhẫn",
        "vàng", 
        "nhẫn vàng",
        "Nhẫn",
        "Vàng",
        "Nhẫn Vàng",
        "nhan",
        "ring",
        "gold"
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f8ff', margin: '10px', border: '2px solid #4CAF50' }}>
            <h3>🔍 Multiple Search Terms Test</h3>
            <p>Testing different search terms to see which ones return results:</p>
            
            {searchTerms.map((term, index) => (
                <SearchTermTest key={index} searchTerm={term} />
            ))}
        </div>
    );
}

function SearchTermTest({ searchTerm }: { searchTerm: string }) {
    const encodedTerm = encodeURIComponent(`"${searchTerm}"`);
    const params = {
        filter: `title=ilike=${encodedTerm}`,
        page: 1,
        size: 5
    };

    const { data, isLoading, error } = useProducts(params);
    const resultCount = data?.data?.total_elements || 0;

    return (
        <div style={{ 
            padding: '10px', 
            margin: '5px 0', 
            backgroundColor: resultCount > 0 ? '#d4edda' : '#f8d7da',
            border: `1px solid ${resultCount > 0 ? '#c3e6cb' : '#f5c6cb'}`,
            borderRadius: '5px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span><strong>&quot;{searchTerm}&quot;</strong></span>
                <span>
                    {isLoading ? '⏳' : resultCount > 0 ? `✅ ${resultCount} results` : '❌ 0 results'}
                </span>
            </div>
            <small style={{ color: '#666' }}>
                Filter: title=ilike={encodedTerm}
            </small>
        </div>
    );
}
