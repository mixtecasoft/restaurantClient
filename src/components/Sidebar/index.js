import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="camarones" onClick={toggle}>
            CAMARONES
          </SidebarLink>
          <SidebarLink to="pescados" onClick={toggle}>
            PESCADOS
          </SidebarLink>
          <SidebarLink to="cocteleria" onClick={toggle}>
            COCTELERIA
          </SidebarLink>
          <SidebarLink to="bebidas" onClick={toggle}>
            BEBIDAS
          </SidebarLink>
          <SidebarLink to="reserva" onClick={toggle}>
            RESERVA
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Ordenar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
