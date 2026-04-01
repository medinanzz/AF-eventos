import { useState } from "react";
import { WrapperDiv } from "./components/main/styles";
import { StyledGlobalReset } from "./styles/inedx";
import { MainPage } from "./components/main";

export function Layout() {
    // const [openModalFooter, setOpenModalFooter] = useState(false);
    return(
        <>
            <WrapperDiv>
                <MainPage />
            </WrapperDiv>
            <StyledGlobalReset />
        </>
    )
}