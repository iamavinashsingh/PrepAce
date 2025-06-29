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

const FormField = <T extends FieldValues>({control, name , placeholder , lable, type="text"}: FormFieldsProps<T>) => (
    <Controller name={name} 
                control={control} 
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='label'>{lable}</FormLabel>
                        <FormControl>
                            <Input className='input' type={type} placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
    />
)

export default FormField