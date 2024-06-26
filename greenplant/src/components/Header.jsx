import styled from 'styled-components';
function Header() {
  return (
    <NavWrapper>
      <Log>
        <img
          src='/Logo.png'
          alt='Logo'
        />
      </Log>
      <Nav>
        <Depth>
          <li>
            <a>submenu01</a>
          </li>
          <li>
            <a>submenu02</a>
          </li>
          <li>
            <a>submenu03</a>
          </li>
          <li>
            <a>submenu04</a>
          </li>
          <li>
            <a>submenu05</a>
          </li>

          <button>KR</button>
        </Depth>
      </Nav>
    </NavWrapper>
  );
}

export default Header;

const NavWrapper = styled.div`
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: relative;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

const Depth = styled.ul`
  display: flex;
  align-items: center;

  li {
    width: 150px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 80px;
    text-decoration: none;
  }

  ul {
    display: none;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: 1px solid rgb(255, 255, 255, 0.6);
    border-radius: 3px;
    background-color: transparent;
    width: 50px;
    height: 30px;
  }
`;

const Log = styled.div`
  position: absolute;
  left: 20px;
  img {
    width: 200px;
  }
`;
