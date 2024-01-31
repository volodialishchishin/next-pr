import { Counter } from "@/components/counter/Counter";
export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Counter />
      </div>
    </div>
  );
}
