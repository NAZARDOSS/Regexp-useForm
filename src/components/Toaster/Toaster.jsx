import React from "react";
import styles from "./Toaster.scss";
function Toaster() {
  return (
    <div className="toaster">
      <span className="icon">✓</span>
      <span className="message">Successful</span>
    </div>
  );
}

export default Toaster;
