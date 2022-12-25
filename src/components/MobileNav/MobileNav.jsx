import MobileNavItem from "./MobileNavItem"
import IconHome from "../../assets/icons/home.png"
import IconCategory from "../../assets/icons/category.png"
import IconChat from "../../assets/icons/chat.png"
import IconCart from "../../assets/icons/cart.png"
import IconProfile from "../../assets/icons/profile.png"

const MobileNav = () => {
	return (
		<div className="mobile-nav">
			<MobileNavItem name="Home" icon={IconHome} />
			<MobileNavItem name="Category" icon={IconCategory} />
			<MobileNavItem name="Chat" icon={IconChat} />
			<MobileNavItem name="Cart" icon={IconCart} />
			<MobileNavItem name="Profile" icon={IconProfile} />
		</div>
	)
}
export default MobileNav
