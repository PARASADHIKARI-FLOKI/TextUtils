import React from 'react';

const Navbar = (props) => {
  return (
    <div >
       {props.mode === "light" ? "Dark Mode" : "Light Mode"}
    </div>
  );
};


export default Navbar;