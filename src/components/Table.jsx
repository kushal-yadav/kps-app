import React from 'react';
import Row from './Row'

export default function Table(props) {
    const data = props.data;
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Organization ID</th>
                    <th>Organization Name</th>
                    <th>Contact Name</th>
                    <th>Email</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {data.map((dt, i) => <Row key={i} data={dt} />)}
            </tbody>
        </table>
    );
}