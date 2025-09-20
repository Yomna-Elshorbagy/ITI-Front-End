import React from "react";
import clsx from "clsx";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-xl font-medium bg-purple-600 text-white hover:bg-purple-700 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
