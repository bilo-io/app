import { Accordion, Button, Form, Input, Map, Tab, Table, Tabs, Typography, mapToOptions, useRenderField } from 'components/Core';
import { ControlsHeader } from 'components/Domain';
import React, { useMemo, useState } from 'react';
import { useAppTheme, useTranslations } from 'hooks';
import { API_BASE_URL } from 'utils/api';
import { IPaginated, useFetchApi } from 'hooks/useFetch';
import { IActor, IMovie } from '@vision/core';
import _ from 'lodash';
import { toUrlParams } from 'utils/url';
import { log } from 'utils/logger';
import Pagination from 'components/Core/Pagination/Pagination';
import Markdown from 'components/Core/Markdown/Markdown';
import { assignments } from './assignments';

export const ApiEntertainment: React.FC = () => {
    const { t } = useTranslations();

    const tabData: (Tab & { key: string })[] = useMemo<(Tab & { key: string })[]>(() => ([
        {
            id: 0,
            key: 'maps',
            label: (
                <ControlsHeader icon="map" label={'Maps'} />
            ),
            view: (
                <MapsContainer />
            )
        },
        {
            id: 1,
            key: 'places',
            label: (
                <ControlsHeader icon="location" label={'Places'} />
            ),
            view: (
                <PlacesContainer />
            )
        },
        {
            id: 2,
            key: 'assignment',
            label: (
                <ControlsHeader icon="info-circle" label={'Assignment'} />
            ),
            view: (
                <div className='p-4'>
                    <Markdown content={assignments.places} />
                </div>
            ),
        },
    ]), []);

    return (
        <div className="w-full">
            <Tabs data={tabData} defaultTabIndex={0} />
        </div>
    );
};

export const MoviesContainer: React.FC = () => {
    const { loading, data, error, fetchData } = useFetchApi<IPaginated<IMovie>>({
        method: 'GET',
        url: `${API_BASE_URL}/movies`,
    });

    const [view, setView] = useState<'table' | 'grid' | 'list'>('table');
    const [query, setQuery] = useState<any>({
        dateOfBirth: undefined,
        search: '',
    });

    const fetchApiData = (): void => {
        fetchData({ method: 'GET', url: `${API_BASE_URL}/movies?${toUrlParams(query)}` });
    };

    const { renderField } = useRenderField();

    const columns = useMemo(() => ([
        {
            Cell: ({ value, row }: any) => (
                <div>
                    <img
                        src={value}
                        className="h-20" alt={`movie:${row.original?.name}`}
                    />
                </div>
            ),
            Header: '',
            accessor: 'imgPoster'
        },
        {
            Cell: ({ value }: any) => (
                <div>
                    {value}
                </div>
            ),
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Release Date',
            accessor: 'releaseDate'
        },
        {
            Header: 'IMDB',
            accessor: 'ratingImdb'
        },
        {
            Header: 'Rotten Tomatoes',
            accessor: 'ratingRottenTomatoes'
        },
        {
            Header: 'Audience',
            accessor: 'ratingAudience'
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ]), [data]);

    if (loading) return <div>Loading...</div>;
    if (!_.isEmpty(error)) return <div>Error...{JSON.stringify(error, null, 2)}</div>;

    return (
        <div className="page-content">
            <div>
                <Form
                    initialValues={query}
                    onSubmit={fetchApiData}
                    onChange={(t) => console.log(t)}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            {/* <Accordion title="Filters" isOpenDefault> */}
                            <div className="p-2">
                                {renderField('search', 'text')}
                                {renderField('dateOfBirth', 'text')}
                            </div>
                            {/* </Accordion> */}
                            <Button onClick={() => handleSubmit()}>
                                Search
                            </Button>
                            <br />
                            <br />
                        </>
                    )}
                </Form>
            </div>

            <div>
                <Typography>
                    Table / Grid toggle
                </Typography>
            </div>

            <hr />

            <Pagination
                totalItems={data?.meta?.totalItems as number}
                onChange={function (limit: number, page: number): void {
                    setQuery((prev: any) => ({
                        ...prev,
                    }));
                }}
            />

            <hr />
            {view === 'table' && (
                <Table
                    columns={columns}
                    data={(data?.data as IMovie[]) || []}
                    onClickRow={(row: IMovie) => log(row)}
                />
            )}

            {view === 'grid' && (
                <div>Grid</div>
            )}

            {view === 'list' && (
                <div>List</div>
            )}

            <hr />

            <Pagination
                totalItems={data?.meta?.totalItems as number}
                onChange={function (limit: number, page: number): void {
                    setQuery((prev: any) => ({
                        ...prev,
                    }));
                }}
            />
        </div>
    );
};

