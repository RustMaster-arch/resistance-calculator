
import { Colors } from '../App'

type Props = {
  isCurrent: boolean,
  bandColor: Colors
}

const BandComponent = (props: Props) => {

  return (
    <div className={`p-8 rounded-2xl shadow-2xl transition-all duration-300 ${props.isCurrent ? "rotate-x-12 rotate-y-12 rotate-z-6 scale-125" : ""} ${props.bandColor === Colors.Black ? "shadow-white" :
      props.bandColor === Colors.Brown ? "shadow-amber-800" :
        props.bandColor === Colors.Red ? "shadow-red-800" :
          props.bandColor === Colors.Orange ? "shadow-orange-800" :
            props.bandColor === Colors.Yellow ? "shadow-yellow-800" :
              props.bandColor === Colors.Green ? "shadow-green-800" :
                props.bandColor === Colors.Blue ? "shadow-blue-800" :
                  props.bandColor === Colors.Violet ? "shadow-violet-800" :
                    props.bandColor === Colors.Grey ? "shadow-gray-800" :
                      props.bandColor === Colors.White ? "shadow-white" :
                        "shadow-gray-900"
      }`}>
      <div className={`aspect-square w-full h-full rounded-xl transition-all 
      duration-300 ease-in-out p-4 ${props.isCurrent ? "scale-125" : ""} ${props.bandColor === Colors.Black ? "bg-black" :
          props.bandColor === Colors.Brown ? "bg-amber-700" :
            props.bandColor === Colors.Red ? "bg-red-500" :
              props.bandColor === Colors.Orange ? "bg-orange-500" :
                props.bandColor === Colors.Yellow ? "bg-yellow-500" :
                  props.bandColor === Colors.Green ? "bg-green-500" :
                    props.bandColor === Colors.Blue ? "bg-blue-500" :
                      props.bandColor === Colors.Violet ? "bg-violet-500" :
                        props.bandColor === Colors.Grey ? "bg-gray-500" :
                          props.bandColor === Colors.White ? "bg-white" :
                            "bg-gray-900"
        }`}>
        <div className="bg-gray-800/70 rounded-xl text-white font-bold aspect-square w-full h-10 grid justify-center items-center">
          <p>{props.bandColor.valueOf()}</p>
        </div>
      </div>
    </div>
  )
}

export default BandComponent
