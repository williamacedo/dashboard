import { useState, useEffect } from "react";
import Router from "next/router";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../assets/globalStyles.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(Router.pathname.replace("/", ""));
  }, []);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    Router.push(`/${name}`);
  };

  return (
    <div>
      <Header activeItem={activeItem} handleItemClick={handleItemClick} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
