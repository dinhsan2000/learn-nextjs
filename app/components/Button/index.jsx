'use client';

import { Button as ButtonReact } from 'flowbite-react';

export default function Button(props) {
    const {type, className, label, color, size, children} = props

    return (
        <ButtonReact
            type={type}
            className={className}
            label={label}
            color={color}
            size={size}
        > {children} </ButtonReact>
    )
}