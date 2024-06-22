import React , {useEffect , useState} from 'react'
import Card from './Card';
import "../styles/container.css"
import Page from './Page';
const Container = () => {
   
    const [page , setPage ] = useState(1) ;
    const [ productArray , setProductArray] = useState([]) ; 
    useEffect(()=>{

        getAllProducts(); 
    } , [ page ] ) ;

    function getAllProducts(){
        fetch(`https://dummyjson.com/products?limit=10&skip=${(page)*10}`)
        .then( res => res.json())
        .then( res => setProductArray( res.products ) ) ; 
    }
  return (
    <>
    <div className="outer">
      { productArray.map(( ele ) => <Card product={ele} key={ele.id}/> )}
    </div>
    <div>
        <Page page={page} setPage={setPage} setProductArray={setProductArray}/>
    </div>
    </>
    

  )
}

export default Container