import React from "react";
import styled from "styled-components";
import { Cart } from "./Cart/Cart";
import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: (3fr, 1fr);
  grid-template-areas:
    "header header header header"
    "main main main sidebar";
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
  border-right: 3px dashed #ff406e;
`;

const CartWrapper = styled.div`
  margin: 0 5px;
  grid-area: sidebar;
  padding-left: 8px;
  background-color: #45103e;
`;

export default App;
