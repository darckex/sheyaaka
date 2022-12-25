import IconCartPlus from "../../assets/icons/cart-plus.png"
import IconHeart from "../../assets/icons/heart-dark.png"
import IconStarYellow from "../../assets/icons/star-yellow.png"
import IconStar from "../../assets/icons/star.png"
import RadioColor from "../RadioColor/RadioColor"

const Product = ({
	img,
	name,
	category,
	price,
	discount = 0,
	rate = 0,
	colors = []
}) => {
	const rateArray = [...Array(5)].map((_, k) => parseInt(rate) <= k)
	return (
		<div className="product">
			<img className="img" src={img} alt="Product" />
			<div className="name">{name}</div>
			<div className="category">{category}</div>
			<div className={`price-holder ${discount ? "has-discount" : ""}`}>
				<div className={"price"}>{price} USD</div>
				{!!discount && (
					<>
						<div className="discount-price">
							{parseInt(price - (price * discount) / 100)} USD
						</div>
						<div className="discount-tag">{discount}% off</div>
					</>
				)}
				<img className="icon" src={IconCartPlus} alt="add cart icon" />
				<img className="icon" src={IconHeart} alt="favorite icon" />
			</div>
			<div className="rate-holder">
				{rateArray.map((v, k) => (
					<img
						className="star"
						key={k}
						src={!v ? IconStarYellow : IconStar}
						alt="rating star icon"
					/>
				))}
				<div className="rate">{rate.toFixed(2)}</div>
			</div>
			<div className="color-holder">
				{colors.map((v, k) => (
					<RadioColor color={v} key={k} />
				))}
			</div>
		</div>
	)
}
export default Product
