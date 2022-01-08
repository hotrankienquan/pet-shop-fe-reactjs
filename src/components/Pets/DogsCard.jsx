import { useContext, useState } from "react";
import { CardContext } from "../../Context/CardContext";
import "./DogsCard.css"
const DogsCard = (props) => {
	const { id, name, breed, description, price, imageUrl } = props;
	const [isAdded, setAdded] = useState(false)
	const { addToCart, setTotal } = useContext(CardContext)
	//  lay value addToCart trong kho
	const handleClick = () => {
		setAdded(!isAdded)
		const newItems = {
			id:id,
			name: name,
			price: price,
			imageUrl:imageUrl
		}
		addToCart((item) => [...item, newItems])
		setTotal((total) => total += Number(price))
	}
	return ( 
		<>
			<section className="dogs">
				<div className="dogs-info">
					<p>{name}</p>
					<p>{breed}</p>
					
				</div>
				<div className="dogs-img-container">
					<img src={ imageUrl} alt="" />
				</div>
				<div className="dogs-description">
					{ description}
				</div>
				<div className="dogs-price">{price}$</div>
				{isAdded ? (
				<button className="dogs-btn-disabled" onClick={handleClick}>ADDED</button>
				) : (
						<button className="dogs-btn" onClick={handleClick}>ADD to cart</button>
				)}
				
		</section>
		</>
	 );
}
 
export default DogsCard;