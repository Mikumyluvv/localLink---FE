// /* eslint-disable react/prop-types */
// import React from "react";

// export default function SelectInput({ labelName, selectOptions = []  }) {

//   return (
//     <React.Fragment>
//       <label className="form-control w-full ">
//         <div className="label">
//           <span className="label-text">{labelName}</span>
//         </div>
//         <select className="select select-bordered">
//         <option disabled selected>Pick one</option>
//           {selectOptions .map((option, index) => (
//             <option key={index}>{option}</option>
//           ))}
//         </select>
//       </label>
//     </React.Fragment>
//   );
// }


/* eslint-disable react/prop-types */
import React from "react";

export default function SelectInput({ labelName, selectOptions = [], value, onChange }) {
  return (
    <React.Fragment>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{labelName}</span>
        </div>
        <select
          className="select select-bordered"
          value={value}  
          onChange={(e) => onChange(e.target.value)}  
        >
          <option disabled value="" selected>
            Pick one
          </option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </React.Fragment>
  );
}
