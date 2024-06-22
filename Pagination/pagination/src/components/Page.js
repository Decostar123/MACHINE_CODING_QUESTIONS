import React from 'react'
import "../styles/page.css"
const Page = ({page, setPage , setProductArray}) => {
  return (
    <div className="pageOuter" >
   <div style={{visibility: page===0?'hidden':"visible"}} className='noMargin' onClick={()=>setPage(prev => prev-1 )}>◀</div>
    {
        new Array(10).fill(1).map(( ele, ind  ) =>
             <div style={{ background: ind === page ? 'green':''}}className="noMargin" onClick={()=>{setPage(ind) ;setProductArray([]) }}>{ind+1}</div>)
    }

    <div style={{visibility: page===9?'hidden':"visible"}}  onClick={()=>setPage(prev => prev+1)}>▶</div>
    </div>
  )
}

export default Page