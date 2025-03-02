export default function App() {
  return (
    
      <Sum valueA={3} valueB={7} />
  
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h2>
      {valueA} + {valueB} = {valueA + valueB}
    </h2>
  );
}
