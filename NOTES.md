1. get a template string parsed with babel
2. find out how to track a variable's state (map over AST ?)
3. create transform that can turn into state that redux can handle


1. split each line of the code string
2. map each line into components
3. pass in current opacity etc (AST info as well?) to each component as props
4. use that to transition between lines?


## Ideas:
 - have "groups" in the progress bar that will expand on-hover to show their individual steps
 - add ability for user to create a modal that displays for a step
 - highlight variables in code / scope tracker / notes on-hover
 - have `esc` menu ?
 - WYSIWYG Editor for lessons
 - display the line that is currently being executed separately from lines we've chosen to highlight
 - create standardized interface for asking the user a question and storing their answer
 - let steps dispatch an event that would concat steps into our current steps array...this way we could load different paths depending on user input by doing something like `dispatch(continue(pathA))`
 - We could actually just return an array of functions as our steps that dispatched actions to update the state
 - make the notes component a fixed element that can be morphed and moved with css translations/transitions. A box that can expand to encompass the entire view if we need to display a graph, then shrink back down and out of the way of our highlighted lines to display the note.
