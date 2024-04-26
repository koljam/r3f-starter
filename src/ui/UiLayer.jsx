import React from "react";
import Header from "./sections/Header";

export default function UiLayer() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <Header />
      </div>
    </div>
  );
}
