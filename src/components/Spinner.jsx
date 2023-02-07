import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  
    return (
      <div style={{height: '95vh',width: '100%', backgroundColor: 'transparent', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ScaleLoader
              color='red'
              cssOverride={override}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
      </div>
  )
}

export default Spinner