"use client"

import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";



const ListItem = ({ item, provided, snapshot }: any) => {

  return (
    <div
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div>s</div>
      <span>{item.id}</span>
      <div>
        <span>{item.content}</span>
        <div>
          {item.id}
        </div>
      </div>
    </div>
  );
};

export default ListItem;