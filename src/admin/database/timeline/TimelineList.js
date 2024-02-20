import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function TimelineList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/React/project/src/admin/database/timeline/timelineget.php")
            .then((res) => setData(res.data))
    }, [])
    const deletes = (id) => {
        axios.get(`http://localhost/React/project/src/admin/database/timeline/timelinedelete.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/React/project/src/admin/database/timeline/timelineget.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/admin/timeline/add`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered table-warning '>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{d.title}</td>
                                <td>{d.details}</td>
                                <td>{d.start_time}</td>
                                <td>{d.end_time}</td>
                                <td>
                                    <NavLink to={`/admin/timelinelist/update/${d.id}`}>
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    </NavLink>
                                    <button className='btn btn-xs btn-danger' onClick={() => deletes(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
