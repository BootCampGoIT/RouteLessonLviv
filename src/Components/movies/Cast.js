import React from "react";

const Cast = (props) => {
  console.log("props", props);

  //   props.history.push("/about")

  return (
    <div>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/8TS89UBZeQQ'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></iframe>
    </div>
  );
};

export default Cast;
