import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function NavbarComponent() {
	
	return (
		<Navbar bg="dark" variant="dark" expand="sm">

			<Navbar.Brand>
				&ensp;
				<FontAwesomeIcon icon={faHeadphones} 
				className="mr-2"/>&nbsp;&nbsp;SoundSpace
			</Navbar.Brand>
			<Nav>
				<Nav.Link as={Link} to="/user">
				Profile &ensp;
				</Nav.Link>
			</Nav>
		</Navbar>
	)
}