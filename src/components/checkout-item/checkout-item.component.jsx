import { useDispatch, useSelector } from 'react-redux';

//import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';    

import { CheckoutItemContainer, ImageContainer, Text, Quantity, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    //const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Text>{name}</Text>
            <Quantity>
                <div onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={addItemHandler}>
                    &#10095;
                </div>
            </Quantity>
            <Text>{price}</Text>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;