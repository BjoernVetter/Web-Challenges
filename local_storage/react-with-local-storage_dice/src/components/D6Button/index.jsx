import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ onRoll }) {
  const handleRoll = () => {
    onRoll({ value: getD6Roll(), time: Date.now() }); // ✅ Korrekte Version
  };

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 />
    </button>
  );
}
