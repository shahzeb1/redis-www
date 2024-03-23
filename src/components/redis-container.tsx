import { KeyboardEventHandler, useState } from "react";
import { Input } from "./ui/input";
import { Data } from "./types";
import RedisResponses from "./redis-responses";

const RedisContainer = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data[]>([]);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      setInput("");
      setData([...data, { input, output: "some wasm response" }]);
    }
  };

  return (
    <div className="bg-slate-800 flex-1 rounded p-4 h-1/4">
      {!!data.length && <RedisResponses data={data} />}
      <div className="flex">
        <Input
          placeholder="Enter in your Redis command here and press ⏎"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};

export default RedisContainer;
