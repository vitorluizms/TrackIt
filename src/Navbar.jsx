import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./context/UserContext";

export default function NavBar() {

  const {urlImage} = useContext(UserContext)
  return (
    <Navbar data-test="header">
      <div>
        <p>TrackIt</p>
        <img
          src={urlImage}
          alt="profile"
          data-test="avatar"
        />
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  div {
    width: 100%;
    height: 70px;
    margin: 0 3% 0 3%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;

    color: #ffffff;
  }

  img {
    width: 51px;
    border-radius: 98.5px;
  }
`;