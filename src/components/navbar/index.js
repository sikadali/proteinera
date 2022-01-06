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
			SEARCH NEIGHBOURS
		</NavLink>
		<NavLink to='/byname' activeStyle>
			ABOUT US
		</NavLink>
		<NavLink to='/byentry' activeStyle>
			TUTORIAL
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/statistics'>STATISTICS</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
