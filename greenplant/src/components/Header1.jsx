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
            <SubDepth>
              <li>1-1</li>
              <li>1-2</li>
            </SubDepth>
          </li>
          <li>
            <a>submenu02</a>
            <SubDepth>
              <li>2-1</li>
              <li>2-2</li>
            </SubDepth>
          </li>
          <li>
            <a>submenu03</a>
            <SubDepth>
              <li>3-1</li>
              <li>3-2</li>
            </SubDepth>
          </li>
          <li>
            <a>submenu04</a>
            <SubDepth>
              <li>4-1</li>
              <li>4-2</li>
            </SubDepth>
          </li>
          <li>
            <a>submenu05</a>
            <SubDepth>
              <li>5-1</li>
              <li>5-2</li>
            </SubDepth>
          </li>
          <li>
            <a>KR</a>
          </li>
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

  &:hover {
    border: none;
  }
`;

const Nav = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

const Depth = styled.ul`
  content: '';
  display: block;
  clear: both;
  display: flex;

  &:hover {
    transition-duration: 0.5s;
  }
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

  &:hover ul {
    display: grid;
  }
`;

const SubDepth = styled.ul`
  z-index: 100;
  text-align: center;
  transition: height 0.3s ease;

  padding: 0;
  margin: 0;
  list-style-type: none;
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(3px);

  li {
    height: 50px;
    text-align: center;
    cursor: pointer;
  }
`;
const Log = styled.div`
  width: 100px;
  position: absolute;
  top: 20;
  left: 20px;
`;
