const MobileNavItem = ({ name, icon }) => {
	return (
		<div className="mobile-nav-item">
			<img src={icon} alt={`${name} icon`} />
			<div className="name">{name}</div>
		</div>
	)
}
export default MobileNavItem
