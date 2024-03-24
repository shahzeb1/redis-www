import { ExternalLink } from "lucide-react";

const InfoContainer = () => {
  const commands = [
    {
      name: "SET",
      url: "https://redis.io/commands/set/",
      desc: "Set key to hold the string value.",
    },
    {
      name: "GET",
      url: "https://redis.io/commands/get/",
      desc: "Get the value of key.",
    },
    {
      name: "INCR",
      url: "https://redis.io/commands/incr/",
      desc: "Increments the number stored at key by one.",
    },
  ];

  return (
    <div className="p-4 shrink">
      <ul className="p-4">
        {commands.map((command, i) => (
          <li key={i}>
            <div className="flex">
              <div className="font-mono pr-1">
                <a href={command.url} target="_blank">
                  {command.name}
                </a>
              </div>
              <ExternalLink className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100 pr-1" />
              <div className="grow">{command.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoContainer;
