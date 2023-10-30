import { useEffect, useState } from 'react'

export const useKeyDown = (callback, keys) => {
	const [isKeyPressed, setIsKeyPressed] = useState(false)

	const onKeyDown = (event) => {
		const wasAnyKeyPressed = keys.some((key) => event.key === key)
		if (wasAnyKeyPressed && isKeyPressed === false) {
			event.preventDefault()
			setIsKeyPressed(true)
			callback(event)
		}
	}

	const onKeyUp = (event) => {
		const wasAnyKeyPressed = keys.some((key) => event.key === key)
		if (wasAnyKeyPressed) {
			event.preventDefault()
			setIsKeyPressed(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown)
		document.addEventListener('keyup', onKeyUp)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.removeEventListener('keyup', onKeyUp)
		}
	})
}
