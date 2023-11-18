let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  // const rating = props.rating;
  // console.log;
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  };
  console .log ("Recipe Rated");
  return props.rating <= 5 && props.rating >= 1 ? <GiveRating /> : null;

};

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
