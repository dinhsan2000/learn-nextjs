'use client';

import { Label as LabelReact } from 'flowbite-react';

export default function Label(props) {
    const {className, value, htmlFor} = props

    return (
        <LabelReact
            className={className}
            value={value}
            htmlFor={htmlFor}
        />
    );
}