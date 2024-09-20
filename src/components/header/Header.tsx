import * as React from 'react';
import Logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderButton from './HeaderButton';

export interface IHeaderProps {
}

function Header (props: IHeaderProps) {
  return (
    <header>
      <HeaderButton path='' icon={<img src={String(Logo)} alt='logo' className='logo'/>}/>
      <HeaderButton text='Create' path='create'/>
    </header>
  );
}

export default Header;