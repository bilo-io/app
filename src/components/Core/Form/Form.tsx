import React, { createContext, useContext, useState } from 'react';

interface FormProps<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
    onChange?: (values: T) => void;
    children: (props: FormRenderProps<T>) => React.ReactNode;
}

export interface FormRenderProps<T> {
    values: T;
    handleChange: (fieldName: keyof T | string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: () => void | ((event: React.FormEvent<HTMLFormElement>) => void);
}

const FormContext = createContext<any>(null);

const setNestedValue = (obj: any, path: string, value: any): void => {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
            current[key] = {};
        }
        current = current[key];
    }
    current[keys[keys.length - 1]] = value;
};

export const Form = <T,>({ initialValues, onSubmit, onChange, children }: FormProps<T>): React.ReactElement => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (fieldName: keyof T | string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { type, value } = event?.target || {};
        const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

        setValues(prevValues => {
            const updatedValues = { ...prevValues };
            setNestedValue(updatedValues, fieldName as string, newValue);
            onChange?.(updatedValues); // This should be called after updating state
            return updatedValues;
        });
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // event.preventDefault();
    const handleSubmit = (): void => {
        onSubmit(values);
    };

    return (
        <FormContext.Provider value={{ handleChange, values }}>
            <form onSubmit={handleSubmit}>
                {children({ handleChange, handleSubmit, values })}
            </form>
        </FormContext.Provider>
    );
};

export const useFormContext = (): any => useContext(FormContext);

export default Form;
