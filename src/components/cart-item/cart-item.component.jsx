import { CartItemContainer, ItemDetailsContainer, CartItemImage } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;