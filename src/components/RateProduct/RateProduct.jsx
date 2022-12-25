import IconStarActive from "../../assets/icons/star-yellow.png"
import IconStar from "../../assets/icons/star.png"

const RateProduct = () => {
	return (
		<div className="rate-product">
			<div className="title">
				<div>Tell your opinion by assigning a rating</div>
				<div className="char-count">0/150 characters</div>
			</div>
			<textarea placeholder="TypeHere" />
			<div className="button-holder">
				<div className="star-holder">
					<img
						className="star"
						src={IconStarActive}
						alt="rating star 1"
					/>
					<img
						className="star"
						src={IconStarActive}
						alt="rating star 2"
					/>
					<img
						className="star"
						src={IconStarActive}
						alt="rating star 3"
					/>
					<img className="star" src={IconStar} alt="rating star 4" />
					<img className="star" src={IconStar} alt="rating star 5" />
					<div className="rating-count">3/5</div>
				</div>
				<button className="button">Rate The Product</button>
			</div>
		</div>
	)
}
export default RateProduct
