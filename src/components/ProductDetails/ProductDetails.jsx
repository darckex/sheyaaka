import Container from "../Container/Container"
import ImgSlides from "../ImgSlides/ImgSlides"
import RadioColor from "../RadioColor/RadioColor"
import RadioChip from "../RadioChip/RadioChip"
import QuantityInput from "../QuantityInput/QuantityInput"
import BerryImg from "../../assets/images/berry.png"
import IconStarActive from "../../assets/icons/star-active.png"
import IconStar from "../../assets/icons/star.png"
import IconRuler from "../../assets/icons/ruler.png"
import IconClipBoard from "../../assets/icons/clip-board.png"
import IconHeartYellow from "../../assets/icons/heart-yellow.png"
import TabHead from "../TabHead/TabHead"

const ProductDetails = () => {
	return (
		<div className="product-details">
			<Container>
				<ImgSlides />
				<div className="details">
					<div className="head">
						<div className="info">
							<div className="title">Blueberry</div>
							<div className="tag-holder">
								<div className="tag">Dress Jumpsuit -</div>
								<div className="tag">
									Dress jumpsuit in Organic Cotton
								</div>
							</div>
							<div className="exclusive">Exclusive</div>
							<div className="code">
								<b>Item Code:</b> daefaegw
							</div>
						</div>
						<img
							className="product-logo"
							src={BerryImg}
							alt="Blueberry logo"
						/>
					</div>
					<div className="price-holder">
						<div className="price">
							<div>250 USD</div>
							<div className="vat">VAT Included</div>
						</div>
						<div className="review-holder">
							<div className="star-holder">
								<img src={IconStarActive} alt="Star review 1" />
								<img src={IconStarActive} alt="Star review 2" />
								<img src={IconStarActive} alt="Star review 3" />
								<img src={IconStarActive} alt="Star review 4" />
								<img src={IconStar} alt="Star review 5" />
							</div>
							<div className="count">1 Reviews</div>
						</div>
					</div>
					<div className="color-holder">
						Color:
						<RadioColor name="color" color={"#959db6"} />
						<RadioColor name="color" color={"#95b6b0"} disabled />
						<RadioColor name="color" color={"#fff"} disabled />
						<RadioColor name="color" color={"#000"} disabled />
					</div>
					<div className="size-holder">
						<div className="size-head">
							<div className="name">Size:</div>
							<div className="option-holder">
								<div className="option">
									Find Your Fit{" "}
									<span className="mark">?</span>
								</div>
								<div className="mark">|</div>
								<div className="option">
									Show Size Chart{" "}
									<img src={IconRuler} alt="Ruler icon" />
								</div>
							</div>
						</div>
						<div className="chip-holder">
							<RadioChip name="size" value="S" checked />
							<RadioChip name="size" value="M" />
							<RadioChip name="size" value="L" />
							<RadioChip name="size" value="XL" />
						</div>
					</div>
					<div className="cart-holder">
						<div className="quantity-holder">
							<QuantityInput value={1} />
							<div className="add-cart-holder">
								<button className="add-cart">
									Add To Cart
								</button>
								<div className="add-registry">
									Add to Registry List
									<img
										src={IconClipBoard}
										alt="clip board icon"
									/>
								</div>
							</div>
							<img
								className="heart-icon"
								src={IconHeartYellow}
								alt="favorite"
							/>
						</div>
						<div className="order-holder">
							<div className="text">
								Order Now to get it by{" "}
								<span className="date">Thu, Feb 12</span>
							</div>
							<div className="change-area">Change Area</div>
						</div>
					</div>
					<div className="tab-holder">
						<TabHead />
					</div>
				</div>
			</Container>
		</div>
	)
}
export default ProductDetails
