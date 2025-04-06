import { useEffect, useState } from "react"

enum Colors {
  Black = 0,
  Brown = 1,
}

function multiplierColor(colors: Colors): string {
  if colors
}

type ResistanceValues = {
  firstBand: Colors,
  secondBand: Colors,
  multiplierBand: Colors,
}

function App() {
  const [TotalResistance, setTotalResistance] = useState(0)
  const [resistanceValues, setResistanceValues] = useState<ResistanceValues>({
    firstBand: Colors.Brown,
    secondBand: Colors.Brown,
    multiplierBand: Colors.Brown,
  })
  const [currentBand, setcurrentBand] = useState(1)

  document.onkeydown = function(e) {
    if (!isNaN(parseInt(e.key))) {
      const number = parseInt(e.key)
      const col = Colors[number]
      const value = Colors[col as keyof typeof Colors]
      if (currentBand == 1) {
        setResistanceValues({
          ...resistanceValues,
          firstBand: value
        })
        return
      }

      if (currentBand == 2) {
        setResistanceValues({
          ...resistanceValues,
          secondBand: value
        })
        return
      }

      if (currentBand == 3) {
        setResistanceValues({
          ...resistanceValues,
          multiplierBand: value
        })
        return
      }
    }

    if (e.key == "ArrowLeft") {
      if (currentBand == 1) {
        setcurrentBand(3)
        return
      }
      setcurrentBand(currentBand - 1)
    }

    else if (e.key == "ArrowRight") {
      if (currentBand == 3) {
        setcurrentBand(3)
        return
      }
      setcurrentBand(currentBand + 1)
    }

    else if (e.key == "ArrowUp") {
      AddToBand("plus", currentBand)
    }

    else if (e.key == "ArrowDown") {
      AddToBand("minus", currentBand)
    }
  }

  function AddToBand(operation: "minus" | "plus", bandNumber: number) {

    let band: keyof ResistanceValues = "firstBand";

    if (bandNumber == 1) {
      band = "firstBand"
    } else if (bandNumber == 2) {
      band = 'secondBand'
    } else if (bandNumber == 3) {
      band = 'multiplierBand'
    }

    let num = resistanceValues.firstBand.valueOf()
    if (operation == 'minus') {
      num -= 1
    } else if (operation == 'plus') {
      num += 1
    }

    if (num > 9) {
      num = 0
    } else if (num < 0) {
      num = 9
    }

    const col = Colors[num]
    const value = Colors[col as keyof typeof Colors]

    let newResistanceValues: ResistanceValues = {
      ...resistanceValues
    }

    newResistanceValues["firstBand"]
    newResistanceValues[band] = value

    setResistanceValues(newResistanceValues)
  }

  useEffect(() => {
    setTotalResistance(`${resistanceValues.firstBand}${resistanceValues.secondBand}`)
  }, [resistanceValues])

  return (
    <>
      <div className="justify-center h-screen">
        <div className="absolute top-1 w-full">
          <p className="bg-clip-text text-center mt-3 text-5xl bg-gradient-to-tr
            from-cyan-500 to-violet-400 text-transparent animate-pulse font-black">Resistance calculator</p>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 font-bold text-4xl">total resistance: Ω</p>
          <div className="grid grid-cols-3 md:w-1/2 w-full gap-9 p-8 rounded-2xl">

            <div className="bg-gray-900 p-8 rounded-2xl shadow-red-800 shadow-2xl">
              <div className="aspect-square w-full h-full  rounded-xl transition-all 
                duration-300 ease-in-out hover:scale-125 bg-red-500 p-4">
                <div className="bg-gray-800 rounded-xl text-white font-bold aspect-square w-full h-10 grid justify-center items-center">
                  <p>2</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-green-800 shadow-2xl">
              <div className="aspect-square w-full h-full  rounded-xl transition-all 
                duration-300 ease-in-out hover:scale-125 bg-green-500 p-4">
                <div className="bg-gray-800 rounded-xl text-white font-bold aspect-square w-full h-10 grid justify-center items-center">
                  <p>2</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-blue-800 shadow-2xl">
              <div className="aspect-square w-full h-full  rounded-xl transition-all
                duration-300 ease-in-out hover:scale-125 bg-blue-500 p-4">
                <div className="bg-gray-800 rounded-xl text-white font-bold aspect-square w-full h-10 grid justify-center items-center">
                  <p>2</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
