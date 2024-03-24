import { KeyboardEventHandler, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Data } from "./types";
import * as wasmPkg from "../pkg";
import RedisResponses from "./redis-responses";

const RedisContainer = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const wasm = useMemo(() => new wasmPkg.WasmRunnerContainer(), []);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      const output = wasm.run(input);
      setData([...data, { input, output }]);
      setInput("");
    }
  };

  return (
    <div className="bg-slate-800 flex-1 rounded p-4 h-[calc(100vh-100pt)]">
      <div className="flex flex-col h-full">
        <RedisResponses data={data} />
        <div className="flex">
          <Input
            placeholder="Enter in your Redis command here and press ⏎"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default RedisContainer;
