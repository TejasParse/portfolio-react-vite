import React from "react";

export default function FAB({
    onClick,
    ariaLabel = "Add",
    className,
    children,
    title,
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className={`fixed rounded-full bg-dark-primary-hover text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-dark-primary-bg/40 ${className}`}
    >
      {children}
    </button>
  );
}
