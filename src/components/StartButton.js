import React from "react";

import { StyledStartButon } from "./styles/StyledStartButtom";
const StartButton=({callback})=>(

    <StyledStartButon onClick={callback}>Start Game</StyledStartButon>
)
export default StartButton