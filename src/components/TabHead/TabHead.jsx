import { useState } from "react"

const TabHead = () => {
	const [active, setActive] = useState(3)
	const items = [
		"Description",
		"Highlights",
		"Material & Care",
		"About Vendor"
	]

	const changeTab = (index) => {
		if (index === active) return
		setActive(index)
	}

	return (
		<div className="tab-head">
			{items.map((v, k) => (
				<div
					className={`item ${active === k ? "active" : ""}`}
					key={k}
					onClick={() => changeTab(k)}>
					{v}
				</div>
			))}
		</div>
	)
}
export default TabHead
