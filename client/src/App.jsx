import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl">Hello World</h1>
    </div>
  );
}
