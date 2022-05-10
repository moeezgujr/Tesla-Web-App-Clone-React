import React, { useState } from "react";
import styled from "styled-components";
import bars from "./bars-solid.svg";
import close from "./close.svg";
import { selectCars } from "../features/car/carSlice";
import { useSelector, useDispatch } from "react-redux";
function Header() {
  const [openBurger, setOpenBurger] = useState(true);
  const { cars } = useSelector((state) => state.car);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu1>
        {cars &&
          cars.map((car, index) => (
            <p>
              <a key={index} href="#">
                {car}
              </a>
            </p>
          ))}
      </Menu1>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <BurgerIcon
          onClick={() => setOpenBurger(false)}
          src={bars}
          height={20}
        />{" "}
      </RightMenu>
      <BurgerNav show={openBurger}>
        <CustomWrapper>
          <CloseBtn
            src={close}
            height={20}
            onClick={() => setOpenBurger(true)}
          />{" "}
        </CustomWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;
const Menu1 = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 786px) {
    display: none;
  } ;
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
const CloseBtn = styled.img`
  cursor: pointer;
`;
const BurgerIcon = styled.img`
  cursor: pointer;
`;
export default Header;
