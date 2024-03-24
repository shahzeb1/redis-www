import { forwardRef } from "react";
import { Data } from "./types";

type Props = {
  data: Data[];
};

const RedisResponses = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  return (
    <div className="mb-4 max-h-[calc(100vh-100pt)] overflow-y-scroll grow no-scrollbar">
      {data.map((item, i) => (
        <div key={i} className="my-4 first:mt-0">
          <div className="text-slate-400">❯ {item.input}</div>
          <div className="text-slate-100">{item.output}</div>
        </div>
      ))}
      {/* This div is just the point to which we scroll to */}
      <div ref={ref} className="h-14"></div>
    </div>
  );
});

export default RedisResponses;
