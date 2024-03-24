import { Data } from "./types";

type Props = {
  data: Data[];
};

const RedisResponses = ({ data }: Props) => {
  return (
    <div className="mb-4 max-h-[calc(100vh-100pt)] overflow-y-scroll grow">
      {data.map((item, i) => (
        <div key={i} className="my-4 first:mt-0">
          <div className="text-slate-400">❯ {item.input}</div>
          <div className="text-slate-100">{item.output}</div>
        </div>
      ))}
    </div>
  );
};

export default RedisResponses;
