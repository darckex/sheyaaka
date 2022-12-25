import Container from "../Container/Container"
import IconPrice from "../../assets/icons/price.png"
import IconCountry from "../../assets/icons/country.png"

const Header2 = () => {
	return (
		<div className="header2">
			<Container>
				<div></div>
				<div className="menu">
					<a href="#">New In</a>
					<a href="#">Shop By</a>
					<a href="#">Designers</a>
					<a href="#">Clothing</a>
					<a href="#">Shoes</a>
					<a href="#">Bags</a>
					<a href="#">Accessories</a>
					<a className="active" href="#">
						Sale
					</a>
				</div>
				<div className="icon-holder">
					<img src={IconPrice} alt="Price" />
					<img src={IconCountry} alt="Country" />
				</div>
			</Container>
		</div>
	)
}
export default Header2
