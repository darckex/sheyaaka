import StarCount from "../StarCount/StarCount"

const Ratings = () => {
	return (
		<div className="ratings">
			<div className="rate">
				<div className="number">4.30</div>
				<div className="count">1 rating</div>
			</div>
			<div className="star-holder">
				<StarCount value={5} percent={100} />
				<StarCount value={4} />
				<StarCount value={3} />
				<StarCount value={2} />
				<StarCount value={1} />
			</div>
		</div>
	)
}
export default Ratings
