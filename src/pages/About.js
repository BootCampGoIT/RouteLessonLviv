import React from "react";

const About = (props) => {
    const pathFrom = props.location.state.from
  console.log("props_About", props);
  const goBack = () => {
    props.history.push(pathFrom);
  };
  return (
    <>
      <h2>About</h2>
      <button onClick={goBack}>GoBack</button>
    </>
  );
};

export default About;
