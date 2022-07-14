import React, { useState } from 'react';
import Input from './Input';
import jsonData from './cities.json';

function App() {
   const [input, setInput] = useState(null);
   const handleChange = (e) => {
      if (e) {
         const itemMach = jsonData.find(item => item.includes(e));
         setInput(itemMach)
      } else {
         setInput(null)

      }
   }
   return <div><Input hint={input} handleChange={(e) => { handleChange(e.target.value) }} /></div>
}

export default App;
