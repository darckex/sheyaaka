import SlideImg from "../../assets/images/slide1.png"
import IconHeart from "../../assets/icons/heart.png"

const ImgSlides = () => {
	return (
		<div className="img-slides">
			<div className="active-slide">
				<img className="img" src={SlideImg} alt="slide 1" />
				<div className="top">
					<div className="tag">Low on stock</div>
					<img className="icon" src={IconHeart} alt="heart icon" />
				</div>
			</div>
			<div className="thumbnail-holder">
				<img src={SlideImg} alt="Slide 2" />
				<img src={SlideImg} alt="Slide 3" />
				<img src={SlideImg} alt="Slide 4" />
				<img src={SlideImg} alt="Slide 5" />
			</div>
		</div>
	)
}
export default ImgSlides
