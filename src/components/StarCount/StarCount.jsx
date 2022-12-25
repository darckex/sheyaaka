import IconStarYellow from "../../assets/icons/star-yellow.png"

const StarCount = ({ value, percent = 0 }) => {
	return (
		<div className="star-count">
			<div className="value">{value}</div>
			<img src={IconStarYellow} alt="Star icon" />
			<div className="bar"></div>
			<div className="percent">{percent}%</div>
		</div>
	)
}
export default StarCount
