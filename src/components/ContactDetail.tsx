import React from 'react'
import { useContactQuery } from '../services/api';

interface Props {
    id: string;
}


export const ContactDetail = ({ id }: Props) => {
    const { data } = useContactQuery(id)
    return (
        <div>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}
