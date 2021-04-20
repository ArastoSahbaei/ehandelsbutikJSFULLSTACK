import React, { useState } from 'react'
import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'

export const GalleryView = () => {
	const [data, setData] = useState<any>()
	const [characterID, setCharacterID] = useState<string>('')

	const fetchData = () => {
		StarWarsAPIService.getLukeSkywalker()
			.then(response => { setData(response) })
			.catch(error => { console.log(error) })
	}

	const fetchData2 = async () => {
		try {
			const response = await StarWarsAPIService.getStarWarsCharacter(characterID)
			setData(response.data)
		} catch (error) {
			console.log('error occured: ', error)
		}
	}

	return (
		<div>
			<button onClick={() => fetchData2()}>make api call</button>
			<button onClick={() => console.log(data)}>check my state</button>
			<input placeholder='search for character ID'
				onChange={event => setCharacterID(event.target.value)} />
			<h1>name: {data?.name}</h1>
			<h1>hair_color: {data?.hair_color}</h1>
			<h1>gender: {data?.gender}</h1>
			<h1>height: {data?.height} cm</h1>
		</div>
	)
}