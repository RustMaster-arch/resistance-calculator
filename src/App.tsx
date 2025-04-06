import { useEffect, useState } from "react"
import BandComponent from "./components/BandComponent"

export enum Colors {
  Black = 0,
  Brown = 1,
  Red = 2,
  Orange = 3,
  Yellow = 4,
  Green = 5,
  Blue = 6,
  Violet = 7,
  Grey = 8,
  White = 9
}

function multiplierColor(colors: Colors): string {
  if (colors == Colors.Black) {
    return ""
  }
  if (colors == Colors.Brown) {
    return "0"
  }
  if (colors == Colors.Red) {
    return "00"
  }
  if (colors == Colors.Orange) {
    return "K"
  }
  if (colors == Colors.Yellow) {
    return "0K"
  }
  if (colors == Colors.Green) {
    return "00K"
  }
  if (colors == Colors.Blue) {
    return "M"
  }
  if (colors == Colors.Violet) {
    return "0M"
  }
  if (colors == Colors.Grey) {
    return "00M"
  }
  return "G"
}

type ResistanceValues = {
  firstBand: Colors,
  secondBand: Colors,
  multiplierBand: Colors,
}

function App() {
  const [TotalResistance, setTotalResistance] = useState("")
  const [resistanceValues, setResistanceValues] = useState<ResistanceValues>({
    firstBand: Colors.Black,
    secondBand: Colors.Black,
    multiplierBand: Colors.Black,
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
        setcurrentBand(1)
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

    let num = resistanceValues[band].valueOf()

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
    setTotalResistance(`${resistanceValues.firstBand == Colors.Black ? "" : resistanceValues.firstBand}${resistanceValues.secondBand}${multiplierColor(resistanceValues.multiplierBand)}`)
  }, [resistanceValues])

  return (
    <>
      <div className="justify-center h-screen">
        <div className="absolute top-1 w-full">
          <p className="bg-clip-text text-center mt-3 text-5xl bg-gradient-to-tr
            from-cyan-500 to-violet-400 text-transparent animate-pulse font-black">Resistance calculator</p>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 font-bold text-4xl">total resistance: {TotalResistance}Ω ±5%</p>
          <div className="grid grid-cols-4 md:w-1/2 w-full gap-9 p-8 rounded-2xl h-80">

            <BandComponent bandColor={resistanceValues.firstBand} isCurrent={currentBand == 1} />
            <BandComponent bandColor={resistanceValues.secondBand} isCurrent={currentBand == 2} />
            <BandComponent bandColor={resistanceValues.multiplierBand} isCurrent={currentBand == 3} />

            <div className="bg-black p-8 rounded-2xl shadow-yellow-700 shadow-2xl">
              <div className={`aspect-square w-full h-full  rounded-xl transition-all 
duration-300 ease-in-out bg-yellow-600 p-4`}>
                <div className="bg-gray-800 rounded-xl text-white font-bold aspect-square w-full h-10 grid justify-center items-center">
                  <p>5%</p>
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
