import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <StaticImage
          src="../images/CatwikiLogo.svg"
          alt="catWiki logo"
          objectFit="contain"
          objectPosition="left"
        />
      </Link>
    </header>
  );
};

export default Header;
