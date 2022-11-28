import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function Page() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

//React 17
// ReactDOM.render(navbar, document.getElementById("root"));

//React 18
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
