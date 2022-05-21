import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header>
      <StaticImage
        src="../images/CatwikiLogo.svg"
        alt="catWiki logo"
        objectFit="contain"
        objectPosition="left"
      />
    </header>
  );
};

export default Header;
