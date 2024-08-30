import React from 'react';
import { useFormContext } from './Form';
import Input from '../Inputs/Input';
import TextArea from '../Inputs/TextArea';
import Dropdown from '../Dropdown/Dropdown';
import Typography from '../Typography/Typography';

export type FormType = 'text' | 'textarea' | 'radio' | 'checkbox' | 'dropdown' | 'dropdown-multi';

interface FormFieldProps {
    type: FormType;
    name: string;
    label?: string;
    options?: { label: string, value: any }[]; // For dropdown type
}

export const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    label,
    options,
}) => {
    const { values, handleChange } = useFormContext();

    const renderLabel = (): React.ReactElement | null => (
        label && type !== 'text' ? (
            <Typography size="sm">
                <label className="opacity-60">
                    {label}
                </label>
            </Typography>
        ) : null
    );

    const renderInput = (): React.ReactElement | React.ReactElement[] | null | undefined => {
        switch (type) {
            case 'text':
                return (
                    <Input
                        type="text"
                        label={label}
                        name={name}
                        value={values[name]}
                        onChange={handleChange(name)}
                        className="w-full"
                    />
                );
            case 'textarea':
                return (
                    <TextArea
                        name={name}
                        value={values[name]}
                        onChange={handleChange(name)}
                    />
                );
            case 'radio':
                return (
                    options?.map(option => (
                        <label key={option?.value}>
                            <input
                                type="radio"
                                name={name}
                                value={option?.value}
                                checked={values[name] === option?.value}
                                onChange={handleChange(name)}
                            />
                            {option?.label}
                        </label>
                    ))
                );
            case 'checkbox':
                return (
                    <input
                        type="checkbox"
                        name={name}
                        checked={values[name]}
                        onChange={handleChange(name)}
                    />
                );
            case 'dropdown':
            case 'dropdown-multi':
                return (
                    <Dropdown
                        isMulti={type === 'dropdown-multi'}
                        options={options as { label: string, value: string }[]}
                        value={values[name]}
                        onChange={handleChange(name)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderLabel()}
            {renderInput()}
        </div>
    );
};

export default FormField;
