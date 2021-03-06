import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Link from "./styledElements/Link";
import Button from "./styledElements/Buttons";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileMenu from "./MobileMenu";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-info,
  .nav-list,
  .nav-cta {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .nav-list,
  .nav-cta {
    ${Responsive.md`
      display: none;
    `}
  }
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <Container>
        <div className="nav-info">
          <img className="nav-logo" src={logo} alt="shortly logo" />
          <ul className="nav-list">
            <li>
              <Link href="#!" nav>
                Features
              </Link>
            </li>
            <li>
              <Link href="#!" nav>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#!" nav>
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-cta">
          <Link href="#!" nav>
            Login
          </Link>
          <Button href="#!" primarySm>
            Sign Up
          </Button>
        </div>
        <MobileMenuToggle isActive={isActive} setIsActive={setIsActive} />
      </Container>
      <MobileMenu isActive={isActive} />
    </nav>
  );
};

export default Navbar;
