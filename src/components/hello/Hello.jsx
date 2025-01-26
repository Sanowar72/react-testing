import React, { useEffect, useState } from "react";

const Hello = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>Hello world</div>
      <div>Hello world</div>
      <div>Hello world</div>
      <div>Hello world</div>
      {showMessage && <div>Message shown after 1 second</div>}
    </>
  );
};

export default Hello;
