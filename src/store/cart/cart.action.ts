import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //si aún no existe
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

const decrementCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return removeCartItem(cartItems, existingCartItem);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id && cartItem.quantity > 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartITems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartITems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decrementItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = decrementCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
