// const sample = (
//   <div>
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//       width="40px"
//       height="40px"
//     ></img>
//     <h1>Fun Facts About React</h1>
//     <ul>
//       <li>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui fuga
//         totam quam laborum ipsa perspiciatis et iusto quibusdam! Sapiente minima
//         totam corrupti blanditiis debitis illum fuga rem cum molestiae.
//       </li>
//       <li>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
//         labore minima numquam commodi illum mollitia consectetur. Rem asperiores
//         quidem modi nulla, id animi quas expedita eos veritatis dolore harum
//         numquam.
//       </li>
//       <li>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
//         facere dolorem excepturi cumque ex! Perspiciatis ad aut voluptatibus
//         temporibus, nulla aspernatur deserunt veritatis a suscipit quisquam!
//         Maiores officiis placeat dolorum.
//       </li>
//       <li>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, sit
//         odit labore asperiores perspiciatis cum earum voluptatibus ipsa nam
//         expedita! Ipsa, labore asperiores saepe vel facilis praesentium animi
//         ipsam!
//       </li>
//       <li>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
//         dolorum quaerat et cupiditate quia aliquam repellat similique officia
//         fugit vel aspernatur at, illum suscipit voluptas sint quam ipsa harum
//         porro.
//       </li>
//     </ul>
//   </div>
// );
import React from "react";
import ReactDOM from "react-dom";
function TemporaryPage() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Reasons why I'm Exited learning React</h1>
      <ul>
        <li>React it's cool and I wanna be cool</li>
        <li>React it's for gigachads, And I wanna be a Gigachad</li>
        <li>React can work with compouse and I wanna work with compouse</li>
        <li>I'm wanna be a Software Developer</li>
        <li>React it's better thant play league of legends</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TemporaryPage />, document.getElementById("root"));
// ReactDOM.render(sample, document.getElementById("root"));
