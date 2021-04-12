import { useState } from 'react'

export const SignInView = () => {
	const [username, setUsername] = useState<String>('Arasto')
	const [password, setPassword] = useState<String>('')

	const saveDataToBrowser = () => {
		localStorage.setItem('username', 'arasto')
	}

	const removeDataFromBrowser = () => {
		localStorage.removeItem('username')
	}

	return (
		<div>
			<h1>{username}</h1>
			<span>Username: </span> <input onChange={event => setUsername(event.target.value)} /> <br />
			<span>Password: </span> <input onChange={event => setPassword(event.target.value)} />
			<button onClick={() => saveDataToBrowser()}>SaveDataToBrowser</button>
			<button onClick={() => removeDataFromBrowser()}>RemoveDataFromBrowser</button>
		</div>
	)
}
