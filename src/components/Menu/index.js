import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  HeroBtnWrapper,
} from "./ProductsElements";

import { Button } from "../ButtonElements";

const Menu = ({ heading, data, props, id }) => {
  return (
    <ProductsContainer lightBg={props.lightBg} id={id}>
      <ProductsHeading greenHeader={props.greenHeader}>
        {heading}
      </ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} lightBg={props.lightBg} />
              <ProductInfo>
                <ProductTitle lightBg={props.lightBg}>
                  {product.name}
                </ProductTitle>
                <ProductDesc lightBg={props.lightBg}>
                  {product.desc}
                </ProductDesc>
                <ProductPrice lightBg={props.lightBg}>
                  {product.price}
                </ProductPrice>
                <HeroBtnWrapper>
                  <Button primary="true" dark="true">
                    Agregar al pedido
                  </Button>
                </HeroBtnWrapper>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Menu;
