import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//import { UserContext } from "../../contexts/user.context";
//import { CartContext } from "../../contexts/cart.context";
import { signOutStart } from "../../store/user/user.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
//import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  //const { isCartOpen } = useContext(CartContext);
  
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  /*const signOutHandler = async () => {
    await signOutUser();
  }*/

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainer to="/">
              <CrwnLogo className="logo" />
          </LogoContainer>
          <NavLinks>
              <NavLink to='/shop'>
                  Shop
              </NavLink>
              { 
                currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                    Sign Out
                  </NavLink>
                ) : (
                  <NavLink to='/auth'>
                      Sign In
                  </NavLink>
                )
              }
              <CartIcon />
          </NavLinks>
          {!isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;