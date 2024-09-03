import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Shopping Cart</Title>
      <CartIcon>
        <FaShoppingCart />
      </CartIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #343a40;
`;

const CartIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Header;

