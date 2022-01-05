import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function IconArrowLeft({ size = "lg", styles = { color: "#000000" } }) {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} style={styles} size={size} />
    </div>
  );
}

export default IconArrowLeft;
