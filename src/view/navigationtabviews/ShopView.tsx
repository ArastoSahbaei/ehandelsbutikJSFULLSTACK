import { useEffect, useState } from 'react'

export const ShopView = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		alert('First render!')
		return () => { alert('last Render') }
	}, [counter])


	return (
		<div>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
			<h1>This is the shopview</h1>
		</div>
	)
}
