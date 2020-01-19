import React from 'react';

export default function Row(props) {
    const data = props.data;
    return (
        <tr>
            <td>{data.organization_id}</td>
            <td>{data.name}</td>
            <td>{data.contact_name}</td>
            <td>{data.email}</td>
            <td>{data.country}</td>
        </tr>
    );
}