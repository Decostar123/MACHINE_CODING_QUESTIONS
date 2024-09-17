import React, { useState } from 'react' ; 
import "../css/button.css" ; 
import Heart1 from './Heart1' ; 
import  Heart2 from "./Heart2" ; 
import Loader from "./Loader"
const Button = ({   buttonCSS ,  setButtonCSS , fontCSS ,  setFontCSS , 
  showHeart,  setShowHeart, loadercss,  setLoaderCSS , showLoader,  setShowLoader , setMouseEffect , mouseEffect}) => {


    // THI API HAS 50% CHANCES OF FAILING PR PASSING 

    const [ errorMessage , setErrorMessage ] = useState("")
    const [liked , setLiked] = useState( false ) ; 
    async function dummyAPICALL( action ){
       return await  new Promise( ( res , rej )=>{
        
        setTimeout(()=>{
          console.log( " in the set time out ")

          let num = Math.floor(Math.random()*2)  ; 

            
          if( num === 1 ) {
            res(true) ; 
          }

          res(false) ; 
        } , 2000 )
      }
    )
    }

    function buttonHovered(){
      // console.log( " hi ")
      if( !mouseEffect ) return ; 
      setButtonCSS({ borderClass : "border-red" , bkgColor : 'bkg-white'}) ; 
      setFontCSS({fontColor : 'font-red'}) ; 
      setShowHeart( false) ; 
      
  }
  function buttonNotHovered(){
    if( !mouseEffect ) return ; 
    setButtonCSS({ borderClass : "border-green" , bkgColor : 'bkg-white'}) ; 
    setFontCSS({fontColor : 'font-green'}) ; 
    setShowHeart( true ) ; 
  }

  async function actionOnButton(){



    // setLiked( false ) ; 
    setMouseEffect( false ) ; 
    setShowLoader( true ) ; 


    let action = !liked ? 'liked' : 'not like' ; 

    if( !liked ){
      setButtonCSS({ borderClass : "border-green" , bkgColor : 'bkg-white'})  ; 
      setFontCSS({ fontColor : 'font-green' }) ; 
    }
    else{
        
    }

    let result = await dummyAPICALL( action  ) ; 
    console.log( result ) ; 
    
    if( !liked ){

      setShowLoader( false ) ; 
      if( result ){
        setButtonCSS({ borderClass : "border-red" , bkgColor : 'bkg-red'})  ; 
        setFontCSS({ fontColor : 'font-white' }) ; 
        // the class for the heart couls havebeen set easily 
        setErrorMessage("")
        setShowHeart( true ) ;
        setLiked( true ) ;
        
      }else{
        // all the things are left as it is 
          setErrorMessage("Could not do the " + action  + " task")  ;
      }

    }else{

      setShowLoader( false ) ;
      if( result ){
        setButtonCSS({ borderClass : "border-green" , bkgColor : 'bkg-white'})  ; 
        setFontCSS({ fontColor : 'font-green' }) ; 
        // the class for the heart couls havebeen set easily 
        setErrorMessage("")
        setShowHeart( true ) ;
        setLiked( false  ) ;

        // the moused effect is nabled 
        setMouseEffect( true) ; 
      }else{
        // all the things are left as it is 
        setErrorMessage("Could not do the " + action  + " task")  ;
      }

    }




    
  }
  return (
   <>
   
   <button onClick={()=>actionOnButton( )} className={`buttonComponent ${buttonCSS.borderClass}  ${buttonCSS.bkgColor}`}  onMouseOver={()=>buttonHovered()} 
    onMouseOut={()=>buttonNotHovered()}>
    {  !showLoader && showHeart && <Heart1/>}
    {  !showLoader && !showHeart && <Heart2/>}
    { showLoader &&  <Loader liked={liked}/>}
      <p className={`liketext ${fontCSS.fontColor}`}>{ !liked ? "Like" : "Unlike"}</p>
    </button>

    {
      errorMessage && <p style={{marginLeft:"50px"}}>{errorMessage}</p>
    }
   </> 
  )
}

export default Button