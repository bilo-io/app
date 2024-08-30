import { ApiRequestMethod } from 'components/Core';
import { useEffect, useState } from 'react';
import { callApi } from 'utils/api';

export interface IPaginated<T> {
    data: T[],
    meta: {
        page: number,
        limit: number,
        totalItems: number,
        totalPages: number,
    },
}

export const useFetch = <T>({ url }: { url: string }): {
    data: T | null,
    loading: boolean,
    error: any
} => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    console.log(response);
                    setError(response.statusText);
                    throw new Error(`ERROR: ${response.status} => ${response.statusText}`);
                    return;
                }

                const result: T = await response.json();
                setData(result);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        error,
        loading
    };
};

export const useFetchApi = <T>({ url, method }: { url: string, method: ApiRequestMethod }): {
    data: T | null,
    loading: boolean,
    error: any,
    fetchData: (args: {
        method: ApiRequestMethod,
        url: string
    }) => Promise<void>
} => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);

    const fetchData = async ({
        method,
        url
    }: {
        method: ApiRequestMethod,
        url: string
    }): Promise<void> => {
        setLoading(true);

        try {
            const response = await callApi({ method, url });

            const result: T = response.response.data as T;
            setData(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData({ method, url });
    }, []);

    return {
        data,
        error,
        fetchData,
        loading,
    };
};