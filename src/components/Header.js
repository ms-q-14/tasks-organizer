import PropTypes from "prop-types";
import Button from "./Button";
import React from "react";

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
