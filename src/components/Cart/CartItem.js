import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../../actions";

export const CartItem = ({ title, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemContaienr>
      <Top>
        <ItemTitle>{title}</ItemTitle>
        <CloseButton onClick={() => dispatch(removeItem({ id }))}>
          X
        </CloseButton>
      </Top>
      <Bottom>
        <Quantity>
          Quantity: <QuantityCount>{quantity}</QuantityCount>
        </Quantity>
      </Bottom>
    </ItemContaienr>
  );
};

const ItemContaienr = styled.div`
  border: 1px dashed gray;
  color: white;
`;

const Top = styled.div`
  height: 40px;
  padding: 7px;
  position: relative;
`;

const Bottom = styled(Top)`
  background-color: #370d32;
`;

const ItemTitle = styled.p`
  font-size: 1.3rem;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 5px;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;

const Quantity = styled.p`
  margin: 0;
`;

const QuantityCount = styled.span`
  margin-left: 5px;
  font-weight: bolder;
  background-color: white;
  color: black;
  padding: 2px 5px;
`;
