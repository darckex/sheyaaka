import Product from "../Product/Product"
import ImgProduct1 from "../../assets/images/product1.png"
import ImgProduct2 from "../../assets/images/product2.png"
import ImgProduct3 from "../../assets/images/product3.png"
import ImgProduct4 from "../../assets/images/product4.png"
import ImgProduct5 from "../../assets/images/product5.png"

const ProductsList = ({ title }) => {
	const products = [
		{
			img: ImgProduct1,
			name: "White Blazer",
			category: "Long Blazer with buttons",
			price: 345,
			rate: 2,
			colors: ["#9d9d9d", "#000", "#fff"]
		},
		{
			img: ImgProduct2,
			name: "Gucci Long Coat",
			category: "Long with no buttons",
			price: 135,
			rate: 5,
			colors: ["#ce936a", "#0e423e", "#841414"]
		},
		{
			img: ImgProduct3,
			name: "Levi's Sport Shoes",
			category: "Multi colored with lace",
			price: 245,
			discount: 15,
			rate: 0,
			colors: ["#fff"]
		},
		{
			img: ImgProduct4,
			name: "Gucci Coat",
			category: "Long Beige, 3/4 sleeve",
			price: 600,
			rate: 4.8,
			colors: ["#e0a387", "#979797", "#e1d6af"]
		},
		{
			img: ImgProduct5,
			name: "Louis Shirt",
			category: "Short Beige, Long sleeve",
			price: 420,
			rate: 3.6,
			colors: ["#e7e2d4"]
		}
	]
	return (
		<div className="products-list">
			<div className="title">{title}</div>
			<div className="products-holder">
				{products.map((v, k) => (
					<Product key={k} {...v} />
				))}
			</div>
		</div>
	)
}
export default ProductsList
