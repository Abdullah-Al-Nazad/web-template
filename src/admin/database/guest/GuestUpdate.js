import { useParams } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function GuestUpidentity() {
    const { id } = useParams()
    const [name, setname] = useState('')
    const [identity, setidentity] = useState('')
    const [photo, setphoto] = useState('')

    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/React/project/src/admin/database/guest/guestgetsingle.php?id=${id}`)
            .then((res) => {
                setname(res.data.name)
                setidentity(res.data.identity)
                setphoto(res.data.photo)
                // console.log(res.data)
            })
    }, [])
    const update = () => {
        const formdata=new FormData()
        formdata.append('name',name)
        formdata.append('identity',identity)
        formdata.append('photo',photo)
        formdata.append('id',id)
        axios.post("http://localhost/React/project/src/admin/database/guest/guestupdate.php",formdata,{
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
                    <div style={{ textAlign: "center" }} ><h1 style={{ fontFamily: "serif", color: "white" }} >Guest Update Form</h1></div>
                        <div className="mb-3">
                            <label  className="form-label">name</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" placeholder='Input name' onChange={(e)=>setname(e.target.value)} value={name} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Photo</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="file" id="formFileMultiple" onChange={(e)=>setphoto(e.target.files[0])} multiple  />
                        </div>
                        <div><img height={100} src={`http://localhost/React/project/src/admin/img/${photo}`} alt='Not found'/></div>
                        <div className="mb-3">
                            <label  className="form-label">identity</label>
                            <input style={{background:"white",color:"black", borderRadius:"10"}} className="form-control" type="text" id="formFileDisabled" onChange={(e)=>setidentity(e.target.value)} value={identity}  />
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
