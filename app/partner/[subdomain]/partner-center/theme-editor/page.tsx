"use client"

import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';

const masterSections = [
  {
    id: 'header',
    name: 'Header Section',
  },
  {
    id: 'welcome',
    name: 'Welcome Section',
  },
]

function SectionItem(provided: any){
  return (
    <div className="bg-gray-100 px-2 py-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
    </div>
  );
}

const removeFromList = (list: any, index: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

function Page() {
  const [sections, setSections] = useState(masterSections);
  const [views, setViews] = useState<any>({});
  const [keysView, setKeysView] = useState<any>([]);
  const [activeEdit, setActiveEdit] = useState<any>();
  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    let items = Array.from(sections);
    let itemViews = {...views};
    let keysV = Array.from(keysView);
    // console.log(result)
    // console.log(result.destination.droppableId)

    // const [removedElement, newSourceList] = removeFromList(
    //   items,
    //   result.source.index
    // );

    // console.log(newSourceList)
    // if(result.source.droppableId === 'sections' && result.destination.droppableId === 'sections'){
    //   const [reorderedItem] = items.splice(result.source.index, 1);
    //   items.splice(result.destination.index, 0, reorderedItem);
    // }

    if(result.source.droppableId === 'sections' && result.destination.droppableId === 'views'){

      if(!itemViews[items[result.source.index].id]){
        itemViews[items[result.source.index].id] = {
          name: items[result.source.index].name,
          id: items[result.source.index].id,
          containerStyle: {background: '#f4f4f4', padding: '8px 8px'},
          content: []
        }
        keysV = Object.keys(itemViews);
      }
    }

    if(result.source.droppableId === 'views' && result.destination.droppableId === 'views'){
      const [reorderedItem] = keysV.splice(result.source.index, 1);
      keysV.splice(result.destination.index, 0, reorderedItem);
    }

    setSections(items);
    setViews(itemViews);
    setKeysView(keysV)
  }
  // let keysView = Object.keys(views);

  const handledblclick = (id: any) => {
    setActiveEdit(views[id]);
  }

  const changeProperty = (val: any) => {
    let newActiveEdit = {};
  }

  return (
    <div>
      <div className="">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex items-center">
            <div className="w-[400px] flex flex-col h-screen bg-slate-100 pt-[56px]">
              <Droppable droppableId="sections">
                {(provided) => (
                  <ul className="flex flex-col gap-3 py-2 px-2" {...provided.droppableProps} ref={provided.innerRef}>
                    {sections.map(({id, name}, index) => {
                      return (
                        <Draggable isDragDisabled={keysView.includes(id)} key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li className="bg-gray-100 px-2 py-2 border-[1px] rounded-md" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <p>
                                { name }
                              </p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
            <div className="h-screen w-full bg-slate-200 pt-[56px] flex items-center justify-center" >
              <div className="w-[350px] h-full py-10">
                <Droppable droppableId="views">
                  {(provided) => (
                    <div className="w-full h-full bg-white" {...provided.droppableProps} ref={provided.innerRef}>
                      {
                        keysView.map((itm: any, index: any) => {
                          return(
                            <Draggable key={views[itm].id} draggableId={views[itm].id} index={index}>
                              {(provided) => (
                                <div onDoubleClick={() => handledblclick(views[itm].id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div className={`px-2 py-2 hover:bg-blue-50`} style={views[itm].containerStyle}>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          )
                        })
                      }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            {
              activeEdit && (
                <div className="w-[400px] flex flex-col h-screen bg-slate-100 pt-[56px]">
                  <p>{activeEdit.name}</p>
                  <input type="text" name="background" value={activeEdit.containerStyle.background} onChange={(e) => changeProperty(e.target.value)} />
                </div>
              )
            }
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Page;