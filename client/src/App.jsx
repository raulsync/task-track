import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  async function getTodos() {
    const res = await fetch("http://localhost:8888/api/todos");
    const todos = await res.json();
    console.log(todos);
    setMessage(todos.mssg);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <main className="container">
      <p className="font-semibold text-2xl">{message}</p>
    </main>
  );
}

export default App;
