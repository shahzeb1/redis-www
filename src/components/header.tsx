/**
 * Header is a component that renders the header of the app.
 */

import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold md:w-12 w-full">
          <a href="/">redis</a>
        </h2>
        <div className="flex flex-row md:items-center justify-between w-full">
          <div className="text-sm text-slate-500 dark:text-slate-300 sm:w-full">
            experiment by{" "}
            <a
              href="https://twitter.com/shahzebdev"
              className="underline underline-offset-4"
              target="_blank"
            >
              @shahzebdev
            </a>
            .{" "}
            <a
              href="https://blog.shahzeb.co/p/building-chatgpt-clone"
              className="underline underline-offset-4"
              target="_blank"
            >
              blog
            </a>{" "}
            &cup;{" "}
            <a
              href="https://github.com/shahzeb1/redis-www"
              className="underline underline-offset-4"
              target="_blank"
            >
              website code
            </a>{" "}
            &cup;{" "}
            <a
              href="https://github.com/shahzeb1/redis-rs"
              className="underline underline-offset-4"
              target="_blank"
            >
              rust code
            </a>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
