import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import styled from "styled-components";

const Warpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;
const Board = styled.div`
  padding: 20px 10px;
  background-color: ${(props) => props.theme.borderColor};
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 5px;
`;
const Card = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f",];

function App() {
  const onDragEnd = () => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Warpper>
        <Boards>
            <Droppable droppableId="one">{(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (<Draggable draggableId={toDo} index={index}>
                  {(magic) => (
                    <Card 
                      ref={magic.innerRef} 
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >{toDo}</Card>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </Board>)}
          </Droppable>
        </Boards>
      </Warpper>
    </DragDropContext>
  );
}

export default App;