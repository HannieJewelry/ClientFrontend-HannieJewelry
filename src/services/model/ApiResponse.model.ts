export interface ApiPaginatedResult<T> {
    content: T[];
    page: number;
    size: number;
    total_elements: number;
    total_pages: number;
    sorts: { property: string; direction: string }[];
}

export interface ApiResponse<T> {
    message: string;
    code: number;
    data: T;
}