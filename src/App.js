import React, {useState} from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import myList from './myList';

function App() {

  const [personList, updatePersonList] = useState(myList);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>People List</h1>
        {/* re-order our stat once object is dragged to new position (result contains source and destination indexes) */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="personsList">
            {
              (provided) => (
                <ul className="personsList" {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    personList.map(({id, name, pic}, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {
                            (provided) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div className="personPic">
                                  <img src={pic} alt={name} />
                                </div>
                                <p> {name} </p> 
                              </li>
                            )
                          }
                        </Draggable>
                      )
                    })
                  }
                  {provided.placeholder}
                </ul>
              )
            }
          </Droppable>
        </DragDropContext>
      </header>
      <p>developed in React Js - Arif Shariati</p>
    </div>
  );
}

export default App;
