import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink } from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Search
		</NavLink>
		<NavLink to='/dogs' activeStyle>
			Dogs
		</NavLink>
		<NavLink to='/cats' activeStyle>
			Cats
		</NavLink>
		<NavLink to='/sheeps' activeStyle>
			Sheeps
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
