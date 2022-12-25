import ImgMobileLogo from "../../assets/images/mobile-logo.png"
import IconSearch from "../../assets/icons/search.png"
import IconBack from "../../assets/icons/back.png"
import Container from "../Container/Container"
const MobileHeader = () => {
	return (
		<div className="mobile-header">
			<Container>
				<div className="top">
					<img src={ImgMobileLogo} alt="Sheyaaka logo" />
					<img
						className="search"
						src={IconSearch}
						alt="Search icon"
					/>
				</div>
				<div className="bottom">
					<img src={IconBack} alt="Back icon" />
					<div className="title">
						<div className="text">View Product</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default MobileHeader
