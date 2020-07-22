import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 25px;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffd8e7;
  background-color: #fff;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 991px) {
    display: flex;
    align-items: center;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  max-width: 124px;
  width: 100%;
  height: 60px;
`;

export const FavoriteArea = styled.div``;

export const SpaceRight = styled.div`
  flex-basis: 0px;
  flex-grow: 1;
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuWrapper = styled.div``;

export default NavbarWrapper;
