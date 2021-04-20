import './BackDrop.css'

export const BackDrop = (props: { drawerHandler: (closeDrawer: boolean) => void }) => {
	return (
		<div className="backdrop"
			onClick={() => props.drawerHandler(false)} />
	)
}
