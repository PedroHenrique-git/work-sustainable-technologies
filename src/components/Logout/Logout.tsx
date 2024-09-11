"use client";

import { logout } from "./actions/logout";

export const Logout = () => {
  return (
    <button
      className="bg-slate-400 text-gray-950 rounded-md w-full"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
};
