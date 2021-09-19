import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Folder({ folder }){

	return (
		<Button 
			to={{ 
				pathname: `/folder/${folder.id}`, 
				state: { folder: folder }
			}} 
			variant="outline-dark" 
			className="text-truncate w-1000" as={Link}>
			<FontAwesomeIcon icon={faMusic} className="mr-2"/>&nbsp;
			{ folder.name } 
		</Button>
	)
}