import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
	return (
		<nav className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<h1 onClick={() => props.drawerHandler(false)}>Exit</h1>
			<h1>shop</h1>
			<h1>gallery</h1>
			<h1>personal</h1>
			<h1>logout</h1>
		</nav>
	)
}
