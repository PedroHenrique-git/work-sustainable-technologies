import { createUser } from "./actions/create-user";

export const Register = () => {
  return (
    <div className="max-w-lg w-full mx-auto my-8 p-3">
      <h1 className="text-base text-gray-700 mb-6 text-center">New account</h1>

      <form className="flex flex-col gap-3" action={createUser}>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-b-gray-300 rounded-md box-border w-full px-2 py-1"
          />
        </div>

        <div className="flex flex-col items-start gap-2  w-full">
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-b-gray-300 rounded-md box-border w-full px-2 py-1"
          />
        </div>

        <button className="bg-slate-400 text-gray-950 rounded-md">
          Create account
        </button>
      </form>
    </div>
  );
};
