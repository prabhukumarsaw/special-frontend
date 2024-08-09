import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';

const gridItems = [

  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Technology',
  
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Travel',
   
    span: 'relative overflow-hidden rounded-2xl shadow-lg group'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Art',
   
    span: 'relative overflow-hidden rounded-2xl shadow-lg group'
  },
  
];

const GridLayout = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <CardSpotlight
            key={item.id}
            className={`${item.span} relative overflow-hidden rounded-2xl shadow-lg group`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
