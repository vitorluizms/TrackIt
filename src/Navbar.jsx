import styled from "styled-components";

export default function NavBar() {
  return (
    <Navbar>
      <div>
        <p>TrackIt</p>
        <img
          src="https://i.pinimg.com/originals/08/41/ea/0841ea1975884bd483353ee4a7b17ae6.jpg"
          alt="profile"
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
    font-size: 38.982px;
    line-height: 49px;

    color: #ffffff;
  }

  img {
    width: 51px;
    border-radius: 98.5px;
  }
`;