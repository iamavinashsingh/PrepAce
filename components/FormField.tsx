import React from 'react'
import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldsProps<T extends FieldValues>{
    control : Control<T>;
    name : Path<T>;
    lable : string;
    placeholder?: string;
    type?: "text"|"email"|"password";

}

const FormField = <T extends FieldValues, K extends Path<T>>({
    control,
    name,
    placeholder,
    lable,
    type = "text",
    children,
    ...rest
}: FormFieldsProps<T> & { children?: React.ReactNode } & React.ComponentProps<typeof Input>) => (
    <Controller
        name={name as K}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel className='label'>{lable}</FormLabel>
                <FormControl>
                    <Input
                        className='input'
                        type={type}
                        placeholder={placeholder}
                        {...field}
                        {...rest}
                    />
                </FormControl>
                {children}
                <FormMessage />
            </FormItem>
        )}
    />
)

export default FormField