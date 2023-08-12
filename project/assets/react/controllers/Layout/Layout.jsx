import React from "react";

function Layout(props) {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand mb-0">Reservation a App</h1>
        </nav>
      </header>
      <main className="">
        <h2 className="">
          Make easier your reservation through our application
        </h2>
        {props.children}
      </main>
      <footer className="">@Reservation app - 2023</footer>
    </>
  );
}

export default Layout;
