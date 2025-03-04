import Card from "./components/Card";

export default function App() {
  const fruits = [
{ id: 1, name: "🍌Banane" , color: "yellow"},
{ id: 2, name: "🍏Apple" , color:"green"},
{ id: 3, name: "🍓Strawberry" , color:"red"},
{ id: 4, name: " 🍇Grape" , color:"purple"},
{ id:5, name: "🍊orange" , color:"orange"},




  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
      <Card key={fruit.id} name={fruit.name} color={fruit.color} />
  ))}

    </div>
  );
}
