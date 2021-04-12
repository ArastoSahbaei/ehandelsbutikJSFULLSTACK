export const GalleryView = () => {

	const username = localStorage.getItem('username')

	return (
		<div>
			<h1>{username}</h1>
		</div>
	)
}
