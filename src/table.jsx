import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const data = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "London",
  },
  {
    name: "Bob",
    age: 40,
    city: "Paris",
  },
];

/**
 * create a table using a defined data
 * @param {Array} data is an array
 * @returns {JSX.Element} returns a table with data in it
 */
class Table extends React.Component {
  /**
   * @returns {JSX.Element} returns a table with data in it
   */
  render() {
    const { data } = this.props;
    const header = Object.keys(data[0]);
    return (
      <table className="divide-y  divide-gray-200 min-w-full mt-5 text-center border-solid border-2">
        <thead className="bg-gray-50">
          <tr>
            {header.map((title) => (
              <th 
              key={title} 
              className="px-6 py-3text-xs font-medium text-gray-500 uppercase tracking-wider"
              >{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
              <tr 
              key={index}
              className=" transition-all duration-500 ease-in-out hover:bg-zinc-300 hover:scale-105"
              >
              {header.map((idx) => (

                // automatically add the right value for each key (render the right td for each th without define it manually like: <td>{item.name}</td>)
                <td 
                key={idx}
                className="px-6 py-4 whitespace-nowrap "
                >{item[idx]}</td> 
                
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const container = document.getElementById("root");
const table = createRoot(container);
table.render(<Table data={data} />);
