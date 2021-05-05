import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function HoldHeight({ initialHeight, resetOnWindowResize, children, style }) {
  const [height, setHeight] = useState(initialHeight || 0);
  const [windowWidth, setWindowWidth] = useState(0);
  const reset = resetOnWindowResize;

  const me = useRef(null);
  const resetHeight = _.debounce(() => {
    if (windowWidth !== window.innerWidth && reset === true) {
      setHeight(initialHeight || 0);
      setWindowWidth(window.innerWidth);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", () => resetHeight());
    updateHeight();

    return () => {
      window.removeEventListener("resize", () => resetHeight());
    };
  }, []);

  useEffect(() => {
    updateHeight();
  }, [children]);

  function updateHeight() {
    const refHeight = me.current.clientHeight;

    if (refHeight > height) setHeight(refHeight);
  }

  return (
    <div ref={me} style={{ ...style, minHeight: height }}>
      {children}
    </div>
  );
}

HoldHeight.propTypes = {
  resetOnWindowResize: PropTypes.bool,
  initialHeight: PropTypes.number,
};

export default HoldHeight;
