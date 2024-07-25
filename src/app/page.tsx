import FrameGroup from "@/components/FrameGroup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl flex justify-around border-2 border-white">
        <FrameGroup/>
        <div className="p-4">
          <h2 className="text-3xl">Total Boost</h2>
          <div className="border border-white p-4"></div>
        </div>
      </div>
    </main>
  );
}
