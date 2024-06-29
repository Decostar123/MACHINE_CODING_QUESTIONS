let notes = `

    1) EventListeners not work on  components 

    The reason is that the LinkButton component you created is just a javascript object,
     not a DOM node, so it does not have event handlers like onClick. The button element is
      transformed into the actual DOM element so it will have all the associated event handlers that the actual HTML element.
    When you add an onClick prop to the LinkButton component, it is just a property of an object. By calling props.onClick from
     inside of that component you are just calling a function that is stored inside of a property, similar to this:

     2) .css in the name of css file import is required unlike importing functional Components

     ---------------------------------------SOLUTION----------------------------------------------
     1) needed to take care about the hover effect, if liked no hover to be shown 

     nope, ADD THE HOVER ON THE CLASS IN THE PLACE OF THE COMPONENT  .className:hover{}
     Solutions 

     2) try catch for fetch to catch error or .catch part of the fetch request 

     3) edge case , disable the button duirng the feching, as the person can fetch multiple times 
     disabled={isFetching}, 
     only one request at one time 
     otherwisr even if we get result, stil error because of the next 
     
     3) no sepearate css for the border and the background, combine with class , + hover on class ( pseudo selectors)
     SAVES A LOT OF CODE .... :( , no need of a lot of varibles , border red + background red , no sense  

     4) ChatGPT differnce between onMouseOver and onMouseEnter  
    The onMouseOver and onMouseEnter events in HTML and React (JSX) are both triggered when the mouse 
    cursor enters an element, but they differ in their behavior and usage:

    onMouseOver
    Behavior: onMouseOver event is triggered when the mouse cursor enters the boundaries of an element or any of its child elements.
     It continues to trigger as long as the mouse remains within these boundaries, including when moving over child elements.
    Event Bubbling: onMouseOver event bubbles up the DOM tree, triggering event handlers on parent elements if they are defined.
    Example:
    jsx
      Copy code
      <div onMouseOver={handleMouseOver}>
          Mouse over me
      </div>
      In this example, handleMouseOver function will be called every time the mouse enters the <div> or any of its child elements.
      onMouseEnter
      Behavior: onMouseEnter event is triggered only when the mouse cursor enters the boundaries of the element itself,
       not its child elements. It does not trigger again if the mouse moves over child elements within the same parent element.
      Event Bubbling: onMouseEnter event does not bubble up the DOM tree. It is confined to the element where the mouse entered.
      Example:
      jsx
      Copy code
      <div onMouseEnter={handleMouseEnter}>
          Mouse enter me
      </div>
      In this example, handleMouseEnter function will be called only when the mouse enters the <div> itself, not its child elements.
      Summary:
      Use onMouseOver when you want an event to continuously trigger as the mouse moves over an element and its children.
      Use onMouseEnter when you want an event to trigger only once when the mouse enters the specific element, regardless 
      of its children.
      Both events can be useful depending on the desired interaction and behavior you want to achieve in your application.

      5) The onMouseOut and onMouseLeave events in HTML and React (using JSX) are both triggered when the mouse cursor
       exits an element, but they differ in their behavior regarding child elements and event bubbling:

        onMouseOut
        Behavior: onMouseOut event is triggered when the mouse cursor leaves the boundaries of an element or any
         of its child elements. It continues to trigger as long as the mouse remains outside these boundaries.
        Event Bubbling: onMouseOut event bubbles up the DOM tree, triggering event handlers on parent elements if
         they are defined.
        Example:
        jsx
        Copy code
        <div onMouseOut={handleMouseOut}>
            Mouse out me
        </div>
        In this example, handleMouseOut function will be called every time the mouse leaves the <div> or any of its child elements.
        onMouseLeave
        Behavior: onMouseLeave event is triggered only when the mouse cursor leaves the boundaries of the element
         itself, not its child elements. It does not trigger again if the mouse moves over child elements within the same parent element.
        Event Bubbling: onMouseLeave event does not bubble up the DOM tree. It is confined to the element where the mouse left.
        Example:
        jsx
        Copy code
        <div onMouseLeave={handleMouseLeave}>
            Mouse leave me
        </div>
        In this example, handleMouseLeave function will be called only when the mouse leaves the <div> itself, not its child elements.
        Summary:
        Use onMouseOut when you want an event to continuously trigger as the mouse moves out of an element and its children.
        Use onMouseLeave when you want an event to trigger only once when the mouse leaves the specific element, 
        regardless of its children.
        Both events can be useful depending on the specific behavior you want to achieve in your application 
        when handling mouse interactions.
`