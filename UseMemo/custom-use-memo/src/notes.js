let notes = `

    0) useMemo : https://www.joshwcomeau.com/react/usememo-and-usecallback/
    
    useMemo function returns value, not returns a function 
    cache the result between re render, so that we not calculate agin 


    1) one simple solution is, seperate the components, so the one which is rerendering 
    will only be changed, and the other one will not be changed , diff algorithm 
    
    2) making cutom useMemo hook not only means behaviour, but the behaviour + the signatur or contract , 
    input + the output , ( the behaviour includes the contract )

    3) Performance: useRef avoids unnecessary re-renders, making your component more efficient.
    Purpose: useState is intended for values that affect rendering, while useRef is for values 
    that need to persist without causing re-renders.
    Use Case: For memoization, where the goal is to cache and reuse values, 
    useRef is more appropriate because it maintains the value across renders without triggering re-renders.

 
    4) The benfit of the callback function is that no need to take care of the number of parameters  call directly 
    with empty parameters it wil internally call the corrcet function with parameters 
`