export const ActorsContainer: React.FC = () => {
    const { renderField } = useRenderField();
    const { loading, data, error, fetchData } = useFetchApi<IPaginated<IActor>>({
        method: 'GET',
        url: `${API_BASE_URL}/actors?limit=100`,
    });

    const [view, setView] = useState<'table' | 'grid' | 'list'>('table');
    const [query, setQuery] = useState<any>({
        dateOfBirth: undefined,
        search: '',
    });

    const fetchApiData = (): void => {
        fetchData({ method: 'GET', url: `${API_BASE_URL}/movies?${toUrlParams(query)}` });
    };

    const columns = useMemo(() => ([
        {
            Cell: ({ value, row }: any) => (
                <div>
                    <img
                        src={value}
                        className="h-12" alt={`actor:${row.original?.name}`}
                    />
                </div>
            ),
            Header: '',
            accessor: 'img'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Cell: ({ value }: any) => (
                <div>
                    {value}
                </div>
            ),
            Header: 'Birthday',
            accessor: 'dateOfBirth'
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ]), [data]);

    if (loading) return <div>Loading...</div>;
    if (!_.isEmpty(error)) return <div>Error...{JSON.stringify(error, null, 2)}</div>;

    return (
        <div className="page-content">
            <Form
                initialValues={query}
                onSubmit={fetchApiData}
                onChange={(t) => console.log(t)}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        {/* <Accordion title="Filters" isOpenDefault> */}
                        <div className="p-2">
                            {renderField('search', 'text')}
                            {renderField('dateOfBirth', 'text')}
                        </div>
                        {/* </Accordion> */}
                        <Button onClick={() => handleSubmit()}>
                            Search
                        </Button>
                        <br />
                        <br />
                    </>
                )}
            </Form>

            {view === 'table' && (
                <Table
                    columns={columns}
                    data={(data?.data as IActor[]) || []}
                />
            )}

            {view === 'grid' && (
                <div>Grid</div>
            )}

            {view === 'list' && (
                <div>List</div>
            )}
        </div>
    );
};

export const MapsContainer: React.FC = () => {
    const { t } = useTranslations();
    const { theme, name: themeName } = useAppTheme();
    const { renderField } = useRenderField();
    const { loading, data, error, fetchData } = useFetchApi<IPaginated<IPlace>>({
        method: 'GET',
        url: `${API_BASE_URL}/places?limit=100`,
    });

    const [view, setView] = useState<'table' | 'grid' | 'list'>('table');
    const [query, setQuery] = useState<any>({
        dateOfBirth: undefined,
        search: '',
    });

    const fetchApiData = (): void => {
        fetchData({ method: 'GET', url: `${API_BASE_URL}/movies?${toUrlParams(query)}` });
    };

    const handleSearch = (e: any) => {
        setQuery((prev: any) => ({
            ...prev,
            search: e
        }));
    };

    const mapPositions = data?.data.map((place: IPlace) => place.coordinates);
    console.log({ mapPositions });

    return (
        <div className="w-full h-full">
            <div className="z-0">
                <Map
                    // @ts-ignore
                    theme={themeName as string}
                    positions={mapPositions as any[]}
                />
            </div>
            <div className="absolute w-3/5 md:w-80 mt-0 top-4 z-100 px-2" style={{
                zIndex: 1000,
                left: 'calc(50% - 160px)',
                backgroundColor: theme?.BACKGROUND,
                borderRadius: '4rem',
                overflow: 'hidden'
            }}>
                <Input
                    value={query.search}
                    onChange={handleSearch}
                    className="w-full my-0 px-2 border-none"
                    placeholder='Search places'
                    style={{
                        marginBottom: 0,
                        marginTop: 0,
                    }}
                />
            </div>
        </div>
    );
};

export interface IPlace {
    id: string,
    name: string,
    description: string,
    category: string,
    companyId: string,
    address: string,
    coordinates: {
        lat: number,
        lon: number,
    },
}

export interface ICompany {
    id: string,
    name: string,
    logoUrl: string,
    description: string,
}

export const PlacesContainer: React.FC = () => {
    const { renderField } = useRenderField();
    const { loading, data, error, fetchData } = useFetchApi<IPaginated<IPlace>>({
        method: 'GET',
        url: `${API_BASE_URL}/places?limit=100`,
    });

    const [view, setView] = useState<'table' | 'grid' | 'list'>('table');
    const [query, setQuery] = useState<any>({
        dateOfBirth: undefined,
        search: '',
    });

    const fetchApiData = (): void => {
        fetchData({ method: 'GET', url: `${API_BASE_URL}/movies?${toUrlParams(query)}` });
    };

    const columns = useMemo(() => ([
        {
            Cell: ({ value, row }: any) => (
                <div>
                    <img
                        src={value}
                        className="h-12" alt={`place:${row.original?.name}`}
                    />
                </div>
            ),
            Header: '',
            accessor: 'img'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Cell: ({ value }: any) => (
                <div>
                    {value}
                </div>
            ),
            Header: 'Birthday',
            accessor: 'dateOfBirth'
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ]), [data]);

    if (loading) return <div>Loading...</div>;
    if (!_.isEmpty(error)) return <div>Error...{JSON.stringify(error, null, 2)}</div>;

    return (
        <div className="page-content">
            <Form
                initialValues={query}
                onSubmit={fetchApiData}
                onChange={(t) => console.log(t)}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <div className="p-2">
                            {renderField('search', 'text')}
                            {renderField('dateOfBirth', 'text')}
                        </div>

                        <Button onClick={() => handleSubmit()}>
                            Search
                        </Button>
                        <br />
                        <br />
                    </>
                )}
            </Form>

            {view === 'table' && (
                <Table
                    columns={columns}
                    data={(data?.data as IPlace[]) || []}
                />
            )}

            {view === 'grid' && (
                <div>Grid</div>
            )}

            {view === 'list' && (
                <div>List</div>
            )}
        </div>
    );
};

export default ApiEntertainment;