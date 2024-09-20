import * as React from 'react';
import './VerticalTabMenu.css';

export interface IVerticalTabItemProps {
    img: string,
    title: string,
    description: string,
    info: string
}

function VerticalTabItem (props: IVerticalTabItemProps) {
  return (
    <div className='container'>
      <img src={props.img} className='cover'/>
      <p className='title'>{props.title}</p>
      <p className='descr'>{props.description}</p>
      <p className='info'>{props.info}</p>
      <button className='btn btn-add'>Add</button>
    </div>
  );
}

export default VerticalTabItem;