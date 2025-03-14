import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  // const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  const [tags, setTags] = useState([]);
  function handleAddTag (newTag) {
    setTags([...tags, newTag]);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} />
    </main>
  );
}
