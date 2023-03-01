import { useEffect } from "react";
import { Vote } from "./Views/Views";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-4xl">Hello World</h1>
      <Vote />
    </div>
  );
}
