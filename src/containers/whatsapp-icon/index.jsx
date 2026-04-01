import { FaWhatsapp } from "react-icons/fa";
import { ALinkWhats, DivLinkWhats } from "./styles";

export function WhatsAppIcon() {
    return (
        <DivLinkWhats>
            <ALinkWhats href="https://wa.me/555194077467?text=Olá%20Gostaria%20de%20solicitar%20um%20orçamento%20por%20favor!" target="_blank">
                <FaWhatsapp size={25} className="fa fa-whatsapp fa-whatsapp-icon whatsapp-icon" />
            </ALinkWhats>
        </DivLinkWhats>
    )
}