import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Save</Button> 
      <Button>Delete</Button> 
      <Button>Cancel</Button> 
      <Button>Send</Button> 
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
