import { useState } from "react";
const usePasswordGenerator = ()=>{
    const [ password, setPassword] = useState("") ; 

    const [errorMessage, setErrorMessage] = useState("") ;

    // before thinking about the logic, see what the inputs it will take 
    // the inputs it willt ake is 
    // length, the other 4 parameters 
    const generatePassword = ( checkBoxData , length )=>{

        // charset have all the passwords whih are allowed in our app 
        let charset="" , generatedPassword = "" ; 
        // it is good to see as if i am coding for a big app;ication 
        
        let selectedOptions = checkBoxData.filter(( ele ) => ele.state ) ; 
        if( selectedOptions.length === 0 ){
            setErrorMessage("Select At least one option") ;
            setPassword("") ;
            return ; 
        }
// THE FACT IS IF I TAKE ARRAY IN PLACE OF STRING, THEN PASWORD WILL HAVE PAATERN IN RANDOM CHARACTERS 
// SO BETTER TO HAVE STRING 
        selectedOptions.forEach(( ele )=>{
            switch(ele.title){
                case "Include UpperCase Letters":
                    charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break; 
                case "Include Lowercase Letters":
                    charset +='abcdefghijklmnopqrstuvwxyz'
                    break;
                case "Include Numbers":
                    charset +="0123456789" ;
                    break ;
                case "Include Symbols":
                    charset +="!@#$%^&*()"
            }
        


        })

        // THIS GIVES TE TANDOMNESSS 
        for( let i= 1 ; i <= length ; i++ ){
                let randomInd = Math.floor(Math.random()*charset.length ) ; 
                generatedPassword += charset[randomInd] ; 

        }

        setPassword( generatedPassword) ; 
        setErrorMessage("") ; 
        
     }

    // hook is basically a varible which retuer =s varible 
    // return state cvribles from here for the proper update 
    return { password , errorMessage , generatePassword} ; 

}

export default usePasswordGenerator ; 


// customo hook = helper function + use word 