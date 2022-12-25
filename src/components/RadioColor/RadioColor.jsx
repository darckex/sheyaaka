const RadioColor = ({ name, color, disabled }) => {
	return (
		<label className="radio-color" disabled={disabled}>
			<input type="radio" name={name} value={color} />
			<div className="radio" style={{ backgroundColor: color }}></div>
		</label>
	)
}
export default RadioColor
