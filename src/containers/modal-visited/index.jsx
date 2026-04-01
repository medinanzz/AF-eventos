import { FiX } from "react-icons/fi";
import { ButtonCloseModal, DivModal } from "./styles";
import { JobDescription } from "../job-description";
// import { useState } from "react";
// // import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppIcon } from "../whatsapp-icon";
// import { Footer } from "../../components/footer";
import { FooterModalVisited } from "./footer";

export function ModalVisited({ setOpenModal, openModal }) {
  return (
    <DivModal openModal={openModal}>
      <ButtonCloseModal
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <FiX size={23} color="white" />
      </ButtonCloseModal>
      <JobDescription />
      <WhatsAppIcon />
    </DivModal>
  );
}
