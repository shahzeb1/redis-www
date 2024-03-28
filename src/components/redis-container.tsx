import {
  KeyboardEventHandler,
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Input } from "./ui/input";
import { Data } from "./types";
import * as wasmPkg from "../pkg";
import RedisList from "./redis-list";

const RedisContainer = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const initialized = useRef(false);
  const ref = createRef<HTMLDivElement>();
  const wasm = useMemo(() => new wasmPkg.WasmRunnerContainer(), []);

  // Seed things with a few sample commands
  useEffect(() => {
    // This is preventing React strict mode from running
    // this useEffect twice during development.
    // I love frontend development and React.
    if (!initialized.current) {
      initialized.current = true;
      saveAndRunCommand("SET coffee_shop_name Sunrise Coffee");
      saveAndRunCommand("SET employee_count 10");
      saveAndRunCommand("GET coffee_shop_name");
      saveAndRunCommand("INCR employee_count");
    }
  }, []);

  const saveAndRunCommand = (input: string) => {
    const output = wasm.run(input);
    setData((data) => [...data, { input, output }]);
    setInput("");
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      saveAndRunCommand(input);

      // How we scroll to the bottom of the responses:
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-800 basis-2/3 rounded-xl p-4 h-[calc(100vh-80pt)]">
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
