import { useRef } from "react";
class LRUCache{

    // USING LINKED LIST IN PLACE OF ARRAY FOR THE LRU CACHE IS BETTER AS IT HELPS IN THE 
    // INSERTION TIME COMPLEXITY 

    constructor( capacity ){
        this.capacity = capacity ; 
        this.cache = { } ; 
        this.head= null ; 
        this.tail = null ; 
    }


    get(key){
        // if you are trying to accesss something movee to form

        console.log( "  console.log( this.cache)" , this.cache)

        console.log( "---------" , this.cache[key])
        if( this.cache[key] ) {
            this.moveToFront(key)  ; 
            
            console.log( "  console.log( this.cache)" , this.cache)

            // normal java involves, linera iteratoin to get the value 
            return this.cache[key].value   ; 
        }
        console.log( "  console.log( this.cache)" , this.cache)
        return null ; 
    }

    // if present, move it to start 
    // if not present, 1) if the size is more in that case delete the last one  
    // 2) otherwise move the new to the start 
    put( key , value ){
        console.log( "put  console.log( this.cache)" , this.cache , key , value )

        // IF KEY IS ALREADY PRESENT N THTA CASE THE SIZE OF THE LINKED LISI WIL NOT CHANGE 
        if( this.cache[key]){
            this.cache[key].value = value ; 
            // move it to the starting 

            this.moveToFront(key)
        }else{
            if( Object.keys(this.cache).length  === this.capacity){
                this.removeLast()
              
            }
            this.addToFront(key, value ) ; 
        }
        console.log( "  put console.log( this.cache)" , this.cache)
    }

    addToFront(key , value ){
        const newNode = { key , value ,next : null }  ; 

        if( !this.head){
            this.head = newNode ; 
            this.tail = newNode ; 
        }else{
            newNode.next = this.head ; 
            this.head = newNode ; 
        }

        console.log( key , newNode )
        this.cache[key] = newNode ; 
        console.log( " addToFront " , this.cache)
    }

    // INVOLVES DELETION + MOVING TO FRONT  , gotcha......
    moveToFront(key ){


        const current = this.cache[key] ; 

        // IF IT IS HEAD ADJUST IN THAT WAY 
        if( current === this.head ) return ;

        let prev = null , curr = this.head ;
        while( curr && curr.key !==  key  ){
            prev = curr ; 
            curr = curr.next ; 
        }
        // CHECK NULL OR NOT 
        if( !curr ) return ; 


// CHECK IF IT IS TAIL, THEN ADJUST IN THAT WAY 
        if( curr === this.tail ){
            this.tail  = prev  ; 

        }

        // IF IT IS IN MIDDLE ADJSUT IN THAT WAY 
        if(prev){
            prev.next = curr.next ; 
            curr.next = null ; 

        }
        curr.next= this.head ; 
        this.head = curr ; 

// BE CLEAR AND CONCISE IN YOYR EXPLAINATIONS 

    }

    removeLast(){

        if(!this.tail ) return ; 

        const lastKey = this.tail.key ; 

        delete this.cache[lastKey] ; 
        // NOTE A SIMPLE FACT THAT DELETION ONLY MEANS THAT I WILL REMOVE IT FROM THE OBJECT, IT STILL EXOST IN THE MEMORY 

        if( this.head === this.tail){
            this.head = null ; 
            this.tail = null ; 
            
        }else{
            let curr = this.head ; 
            while( curr.next !== this.tail ){
                curr = curr.next ;
            }

            this.tail = curr ; 
            this.tail.next = null ; 
        }
    }

}

const useLRUCache = ( capacity)=>{
    // with every rerender , genrally ee get new data 
// but i do not want this,  so to keep the data persistant and not go on re render use this useRef 
    const cacheRef = useRef( new LRUCache( capacity) );
    
    // can make normal methods in place of this 
    return { 

        get : (key) => cacheRef.current.get(key) , 
        put : ( key , value  ) => cacheRef.current.put(key,value )
    }
}
export default useLRUCache ; 