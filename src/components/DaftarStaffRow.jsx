import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffRow = (props) => {
    return (
        <tbody>
            {props.listStaff.map(staff => {
                return (
                    <tr key={staff.id}>
                        <td>{staff.nama}</td>
                        <td>Staff Farmasi</td>
                        <td>
                            <Link to={`/update-staff/${staff.id}`} className="btn btn-info">Update</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}