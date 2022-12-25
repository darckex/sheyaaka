const RadioChip = ({ name, value, checked = false }) => {
	return (
		<label className="radio-chip">
			<input
				type="radio"
				name={name}
				value={value}
				defaultChecked={checked}
			/>
			{value}
		</label>
	)
}
export default RadioChip
