import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#150f0f")};
  color: #fff;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 250px;
`;

export const ProductImg = styled.img`
  height: 250px;
  min-width: 250px;
  max-width: 100%;
  box-shadow: 8px 8px ${({ lightBg }) => (lightBg ? "#01bf71" : "#ffc500")};
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ greenHeader }) => (greenHeader ? "#01bf71" : "#fff")};
`;

export const ProductTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ lightBg }) => (lightBg ? "#01bf71" : "#ffc500")};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#01bf71")};
`;

export const ProductPrice = styled.p`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
