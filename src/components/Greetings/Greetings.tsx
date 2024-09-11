import * as cowsay from "cowsay";
import { Logout } from "../Logout";

export const Greetings = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto my-8 p-3">
      <Logout />

      <pre>{cowsay.say({ text: "HI", f: "dragon" })}</pre>
    </div>
  );
};
