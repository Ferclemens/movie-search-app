import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
      </div>
    );
  }
}

//ReactDOM.render(<Main />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
