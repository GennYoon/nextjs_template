import { fetchTodos } from "@/lib/mocks/apis/todo.api";

export default async function Home() {
  const data = await fetchTodos();

  return (
    <main>
      <h1 className="text-xl font-bold">
        NextJS 14 + App routes + MSW Exmaple
      </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mt-1">
            {item.title}
          </li>
        ))}
      </ul>

      <form>
        <input />
      </form>
    </main>
  );
}
