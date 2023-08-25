import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import './RightNav.css'


const Ul = styled.ul`
  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <>

    
    <div className='nav'>
    <Ul open={open}>
        <h2><li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOME</NavLink></li></h2>
        <h2><li><NavLink to='/ipads' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>IPAD</NavLink></li></h2>
        <h2><li><NavLink to='/mobiles' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>MOBILE</NavLink></li></h2>
        <h2><li><NavLink to='/laptops' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>LAPTOP</NavLink></li></h2>
        <h2><li><NavLink to='/macbook' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>MACBOOK</NavLink></li></h2>
        <h2><li><NavLink to='/accessories' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>ACCESSORIES</NavLink></li></h2>
    </Ul>
    </div>
    </>
  )
}

export default RightNav