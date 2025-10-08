"use client";

import { useEffect } from 'react';
import { useProducts } from 'services/hooks/product/useProducts';

// Test component to verify API search format
export default function TestSearch() {
    // Test with actual search term from URL
    const searchTerm = "nhẫn vàng";
    const encodedSearchTerm = encodeURIComponent(`"${searchTerm}"`);
    
    const testParams = {
        filter: `title=ilike=${encodedSearchTerm}`,
        page: 1,
        size: 10
    };

    const { data, isLoading, error } = useProducts(testParams);

    // Log the exact format comparison
    useEffect(() => {
        console.log('🎯 SEARCH FORMAT COMPARISON:');
        console.log('📝 Your requested format: title=ilike=%22Nh%E1%BA%ABn%20Cao%20C%E1%BA%A5p%201K%22');
        console.log('🔧 Our generated format: title=ilike=' + encodedSearchTerm);
        console.log('✅ Match:', `title=ilike=${encodedSearchTerm}` === 'title=ilike=%22Nh%E1%BA%ABn%20Cao%20C%E1%BA%A5p%201K%22');
    }, [encodedSearchTerm]);

    useEffect(() => {
        console.log('🧪 Test Search Results:');
        console.log('📦 Data:', data);
        console.log('⏳ Loading:', isLoading);
        console.log('❌ Error:', error);
        
        // Additional debugging
        if (data) {
            console.log('📊 Full API Response:', data);
            console.log('🔍 Products array:', data?.data?.content);
            console.log('📈 Total elements:', data?.data?.total_elements);
        }
    }, [data, isLoading, error]);

    const expectedFormat = 'title=ilike=%22nh%E1%BA%ABn%20v%C3%A0ng%22';
    const actualFormat = `title=ilike=${encodedSearchTerm}`;
    const isMatch = actualFormat === expectedFormat;

    return (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', margin: '10px', border: '2px solid #ddd' }}>
            <h3>🧪 Search Flow Test</h3>
            
            <div style={{ backgroundColor: '#e3f2fd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
                <h4>🔄 Current Flow:</h4>
                <ol>
                    <li><strong>Route Navigation:</strong> <code>localhost:3000/products/search?q=Bông%20tai</code></li>
                    <li><strong>URL Decode:</strong> <code>q=Bông tai</code> → Search Tag</li>
                    <li><strong>API Call:</strong> <code>/api/client/collections/all/products?filter=title=ilike=%22Bông%20tai%22</code></li>
                    <li><strong>UI Update:</strong> Display filtered products</li>
                </ol>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <p><strong>🎯 Test Search Term:</strong> &quot;{searchTerm}&quot;</p>
                <p><strong>📝 Expected API Filter:</strong> <code>{expectedFormat}</code></p>
                <p><strong>🔧 Actual API Filter:</strong> <code>{actualFormat}</code></p>
                <p><strong>✅ Format Match:</strong> <span style={{ color: isMatch ? 'green' : 'red' }}>
                    {isMatch ? '✅ MATCH' : '❌ NO MATCH'}
                </span></p>
            </div>
            <hr />
            <div>
                <p><strong>📊 API Status:</strong> {isLoading ? '⏳ Loading...' : '✅ Complete'}</p>
                <p><strong>📦 Results:</strong> {data?.data?.total_elements || 0} products found</p>
                {error && <p style={{ color: 'red' }}><strong>❌ Error:</strong> {error.message}</p>}
                
                {data?.data?.total_elements === 0 && !isLoading && (
                    <div style={{ backgroundColor: '#fff3cd', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
                        <p><strong>⚠️ No Results Found</strong></p>
                        <p>Possible issues:</p>
                        <ul>
                            <li>Search term might not match any product titles exactly</li>
                            <li>Try searching for partial terms like &quot;nhẫn&quot; or &quot;vàng&quot;</li>
                            <li>Check if products exist in database</li>
                            <li>Verify API endpoint is working</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
