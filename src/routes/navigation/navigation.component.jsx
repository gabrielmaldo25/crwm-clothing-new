import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown";
import CartDropdown from "../../components/cart-dropdwon/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className={"logo"} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
