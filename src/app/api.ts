import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => { // interfaceも忘れずに
  // SSG（cacheを必ず利用する＝最初にすべて読み込んでからcache化する）
  // const res = await fetch(`http://localhost:3001/tasks`, { cache: "force-cache", next: { revalidate: 5 } });
  // const res = await fetch(`http://localhost:3001/tasks`); // 何も書かなければforce-cache

  // SSR（cacheを利用しないならば、必ずfetch＝サーバーにリクエストしなければレンダリングできない）
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store"});
  const todos = res.json();

  return todos;
};