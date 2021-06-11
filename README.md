# React Drag and Drop 

Drag and Drop feature is one of the common feature used across dashboards and automated form creations. 
This repo is an example of how drag and drop feature can be implemented in React Js using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd).

[See DEMO](https://drag-drop-react.netlify.app/)

## react-beautiful-dnd 

key aspect of the package is;

```
DragDropContext
Draggable
Droppable
```

Depending on the requirement, a segemnt of code can be draggable / droppable or both. In this example, ```<ul>``` is both draggable and droppable.

### How to re-order array indexes

```
const handleOnDragEnd = (result) => {
    
    // if destination is not droppable area, return so it is dragged back to its original position
    if(!result.destination) return;

    // make new array from personList 
    const items = Array.from(personList);

    // splice items array from the source of the object moved
    const [reorderedItem] = items.splice(result.source.index, 1);

    // re-position the sliced array part back to the items array
    items.splice(result.destination.index, 0, reorderedItem);

    // update our state with re-ordered array (items)
    updatePersonList(items);

  };
```

Cheers!