import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] =useState(false)

  return <div>
    <button className="btn" onClick={() => setIsToggled(!isToggled)}>Toggle Me</button>
    {isToggled && <Alert />}
  </div>;
};

export default ToggleChallenge;


const Alert = () => {
  return <div className="alert alert-danger">Hello World</div>;
}