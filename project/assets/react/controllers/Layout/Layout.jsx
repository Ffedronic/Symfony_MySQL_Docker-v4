import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Hero />
      <main className="container">{props.children}</main>
      <footer className="py-4 my-5 bg-light">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
