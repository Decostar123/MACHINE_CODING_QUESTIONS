import React , {useEffect, useState, useRef} from 'react'
import "../css/folder.css"
import File from './File';
const Folder = ({data}) => {
  

    const [newFolder , setNewFolder] = useState( 0 )  ; 
    const [ folderData , setFolderData ] = useState(null) ; 
    const inputRef = useRef(null);
    const [ expand , setExpand] = useState( false) ; 


    useEffect(()=>{

        setFolderData( data ) ; 
        // console.log( data ) ; 
        document.addEventListener('click' , (e)=>{
            // console.log( e.target.className !== 'optionsBtn' )
            console.log( e.target.className)
           if( e.target.className === '')
           {
            setNewFolder(0) ; 
           }
          // console.log( inputRef.current)
          //  if( inputRef &&  e.target !== inputRef.current){
          //   setNewFolder(0) ; 
          //  }
           
        })
    } , [] ) ; 
    function createFolder(){
      alert("hi")
    }
    function createNewEntry(e){
      
      if( e.key === "Enter"){
        let name = e.target.value ; 
        let isFolder = newFolder === 1 ? true : false ; 
        let content = [] ; 
        let obj = { name, isFolder , content}
        let folderArr = {...folderData} ; 
        folderArr.content.unshift( obj ) ; 
        setFolderData( folderArr) ; 
        setNewFolder(0); 
                

      }
    
    }
    if( !folderData ) return <></>
  return (
    <div className='outer'>
        {
            folderData.isFolder &&  
            <>
              <div className='inner' onClick={()=>setExpand( prev => !prev)}>
                <p className='folderName'>📁{folderData.name} </p>
                <div className="options">
                  <button className="optionsBtn" onClick={(e)=>{ e.stopPropagation() ;setNewFolder(1)}}> Folder </button> 
                   <button className="optionsBtn"  onClick={(e)=>{ e.stopPropagation(); setNewFolder(2)}}>File</button> </div>
             </div> 
             {
              (newFolder!==0 )  &&    
              <div className='input'>
                        { newFolder ===1 ? "📁" :" 🗄"}   <input ref={inputRef} onKeyDown={(e)=>createNewEntry(e)}/>
              </div>
             }
           

             {
              expand &&
                folderData.content.map(( ele , ind ) => <Folder style={{ display : expand ?'block':'none' }} key={ind} data={ele}/>)
             }
             
              </> 
          
        }
       
        {
            !folderData.isFolder && folderData.name  && <File  style={{ display : expand ?'block':'none' }} fileName={ folderData.name} />
        }
      
        
       
       
    </div>
  )
}

export default Folder