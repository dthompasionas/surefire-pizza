import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from "./sidebar";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="/menu" onClick={toggle}>Menu</SidebarLink>
          <SidebarLink to="/location" onClick={toggle}>Location</SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/cart' onClick={toggle}>Cart</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
