import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TimelineInsert() {
    const [title, setTitle] = useState('')
    const [details, setdetails] = useState('')
    const [StartTime, setStartTime] = useState('')
    const [EndTime, setEndTime] = useState('')
    const navi = useNavigate()

    // console.log(StartTime)
    // console.log(EndTime)
    // console.log(details)
    // console.log(title)
    const insert = () => {
        // const formdata=new FormData()
        // formdata.append('title',title)
        // formdata.append('StartTime',StartTime)
        // formdata.append('EndTime',EndTime)
        // formdata.append('details',details)
        axios.post("http://localhost/React/project/src/admin/database/timeline/TimelineInsert.php", { title: title, details: details, StartTime: StartTime, EndTime: EndTime }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res)
                navi('/admin/timelinelist')
            })
    }
    return (
        <>
            <div className='container' style={{ width: "500px", background: "tomato", borderRadius: "10px", paddingBottom: "20px", marginBottom: "20px" }} >
                <div className='row' >
                    <div className="row g-3">
                        <div style={{ textAlign: "center" }} ><h1 style={{ fontFamily: "serif", color: "white" }} >Timeline Insert Form</h1></div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Title</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="text" id="formFileDisabled" placeholder='Input Title' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="mb-3">
                            <label for="formFileMultiple" className="form-label">Details</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" placeholder='Input Details' type="text" id="formFileMultiple" onChange={(e) => setdetails(e.target.value)} value={details} />
                        </div>
                        <div className="mb-3">
                            <label for="formFileDisabled" className="form-label">Start Time</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="datetime-local" id="formFileDisabled" onChange={(e) => setStartTime(e.target.value)} value={StartTime} />
                        </div>
                        <div className="mb-3">
                            <label for="formFileDisabled" className="form-label">End Time</label>
                            <input style={{ background: "white", color: "black", borderRadius: "10" }} className="form-control" type="datetime-local" id="formFileDisabled" onChange={(e) => setEndTime(e.target.value)} value={EndTime} />
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
