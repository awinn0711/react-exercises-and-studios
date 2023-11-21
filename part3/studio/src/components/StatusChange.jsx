import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("");
   const [recipeStatus, setStatus] =useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
   };
   
   const haveTried = () => {
      return recipeStatus? "I have tried this!" : "I haven't tried this!";

   };

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes}</p>

         <p>{haveTried()}</p>
      </div>
   );
}
