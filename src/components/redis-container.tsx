import { KeyboardEventHandler, useState } from "react";
import { Input } from "./ui/input";

type Data = {
  input: string;
  output: string;
};

const RedisContainer = () => {
  const [input, setInput] = useState("");
  const data: Data[] = [];

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      data.push({ input, output: "some wasm response" });
    }
  };

  return (
    <div className="bg-slate-800 flex-1 rounded p-4 h-1/4">
      <div className="flex">
        <Input
          placeholder="Enter in your Redis command here and press ⏎"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};

export default RedisContainer;
