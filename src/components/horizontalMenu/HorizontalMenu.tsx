import * as React from 'react';
import '../../pages/CreateSpaceShipPage.css'
import './HorizontalMenu.css'
import { Hull } from '../../domain/models/hull';


export interface IHorizontalMenuProps {
}

export function HorizontalMenu (props: IHorizontalMenuProps) {
    const [hullImg, setHullImg] = React.useState<string>('');
    const [listHull, setListHull] = React.useState<Hull[]>([]);
    return (
    <>
        <div className={'btn-back'}>
            <button className='btn btn-large'>&#60;</button>
        </div>
        <div className={'hull-img'}>
            <img src={hullImg}/>
        </div>
        <div className={'btn-next'}>
            <button className='btn btn-large'>&#62;</button>
        </div>
    </>
    );
}
