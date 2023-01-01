import React from "react";
import Ticker from "react-ticker";
// import "./styles.css";

export default function NewsTicker() {
  return (
    <Ticker offset="run-in" speed={10} move={true}>
      {({ index }) => (
        <>
          <h1 style={{ paddingRight: "0.5em", background: "red" }}>
            This is the Headline of element #{index}!
          </h1>
        </>
      )}
    </Ticker>
  );
}

// import React from "react";
// // import Ticker from "react-ticker";
// import NewsTicker, { Directions } from "react-advanced-news-ticker";
// import Ticker from "react-ticker";
// function NewsTicker_() {
//   return (
//     <Ticker>
//       {({ index }) => (
//         <>
//           <h1 style={{ paddingRight: "0.5em" }}>
//             This is the Headline of element #{index}!
//           </h1>
//         </>
//       )}
//     </Ticker>
//   );
//   //     <NewsTicker
//   //       rowHeight={48}
//   //       maxRows={2}
//   //       speed={600}
//   //       direction={Directions.DOWN}
//   //       duration={1000}
//   //       autoStart={true}
//   //       pauseOnHover={false}
//   //       id="myId"
//   //       // className = "myClassName1 myClassName2"
//   //       //   style={{ marginTop: 34 }}
//   //     >
//   //       <div>Etiam imperdiet volutpat libero eu tristique.</div>
//   //     </NewsTicker>
//   //   );
// }

// export default NewsTicker_;
