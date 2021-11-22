import React, { useState } from "react";

function App() {
  const [text,setText]=useState("");
  const handleChange=(e: React.FormEvent<HTMLInputElement>)=>{
    const {value}=e.currentTarget;
    setText(value);
  }

  const hadnleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(text,"????")
  }
  return (
    <form onSubmit={hadnleSubmit}>
        <input value={text} onChange={handleChange} type="text" placeholder="User name" />
        <button type="submit">Login</button>
    </form>
  );
}

export default App;
