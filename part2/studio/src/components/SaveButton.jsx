import "./styling.css";

function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  console.log("Save Button");
  
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
