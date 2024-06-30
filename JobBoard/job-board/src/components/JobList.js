import React  ,  { useEffect , useState} from 'react'
import "../css/joblist.css"
const JobList = ({jobid}) => {

    let [ userDetail , setUserDetail ] = useState({}) ; 
    useEffect(()=>{
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobid}.json`)
        .then(res => res.json())
        .then( res =>  {
            console.log( res) ; 
            setUserDetail( res)
        }) ; 
    } , [] ) ; 

    if( Object.keys( userDetail).length === 0  ) return <></> 
  return (
    <div className='userdetail'>
        <p className="userdetail__title" onClick={()=>window.openByURL("")}>{userDetail.title}</p>
        <p> By {userDetail.by} - { new Date(userDetail.time).toDateString()  }</p>
    </div>
  )
}

export default JobList