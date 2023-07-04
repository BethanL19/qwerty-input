import { useState } from "react";

export function KeyboardControlledInput(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <>
      <input
        value={typedMessage}
        onChange={(event) => setTypedMessage(event.target.value)}
      />
      <button
        onClick={() => console.log("keyboard controlled input: ", typedMessage)}
      >
        Log input
      </button>
    </>
  );
}
