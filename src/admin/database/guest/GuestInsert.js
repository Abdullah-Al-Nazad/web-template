import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function GuestInsert() {
    const [name, setname] = useState('')
    const [identity, setidentity] = useState('')
    const [photo, setphoto] = useState('')
    const navi=useNavigate()
    const insert=()=>{
        const formdata=new FormData()
        formdata.append('name',name)
        formdata.append('identity',identity)
        formdata.append('photo',photo)
        axios.post("http://localhost/React/project/src/admin/database/guest/guestInsert.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setname('')
            setphoto('')
            setidentity('')
            navi('/admin/guestlist')
        })
    }
    return (
        <>
        
            <div className='container' style={{width:"500px",background:"tomato",borderRadius:"10px",paddingBottom:"20px",marginBottom:"20px"}} >
                <div className='row' >
                    <div className="row g-3">
                    <div style={{textAlign:"center"}} ><h1 style={{fontFamily:"serif",color:"white"}} >Guest Insert Form</h1></div>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" placeholder='Input name' onChange={(e)=>setname(e.target.value)} value={name} />
                        </div>
                        
                        <div className="mb-3">
                            <label  className="form-label">Photo</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="file" id="formFileMultiple" onChange={(e)=>setphoto(e.target.files[0])} multiple  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">identity</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" onChange={(e)=>setidentity(e.target.value)} value={identity}  />
                        </div>
                        <div style={{textAlign:"center"}}>
                            <input onClick={insert} className='btn-sm btn-warning'  type="submit" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
