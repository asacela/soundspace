import React from 'react'
import Navbar from './Navbar'
import AddFolderButton from './AddFolderButton'
import AddFileButton from './AddFileButton'
import ProjectFolder from './ProjectFolder'
import ProjectFile from './ProjectFile'
import { Container, ListGroup, FileContainer, Dropdown } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import { useParams, useLocation } from 'react-router-dom' 
import ProjectBreadcrumbs from './ProjectBreadcrumbs'
import ProjectContainer from './ProjectContainer'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function ProjectDashboard(){

	const { folderId } = useParams()
	const { state = {} }  = useLocation()	
	const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

	function alertClicked(e) {

	}

	return (
		<>
			<Navbar/>
				&nbsp;
			
			<ProjectContainer fluid>
				<div className='d-flex align-items-center'>
					<ProjectBreadcrumbs currentFolder={folder}/>
					<AddFileButton currentFolder={folder}/>&nbsp;
					<AddFolderButton currentFolder={folder}/>
				</div>
					&nbsp;
			<h5>{folder !== null ? folder.name : ''}</h5>
			<ListGroup defaultActiveKey="#link1">
			 	<ListGroup.Item action onClick={alertClicked}>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Versions
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{ childFolders.length > 0 && (
							<div>
							{
								childFolders.map(childFolder => (
									<div key={childFolder.id}>
										<ProjectFolder folder={childFolder} />
									</div>
								))
							}
							</div>
						)}
					</Dropdown.Menu>
				</Dropdown>
			    </ListGroup.Item>
			   
			    { childFiles.length > 0 && (
						<div>
						{
							childFiles.map(childFile => (
								<div key={childFile.id} >
									<ProjectFile file={childFile} />
								</div>
							))
						}
						</div>
					)}
			</ListGroup>
			<div>
				<AudioPlayer
		          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
		        />
	        </div>
			</ProjectContainer>
			
		</>
	)
}