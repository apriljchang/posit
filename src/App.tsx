function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-accent">posit</h1>

      <div className = "w-96 flex justify-between items-center bg-neutral-900 rounded-xl px-4 py-3">
        <div className = "flex gap-2">
          <button className = "px-3 py-1 rounded-lg bg-neutral-800 
          hover:bg-neutral-700">⏮</button>
          <button className="px-3 py-1 rounded-lg bg-accent text-
          black">▶</button>
          <button className="px-3 py-1 rounded-lg bg-neutral-800
          hover:bg-neutral-700">⏭</button>
        </div>
        <span className="text-sm test-neutral-400">1.0x</span>
      </div>
      </div>
  )
}

export default App