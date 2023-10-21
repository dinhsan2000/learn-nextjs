'use client';

import {TextInput as TextInputReact} from "flowbite-react";

export default function TextInput(props) {
    const {id, placeholder, required, type, name, className} = props

    return (
        <TextInputReact
            id={id}
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            required={!!required}
        />
    )
}