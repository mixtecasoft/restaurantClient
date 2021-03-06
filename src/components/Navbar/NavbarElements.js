import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
   background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
   height: 80px;
   margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
   }
`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100vw;
   padding: 0 20px;
`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export const NavItem = styled.li`
   height: 60px;
`;

export const NavLinks = styled(LinkS)`
   color: #fff;
   display: inline-flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-weight: bold;

   &.active {
      border-bottom: 3px solid #ffc500;
   }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export const NavBtnLink = styled(LinkR)`
   border-radius: 50px;
   background: #01bf71;
   white-space: nowrap;
   padding: 10px 22px;
   color: #010606;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover {
      transition: all 0.2s ease-in-out;
      background: #ffc500;
      color: #010606;
   }
`;

export const SocialMedia = styled.section`
   max-width: 300px;
   width: 100%;
`;

export const SocialMediaWrap = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1100px;
   margin: 16px auto 0 auto;

   @media screen and (max-width: 820px) {
      flex-direction: column;
   }
`;

export const SocialIcons = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 240px;
   color: #fff;
   font-size: 24px;
`;
