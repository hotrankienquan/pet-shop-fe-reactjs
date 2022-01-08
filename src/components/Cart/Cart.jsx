import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../Context/CardContext";
import "./Cart.css"
const Cart = () => {
	const { myCart, total, addToCart, setTotal } = useContext(CardContext)
	const navigate = useNavigate()
	const handleCheckout = () => {
		setTotal(0);
		addToCart([{}])
	}
	const handleGoHome = () => {
		navigate("/")
	}
	return (<>
		<section className="cart-container">
			<div className="cart-header">CHECKOUT</div>
			<div className="cart-items">
				{myCart.slice(1).map((item) => {
					return (
						<div className="cart-item" key={item.id}>
							<img src={item.imageUrl} alt="" className="cart-item-img" />
							{item.name} { item.price}
							</div>
				)
				})}
				<div className="cart-total">TOTAL: { total} </div>
			</div>
			<button className="cart-checkout" onClick={handleCheckout}>DONE</button>
			<button className="cart-gohome"
			onClick={handleGoHome}
			>RETURN HOME</button>
		</section>
	</>);
}
 
export default Cart;