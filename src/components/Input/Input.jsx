const Input = ({ icon }) => {
	return (
		<label className="input">
			<input />
			{!!icon && <img className="icon" src={icon} alt={`input icon`} />}
		</label>
	)
}
export default Input
