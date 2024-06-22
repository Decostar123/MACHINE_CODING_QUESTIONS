export const data = {
    isFolder : true, 
    name : "src", 
    content : [
        {
        isFolder : true , 
        name : "public" , 
        content : [
            {
            isFolder:true , 
            name:"public nested 1 " , 
            content : [
                {
                isFolder : false, 
                name : "index.html"
              } , 
              {
                isFolder : false, 
                name : "hello.html"
              }        
            ]
        }  ,
         {
            isFolder : false , 
            name : "public_nested_file"
        } 
    ] 
    } 
    , {
    isFolder : true, 
    name : "src" , 
    content : [
        {
            isFolder : false , 
            name : "package.json"
        }
    ]
}
]
}