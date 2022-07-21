import React, { useState } from "react";
import "./App.css";
import ListInput from "./component/List-input";

function App() {
  const [list, setlist] = useState([]);
  const [filter, setfilter] = useState([]);
  function inputA(val) {
    console.log(val);
    setlist([
      ...list,
      {
        data: val,
        type: "A",
      },
    ]);
    setfilter([
      ...list,
      {
        data: val,
        type: "A",
      },
    ]);
  }
  function inputB(val) {
    console.log(val);
    setlist([
      ...list,
      {
        data: val,
        type: "B",
      },
    ]);
    setfilter([
      ...list,
      {
        data: val,
        type: "B",
      },
    ]);
  }

  return (
    <div className="all">
      <div className="all-input">
        <ListInput inputHandle={{ inputA, inputB }} />

        <div className="button">
          <span
            style={{
              fontWeight: "bold",
              background: "#F6E3C5",
              padding: "5px 15px",
              boxShadow: "0px 0px 10px #F6E3C5",
              borderRadius:"8px"
            }}
          >
            Filters
          </span>
          <button
            onClick={() => {
              setfilter(
                list.filter((el) => {
                  return el.type === "A";
                })
              );
            }}
          >
            A
          </button>
          <button
            onClick={() => {
              setfilter(
                list.filter((el) => {
                  return el.type === "B";
                })
              );
            }}
          >
            B
          </button>
          <button
            onClick={() => {
              setfilter(
                list.filter((el) => {
                  return true;
                })
              );
            }}
          >
            Both
          </button>
          <button
            onClick={() => {
              let newData = list.reduce((ans, ele) => {
                return ans.includes(ele.data) ? ans : [...ans, ele.data];
              }, []);
              setfilter(
                newData.map((ele) => {
                  return { data: ele };
                })
              );
            }}
          >
            Unique
          </button>
        </div>
      </div>
      <div className="list">
        <ul>
          {filter.map((el) => {
            return (
              <li>
                {el.data}
                {console.log(el)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
