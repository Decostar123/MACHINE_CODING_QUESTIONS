import Button from "./Buttton"
import { useState} from "react"  ;
import "../css/likefeature.css"
const LikeFeature = ()=>{
    const [buttonCSS , setButtonCSS ] = useState({ borderClass : "border-green" , bkgColor : 'bkg-white'})

    const[ fontCSS , setFontCSS ] = useState({ fontColor : 'font-green' })

    const [showHeart , setShowHeart ] = useState( true ) ;
    
    const [loadercss , setLoaderCSS ] = useState( { loaderbkg : 'loaderbkg-lightgreen' , loaderBorder  :'loaderborder-green'})

   const [ showLoader , setShowLoader ] = useState( false ); 

   const [mouseEffect , setMouseEffect] = useState( true   ); 
    return <Button    buttonCSS={buttonCSS} setButtonCSS={setButtonCSS}  fontCSS={fontCSS} setFontCSS={setFontCSS}
    showHeart={showHeart}  setShowHeart={setShowHeart} loadercss={loadercss}  setLoaderCSS={setLoaderCSS} 
    showLoader={showLoader}  setShowLoader={setShowLoader} setMouseEffect={setMouseEffect} mouseEffect={mouseEffect}/>
}
export default LikeFeature