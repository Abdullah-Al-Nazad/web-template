import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function StoryInsert() {
    const [title, setTitle] = useState('')
    const [Details, setDetails] = useState('')
    const [date, setdate] = useState('')
    const [photo, setphoto] = useState('')
    const navi = useNavigate()
    const insert = () => {
        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('Details', Details)
        formdata.append('date', date)
        formdata.append('photo', photo)
        axios.post("http://localhost/React/project/src/admin/database/story/storyInsert.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setTitle('')
                setphoto('')
                setDetails('')
                setdate('')
                navi('/admin/storylist')
            })
    }
    return (
        <>
            <div className='container' style={{ width: "500px", background: "tomato", borderRadius: "10px", paddingBottom: "20px", marginBottom: "20px" }} >
                <div className='row' >
                    <div className="row g-3">
                        <div style={{ textAlign: "center" }} ><h1 style={{ fontFamily: "serif", color: "white" }} >Story Insert Form</h1></div>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="text" id="formFileDisabled" placeholder='Input Title' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Details</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="text" id="formFileDisabled" placeholder='Input Details' onChange={(e) => setDetails(e.target.value)} value={Details} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Photo</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="file" id="formFileMultiple" onChange={(e) => setphoto(e.target.files[0])} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="date" id="formFileDisabled" onChange={(e) => setdate(e.target.value)} value={date} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <input onClick={insert} className='btn-sm btn-warning' type="submit" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
