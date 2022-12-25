import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import Header2 from "./components/Header2/Header2"
import MobileHeader from "./components/MobileHeader/MobileHeader"
import MobileNav from "./components/MobileNav/MobileNav"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import ProductsList from "./components/ProductsList/ProductsList"
import RateProduct from "./components/RateProduct/RateProduct"
import Ratings from "./components/Ratings/Ratings"
import TabDetails from "./components/TabDetails/TabDetails"
import TopStrip from "./components/TopStrip/TopStrip"

const App = () => {
	return (
		<div className="app">
			<TopStrip />
			<Header />
			<MobileHeader />
			<Header2 />
			<ProductDetails />
			<Container>
				<TabDetails />
				<div className="rating-holder">
					<Ratings />
					<RateProduct />
				</div>
				<ProductsList title="You May Also Like" />
				<ProductsList title="Complete The Look" />
			</Container>
			<MobileNav />
		</div>
	)
}
export default App
