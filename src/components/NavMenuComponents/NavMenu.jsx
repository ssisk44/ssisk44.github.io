import '../../styles/NavMenu/NavMenu.css'
import projectsInfo from '../../../data/projectsInfo'

function NavMenu() {

	function handleMenuSelection(event){
		null
	}

	return (
		<div className='nav-container'>
			<h1 className='nav-menu-title-name'>Samuel Sisk</h1>
		
			<h5 className='nav-item nav-text-home nav-menu-section'>Home</h5>
			
			<div className='nav-menu-section'>
				<h2 className='nav-item nav-section-title'>Projects</h2>
				{projectsInfo.data.map((projectInfo) =>
					<h5 key={projectInfo.id} className="nav-item nav-selection" onClick={handleMenuSelection}>
						{projectInfo.title}
					</h5>
				)}
			</div>	

			<div className='nav-menu-section'>
				<h2 className='nav-item nav-section-title'>Info</h2>
				<h5 className='nav-item nav-selection'>About</h5>
				<h5 className='nav-item nav-selection'>Contact</h5>
			</div>

		</div>
	)
}

export default NavMenu