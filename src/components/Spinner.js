import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <StyledSpinner className="Spinner">
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={0} //3 secs
      />
    </StyledSpinner>
  );
};

export default Spinner;
