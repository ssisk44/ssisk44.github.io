import '../../styles/LandingPageComponents/ProjectCards.css'
import projectsInfo from '../../../data/projectsInfo'

function ProjectCards() {
	

	return (
		<div className="project-cards-container">
			{projectsInfo.data.map((projectInfo) =>
				<div key={projectInfo.id} className="project-card" style={{backgroundImage: `url(${projectInfo.projectCardImgSrc})`}}>
					{projectInfo.title}
				</div>
			)}
		</div>
	)
}

export default ProjectCards