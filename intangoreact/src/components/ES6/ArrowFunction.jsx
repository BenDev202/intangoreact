import React from 'react'
import ArrowFunction from './ArrowFunction';

function ArrowFunctionComponent() {
  function NormaFunction(x){
    return (
        <h1>Hello {x}</h1>
    );
  }

//   const arrowFunction = () => {
//     return (
//     <>
//     <h1>Iam in arrow function</h1>
//     </>
//     );
//   }

  return (
    NormaFunction('Armand')
    // {/* {arrowFunction()} */}
  )

}

export default ArrowFunctionComponent