import { useState } from "react"


function App() {
  const [color, setColor] = useState("#3DFAFF")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center top-52 px-2 py-10 inset-x-72 text-4xl rounded-3xl" style={{
          background: "hsla(64, 41%, 92%, 1)",

          background: "linear-gradient(180deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%)",

          background: "-moz-linear-gradient(180deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%)",

          background: "-webkit-linear-gradient(190deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%)",

          filter: "progid: DXImageTransform.Microsoft.gradient( startColorstr='#F2F3E2', endColorstr='#B2E5F8', GradientType=1 ),"
        }}>
          <div className="flex-wrap">
            <h1 className="flex justify-center text-slate-800 font-bold">REACT PROJECT - DISPLAY COLOR CHANGER</h1>
          </div>
        </div>


        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#3d348b" }} onClick={() => setColor("#3d348b")}>Dark blue</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#7678ed" }} onClick={() => setColor("#7678ed")}>Violet</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#ffb703" }} onClick={() => setColor("#ffb703")}>Yellow</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#f35b04" }} onClick={() => setColor("#f35b04")}>Orange</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#d81159" }} onClick={() => setColor("#d81159")}>Pink</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#8f2d56" }} onClick={() => setColor("#8f2d56")}>Brown</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#00a6fb" }} onClick={() => setColor("#00a6fb")}>Light blue</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#affc41" }} onClick={() => setColor("#affc41")}>Green</button>
            <button className="outline-none px-6 py-2 rounded-3xl text-white" style={{ backgroundColor: "#023047" }} onClick={() => setColor("#023047")}>Black</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
