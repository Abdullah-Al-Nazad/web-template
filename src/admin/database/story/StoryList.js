import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function StoryList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/React/project/src/admin/database/story/storyget.php")
            .then((res) => setData(res.data))
    }, [])
    const deletes = (id) => {
        axios.get(`http://localhost/React/project/src/admin/database/story/storydelete.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/React/project/src/admin/database/story/storyget.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/admin/storylist/add`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered table-warning '>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Photo</th>
                        <th>Date</th>
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
                                <td><img src={`http://localhost/React/project/src/admin/img/${d.photo}`} alt={d.title} height={50} /></td>
                                <td>{d.date}</td>
                                <td>
                                    <NavLink to={`/admin/storylist/update/${d.id}`}>
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
