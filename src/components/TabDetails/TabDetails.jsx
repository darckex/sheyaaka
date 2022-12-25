import BerryImg from "../../assets/images/berry.png"
const TabDetails = () => {
	return (
		<div className="tab-details">
			<div className="info">
				<div className="name">Blueberry</div>
				<img className="logo" src={BerryImg} alt="Blue berry logo" />
				<button className="follow">Follow +</button>
			</div>
			<div className="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</div>
		</div>
	)
}
export default TabDetails
