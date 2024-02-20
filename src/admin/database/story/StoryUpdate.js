import { useParams } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function StoryUpdate() {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [date, setdate] = useState('')
    const [details, setdetails] = useState('')
    const [photo, setphoto] = useState('')

    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/React/project/src/admin/database/story/storygetsingle.php?id=${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setdate(res.data.date)
                setphoto(res.data.photo)
                setdetails(res.data.details)
                // console.log(res.data)
            })
    }, [])
    const update = () => {
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('date',date)
        formdata.append('details',details)
        formdata.append('photo',photo)
        formdata.append('id',id)
        axios.post("http://localhost/React/project/src/admin/database/story/storyupdate.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setTitle('')
            setphoto('')
            setdetails('')
            setdate('')
            navi('/admin/storylist')
        })
    }
    return (
        <>
            <div className='container' style={{width:"500px",background:"tomato",borderRadius:"10px",paddingBottom:"20px",marginBottom:"20px"}} >
                <div className='row' >
                    <div className="row g-3">
                    <div style={{textAlign:"center"}} ><h1 style={{fontFamily:"serif",color:"white"}} >Story Update Form</h1></div>
                        <div className="mb-3">
                            <label  className="form-label">Title</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" placeholder='Input Title' onChange={(e)=>setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Details</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" placeholder='Input Details' onChange={(e)=>setdetails(e.target.value)} value={details} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Photo</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="file" id="formFileMultiple" onChange={(e)=>setphoto(e.target.files[0])} />
                        </div>
                        <div><img height={100} src={`http://localhost/React/project/src/admin/img/${photo}`} alt='Not found'/></div>
                        <div className="mb-3">
                            <label  className="form-label">Date</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="date" id="formFileDisabled" onChange={(e)=>setdate(e.target.value)} value={date}  />
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
