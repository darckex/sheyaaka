import { useState } from "react"

const QuantityInput = ({ value }) => {
	const [value1, setValue1] = useState(parseInt(value))

	const increment = () => {
		setValue1(value1 + 1)
	}

	const decrement = () => {
		const newValue = value1 - 1
		if (newValue < 1) return
		setValue1(newValue)
	}

	return (
		<div className="quantity-input">
			<div className="name">Qauntity: </div>
			<button className="mobile-button" onClick={decrement}>
				-
			</button>
			<input type="number" readOnly name="quantity" value={value1} />
			<button className="mobile-button" onClick={increment}>
				+
			</button>
			<div className="button-holder">
				<button onClick={increment}>+</button>|
				<button onClick={decrement}>-</button>
			</div>
		</div>
	)
}
export default QuantityInput
