
import data from "./data.json" with { type: "json" };


let userData =[] ; 
window.addEventListener('load' , ()=>{
    // alert("hi")
    console.log( data ) ; 
    userData = data ; 
    listEntry() ; 
})

function listEntry(){
  
    let emplList = document.querySelector(".employee-list") ; 
    emplList.innerHTML = ''; 
    for( let entry of userData ){
        
        let nameDiv = document.createElement("div") ; 
        nameDiv.classList.add("name-list") ; 
        nameDiv.innerHTML = `<p class="name">${entry.firstName} ${entry.lastName}</p>` ;

        let crossDiv =  document.createElement("p") ; 
        crossDiv.classList.add("cross") ; 
        crossDiv.innerHTML =`✂` ; 
        nameDiv.append( crossDiv ) ; 

        emplList.appendChild( nameDiv)

        crossDiv.addEventListener( 'click' ,(e)=> {
            // alert( "hi") ; 
            e.stopPropagation(); 
            deleteUser( entry.id ); 
        })
       

        nameDiv.addEventListener('click', ()=>{
            setUserDetails(entry) ; 
        })
    }

    function deleteUser( userID ){
       
        const ans = confirm("Are you sure you want to delete the User ? ") ; 
        if(!ans ) return ; 

        userData = userData.filter(( ele ) => ele.id !== userID ) ; 
        console.log( userData) ; 

        let fullBio = document.querySelector(".fullBio") ; 
        fullBio.innerHTML =  '' ; 
        listEntry( ) ; 
    }
    function setUserDetails(entry){
        // alert("hi")  ;
        // let personBio = document.querySelector(".person-bio") ;
        let fullBio = document.querySelector(".fullBio") ; 
        fullBio.innerHTML =  '' ; 

        let innerData = `<div class="person-bio">
                <div class="image">
                    <img src=${entry.imageUrl} alt="image">
                   
                </div>
                <div class="person-details">
                    <p class="person-name"><label>${entry.firstName} </label> <label>${entry.lastName}</label> <label>(${entry.age})</label></p>
                    <p>${entry.address}</p>
                    <p>${entry.email}</p>
                    <p><label>Mobile - </label> <label>${entry.contactNumber}</label></p>
                    <p><label>DOB - </label> <label>${entry.dob}</label></p>
                </div>
               </div>` 

              
               fullBio.innerHTML = innerData;
    }
}

document.querySelector(".newEmpl").addEventListener('click' , ()=>{
    let blackDiv = document.querySelector("#black") ; 
    blackDiv.style.display ="block" ; 

    let newUser = document.querySelector(".newUser") ; 
    newUser.style.display = 'block' ; 
})
document.querySelector(".userForm").addEventListener( 'submit' , (e)=>{
    e.preventDefault(); 
    let obj = {} ; 
    const formData = new FormData(e.target)

    console.log( [...formData.entries()])
    for(let entry of formData){
        console.log( entry)
        obj[entry[0]]  = entry[1] ; 
     } ; 
     obj.id = userData.length + 1; 

     e.target.reset() ; 
     userData.push( obj ); 

  let blackDiv = document.querySelector("#black") ; 
    blackDiv.style.display ="none" ; 

    let newUser = document.querySelector(".newUser") ; 
    newUser.style.display = 'none' ;
    
    
    
    listEntry() ; 

})

document.querySelector("#black").addEventListener('click' , ()=>{
    let blackDiv = document.querySelector("#black") ; 
    blackDiv.style.display ="none" ; 

    let newUser = document.querySelector(".newUser") ; 
    newUser.style.display = 'none' ;
    
})