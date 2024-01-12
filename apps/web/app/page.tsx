import { trpc } from "@web/app/trpc";
import ClientSide from "./clientside";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <div>
      {greeting}
      <ClientSide />
    </div>
  );
}
