import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';

interface PaginationProps {
    totalItems: number;
    initialLimit?: number;
    initialPage?: number;
    onChange: (limit: number, page: number) => void;
    loading?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    initialLimit = 10,
    initialPage = 1,
    onChange,
    loading = false,
}): JSX.Element => {
    const [limit, setLimit] = useState<number>(initialLimit);
    const [page, setPage] = useState<number>(initialPage);
    const totalPages = Math.ceil(totalItems / limit);

    // useEffect(() => {
    //     onChange(limit, page);
    // }, [limit, page, onChange]);

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setLimit(Number(event.target.value));
        setPage(1); // Reset to first page on limit change
    };

    const handlePrevious = (): void => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = (): void => {
        if (page < totalPages) setPage(page + 1);
    };

    const handleFirst = (): void => {
        setPage(1);
    };

    const handleLast = (): void => {
        setPage(totalPages);
    };

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="pagination-controls">
                <button className="rounded-full px-2.5 mx-1" onClick={handleFirst} disabled={page === 1}>
                    <FontAwesome name={'angles-left'} />
                </button>
                <button className="rounded-full px-2.5 mx-1" onClick={handlePrevious} disabled={page === 1}>
                    <FontAwesome name={'chevron-left'} />
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button className="rounded-full px-2.5 mx-1" onClick={handleNext} disabled={page === totalPages}>
                    <FontAwesome name={'chevron-right'} />
                </button>
                <button className="rounded-full px-2.5 mx-1" onClick={handleLast} disabled={page === totalPages}>
                    <FontAwesome name={'angles-right'} />
                </button>
            </div>

            <div className="flex flex-row items-center">
                <div className="px-2 relative">
                    <label htmlFor="limit">Items per page&nbsp;</label>
                    <select id="limit" value={limit} onChange={handleLimitChange} className="px-2">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            {loading && (
                <div className="pagination-loading">
                    <span>Loading...</span>
                </div>
            )}
        </div>
    );
};

export default Pagination;
