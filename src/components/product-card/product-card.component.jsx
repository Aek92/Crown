import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from "../../store/cart/cart.action";

import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={() => addProductToCart(product)}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
