import Container from "../Container/Container"
import Input from "../Input/Input"
import LogoImg from "../../assets/images/full-logo.png"
import IconSearch from "../../assets/icons/search.png"
import IconHeart from "../../assets/icons/heart.png"
import IconPerson from "../../assets/icons/person.png"
import IconLock from "../../assets/icons/lock.png"
const Header = () => {
	return (
		<div className="header">
			<Container>
				<img className="logo" src={LogoImg} alt="Sheyaaka logo" />
				<div className="menu">
					<a href="#">Women</a>
					<a href="#">Men</a>
					<a href="#">Children</a>
					<a href="#">Gift registries</a>
				</div>
				<div className="icon-holder">
					<Input icon={IconSearch} />
					<img
						className="header-icon"
						src={IconHeart}
						alt="favorites"
					/>
					<img className="header-icon" src={IconPerson} alt="user" />
					<img className="header-icon" src={IconLock} alt="Cart" />
				</div>
			</Container>
		</div>
	)
}
export default Header
