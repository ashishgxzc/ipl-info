import React from 'react';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import './index.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
function index() {
    return (
        <div className="loader">
        <BeatLoader
          css={override}
          size={20}
          color={"#123abc"}
          loading={true}
        />
        </div>
    )
}

export default index;
