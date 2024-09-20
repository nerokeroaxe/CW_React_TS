import * as React from 'react';
import './HeaderButton.css'
import { NavLink } from 'react-router-dom';

export interface IHeaderButtonProps {
    path: string,
    text?: string,
    icon?: React.ReactNode,
    onClick?: () => void,
}

function HeaderButton (props: IHeaderButtonProps) {
  return (
    <NavLink className={'btn-header clickable'} to={props.path}>
        { props.icon ?
            <div>
                {props.icon}
            </div>
        : null }
        { props.text ? 
            <p>
                {props.text}
            </p>
        : null }
    </NavLink>
  );
}

export default HeaderButton;