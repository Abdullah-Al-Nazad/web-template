import { useParams } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TimelineUpidentity() {
    const { id } = useParams()
    const [end_time, setend_time] = useState('')
    const [start_time, setstart_time] = useState('')
    const [title, settitle] = useState('')
    const [details, setdetails] = useState('')

    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/React/project/src/admin/database/timeline/timelinegetsingle.php?id=${id}`)
            .then((res) => {
                setend_time(res.data.end_time)
                setstart_time(res.data.start_time)
                settitle(res.data.title)
                setdetails(res.data.details)
                // console.log(res.data)
            })
    }, [])
    const update = () => {
        const formdata=new FormData()
        formdata.append('end_time',end_time)
        formdata.append('start_time',start_time)
        formdata.append('title',title)
        formdata.append('details',details)
        formdata.append('id',id)
        axios.post("http://localhost/React/project/src/admin/database/timeline/timelineupdate.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setend_time('')
            setstart_time('')
            settitle('')
            setdetails('')
            navi('/admin/timelinelist')
        })
    }
    return (
        <>
            <div className='container' style={{width:"500px",background:"tomato",borderRadius:"10px",paddingBottom:"20px",marginBottom:"20px"}} >
                <div className='row' >
                    <div className="row g-3">
                    <div style={{ textAlign: "center" }} ><h1 style={{ fontFamily: "serif", color: "white" }} >Timeline Update Form</h1></div>
                        <div className="mb-3">
                            <label  className="form-label">Start Time</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="datetime-local" id="formFileDisabled" placeholder='Input name' onChange={(e)=>setstart_time(e.target.value)} value={start_time} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">End Time</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="datetime-local" id="formFileDisabled" placeholder='Input name' onChange={(e)=>setend_time(e.target.value)} value={end_time} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Title</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" onChange={(e)=>settitle(e.target.value)} value={title}  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Details</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" onChange={(e)=>setdetails(e.target.value)} value={details}  />
                        </div>
                        <div style={{textAlign:"center"}}>
                            <input onClick={update} className='btn-sm btn-warning'  type="submit" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
