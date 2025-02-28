function Greeting({ name }) {
const isCoach = name === "Björn"; 
  return <h1>Hello, {isCoach ? "Coach" : name}! </h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Björn" />
      <Greeting name="Levi" />
      <Greeting name="Natali" />
      <Greeting name="Jan" />
      <Greeting name="Tanja" />
    
    </div>
  );
}
