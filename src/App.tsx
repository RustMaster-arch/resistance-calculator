function App() {
  return (
    <>
      <div className="justify-center h-screen">
        <div className="absolute top-1 w-full">
          <p className="bg-clip-text text-center mt-3 text-5xl bg-gradient-to-tr
            from-cyan-500 to-violet-400 text-transparent animate-pulse font-black">Resistance calculator</p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="grid grid-cols-3 grid-rows-2 w-1/2 gap-2">
            <div style={{
              backgroundColor: 'red'
            }} className="aspect-square w-full h-full  rounded-xl" />
            <div style={{
              backgroundColor: 'green'
            }} className="aspect-square w-full h-full  rounded-xl" />
            <div style={{
              backgroundColor: 'blue'
            }} className="aspect-square w-full h-full  rounded-xl" />
            <div style={{
              backgroundColor: 'red'
            }} className="aspect-square w-full h-full  rounded-xl" />
            <div style={{
              backgroundColor: 'green'
            }} className="aspect-square w-full h-full  rounded-xl" />
            <div style={{
              backgroundColor: 'blue'
            }} className="aspect-square w-full h-full  rounded-xl" />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
