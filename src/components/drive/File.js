import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

export default function File({ file }){
	return (
		<a href={file.url} 
		target="_blank" 
		className="btn btn-outline-dark 
		text-truncate w-100">

		<FontAwesomeIcon icon={faFileUpload} className="mr-2" />&nbsp;{file.name}</a>
	)
}