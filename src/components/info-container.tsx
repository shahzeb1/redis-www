import { ExternalLink, Github, BookOpenText } from "lucide-react";
import { Button } from "./ui/button";

const InfoContainer = () => {
  const commands = [
    {
      name: "SET",
      url: "https://redis.io/commands/set/",
      desc: "Set key to hold a value.",
    },
    {
      name: "GET",
      url: "https://redis.io/commands/get/",
      desc: "Get the value of key.",
    },
    {
      name: "INCR",
      url: "https://redis.io/commands/incr/",
      desc: "Increments value by one.",
    },
  ];

  const goToUrl = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className="p-4 basis-1/3">
      <div>
        <div>
          <a href="http://redis.com" target="_blank" className="underline">
            Redis
          </a>{" "}
          is an in-memory data structure store. Used as a database, cache, and
          message broker. <br />
          This is a Redis simulator which lets you try several commands. The
          actual core is written in Rust and then compiled for the web using
          web-assembly.
        </div>
      </div>
      <div className="mt-8">Supported Commands:</div>
      <ul className="pt-2">
        {commands.map((command, i) => (
          <li key={i} className="pb-2">
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

      <div className="mt-8">
        <div className="flex flex-col space-y-3 ">
          <Button
            onClick={() => goToUrl("https://github.com/shahzeb1/redis-rs")}
          >
            <Github width={20} className="mr-2" />
            Rust Redis Code
          </Button>
          <Button
            onClick={() => goToUrl("https://github.com/shahzeb1/redis-www")}
          >
            <Github width={20} className="mr-2" />
            Website Code
          </Button>
          <Button onClick={() => goToUrl("https://blog.shahzeb.co")}>
            <BookOpenText width={20} className="mr-2" />
            Blogpost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
