import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "Board 1",
         value: "Korean"
      },
      {
         label: "Board 2",
         value: "Side dishes"
      },
      {
         label: "Board 3",
         value: "Fermented"
      }
   ];

   const [boardName, setName] = useState("no boards yet!");
   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((data) => {
            return (
               <option value={data.value}>{data.label}</option>
            );
         })};
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
