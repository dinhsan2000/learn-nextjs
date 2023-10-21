'use client';

export default function Form(props) {
    const {action, className, children} = props

    return (
        <form action={action} className={className}>{children}</form>
    )
}