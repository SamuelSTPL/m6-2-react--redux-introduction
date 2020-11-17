import React from "react";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import Button from "../Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers/index";

export const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  //Calculate total
  let total = 0;
  storeItems.forEach((item) => {
    total += (item.price * item.quantity) / 100;
    return total;
  });
  total = total.toFixed(2);

  return (
    <CartWrapper>
      <TitleWrapper>
        <CartTitle>Your Cart</CartTitle>
        <ItemCount>
          <NumberDisplay>{storeItems.length}</NumberDisplay> Item
        </ItemCount>
      </TitleWrapper>
      <CartItemContainer>
        {storeItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          );
        })}
      </CartItemContainer>
      <PurchaseWrapper>
        Total: {total}
        <PurchaseButton>Purchase</PurchaseButton>
      </PurchaseWrapper>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  margin-right: 5px;
  height: 100%;
  position: relative;
`;
const TitleWrapper = styled.div`
  color: white;
  margin-left: 20px;
`;

const CartTitle = styled.p`
  margin-bottom: 0px;
  font-size: 2rem;
  font-weight: bold;
`;

const ItemCount = styled.p`
  font-size: 1.5rem;
`;

const NumberDisplay = styled.span`
  font-weight: bolder;
  margin-right: 5px;
`;

const CartItemContainer = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const PurchaseWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const PurchaseButton = styled(Button)`
  width: 120px;
`;
