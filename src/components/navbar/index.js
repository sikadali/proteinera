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
			TUTORIAL
		</NavLink>
		<NavLink to='/byentry' activeStyle>
			ABOUT US
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
