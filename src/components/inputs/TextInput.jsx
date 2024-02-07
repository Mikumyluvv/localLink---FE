/* eslint-disable react/prop-types */
import React from "react";

export default function TextInput({
  htmlFor,
  labelName,
  typeInput,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <React.Fragment>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{labelName}</span>
        </div>
        <input
          id={htmlFor}
          name={name}
          type={typeInput}
          value={value}
          onChange={onChange}
          required={required}
          className="input input-bordered w-full"
        />
      </label>
    </React.Fragment>
  );
}

// import React from "react";

// const TextInput = ({
//   htmlFor,
//   labelName,
//   typeInput,
//   name,
//   value,
//   onChange,
//   required,
// }) => {
//   return (
//     <div>
//       <label htmlFor={htmlFor} className="form-control w-full">
//         <div className="label">
//           <span className="label-text">{labelName}</span>
//         </div>
//       </label>
//       <input
//         id={htmlFor}
//         name={name}
//         type={typeInput}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="input input-bordered w-full"
//       />
//     </div>
//   );
// };

// export default TextInput;
