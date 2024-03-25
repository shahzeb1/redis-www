import { KeyboardEventHandler, createRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Data } from "./types";
import * as wasmPkg from "../pkg";
import RedisList from "./redis-list";

const RedisContainer = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const ref = createRef<HTMLDivElement>();
  const wasm = useMemo(() => new wasmPkg.WasmRunnerContainer(), []);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      const output = wasm.run(input);
      setData([...data, { input, output }]);
      setInput("");

      // How we scroll to the bottom of the responses:
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-800 basis-2/3 rounded-xl p-4 h-[calc(100vh-100pt)] md:h-[calc(100vh-64pt)]">
      <div className="flex flex-col h-full">
        <RedisList data={data} ref={ref} />
        <div className="flex">
          <Input
            placeholder="Enter in Redis command and press ⏎"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={onKeyDown}
            className="text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RedisContainer;
