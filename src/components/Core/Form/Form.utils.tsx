import React from 'react';
import { useTranslations } from 'hooks';
import { log } from 'utils/logger';
import FormField, { FormType } from './FormField';

export const getStuff = (): void => {
    log('not implemented');
};

export const useRenderField = (): {
    renderField: (key: string, type: FormType, options?: { label: string, value: any }[]) => React.ReactElement
} => {
    const { t } = useTranslations();

    const renderField = (path: string, type: FormType, options?: { label: string, value: any }[]): React.ReactElement => {
        const key = (path.includes('.') ? path.split('.').pop() : path) as string;
        // @ts-ignore
        const label = t.common?.[key] || key;

        return (
            <FormField
                options={options}
                type={type}
                name={path}
                label={label}
            />
        );
    };

    return {
        renderField
    };
};

export const mapToOptions = (data: (string | undefined)[] | undefined): {
    label: string,
    value: string
}[] => data?.map?.(
    (item: string | undefined) => ({
        label: item as string,
        value: item as string
    })) || [];
