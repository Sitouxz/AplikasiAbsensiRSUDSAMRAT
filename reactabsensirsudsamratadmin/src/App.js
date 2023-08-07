import "./App.css";
import Logo from "../src/img/LOGORS2.png";

import BackgroundImage from "../src/img/abstract_wavy_line_geometric1.png";
import { useReducer, useState } from "react";
import LeftSide from "./component/LeftSide";
import Dashboard from "./component/MainBody";
import { reducer, initialState } from "./component/reducer";

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [activeButtonId, setActiveButtonId] = useState(2);

  // const handleClick = (id) => {
  //   dispatch({ type: "CLICK_BUTTON", payload: id });
  //   setActiveButtonId(id);
  // };

  return (
    <div className="flex bg-white">
      <div className="flex justify-center items-center w-4/6 h-screen ">
        <figure className="max-w-lg">
          <img className="h-auto max-w-sm rounded-lg" src={Logo} alt="Logo" />
          <p className="text text-black text-center font-bold">
            ABSENSI TENAGA HARIAN LEPAS
          </p>
          <p className="text text-black  text-center font-bold">
            RSUD SAMRATULANGI TONDANO
          </p>
        </figure>
      </div>
      <div className="flex justify-center items-center w-full h-screen bg-[url('../src/img/abstract_wavy_line_geometric1.png')]">
        <div className="hero min-h-screen">
          <div className="hero-overlay"></div>
          <div className="hero-content min-w-full text-center text-neutral-content ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="text"
                    className="input bg-transparent rounded-none focus:outline-none input-ghost border-b-black border-l-white border-r-white border-t-white"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input focus:outline-none rounded-none border-b-black border-l-white border-r-white border-t-white  bg-transparent"
                  />
                  <button
                    type="button"
                    class="absolute top-1/2 transform -translate-y-1/2 right-2"
                    onclick="togglePasswordVisibility()"
                  >
                    <i class="fas fa-eye" id="togglePasswordIcon"></i>
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#01A7A3] border-none text-white">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <LeftSide
    //     state={state}
    //     dispatch={dispatch}
    //     activeButtonId={activeButtonId}
    //     handleClick={handleClick}
    //   />
    //   <Dashboard activeButtonId={activeButtonId} />
    // </div>
  );
}

export default App;
