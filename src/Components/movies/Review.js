import React from "react";

const Review = (props) => {
  const goBack = () => {
    props.history.push({
        pathname: '/about',
        search: '?category=adventure',
        hash: '#treasure-island',
        state: { from: props.location.pathname },
        name: "hello"
      });
  };

  return (
    <div>
      <h2>Review</h2>
      <button onClick={goBack}>GoBack</button>
    </div>
  );
};

export default Review;
