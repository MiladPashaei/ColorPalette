import React from 'react';
import DragableColorBox from './DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const draggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, index) => (
        <DragableColorBox
          key={color.name}
          handleClick={() => deleteColor(color.name)}
          color={color.color}
          name={color.name}
          index={index}
        />
      ))}
    </div>
  );
});

export default draggableColorList;
