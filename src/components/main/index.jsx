import { useState } from "react";
import { ClickHereText } from "../../containers/clickHere";
import { ModalVisited } from "../../containers/modal-visited";
import { ButtonH1, MainContent } from "./styles";
import { TextInfoJob } from "../../containers/textInfojob";
import { HoverHere } from "../../containers/hoverHere";
import { Footer } from "../footer";

export function MainPage({ setOpenModalFooter }) {
    const [openModal, setOpenModal] = useState(false); 
    return (
        <>
            <MainContent style={{ flex: '1', }}>
                <div style={{ position: 'relative', }}>
                    <ClickHereText />
                    <ButtonH1 onClick={() => {setOpenModal(true); setOpenModalFooter(true)}}>
                        AF <span className="line"></span> eventos
                    </ButtonH1>
                    <TextInfoJob />
                </div>
                <ModalVisited openModal={openModal} setOpenModal={setOpenModal} setOpenModalFooter={setOpenModalFooter} />
                <HoverHere />
                <Footer />
            </MainContent>
        </>
    )
}