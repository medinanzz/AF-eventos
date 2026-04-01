import { FaArrowRight } from "react-icons/fa";
import { FooterDiv, Ul } from "./styles";

export function FooterModalVisited() {
    return (
        <FooterDiv>
            <Ul>
                <li>Fazer seu agendamento <FaArrowRight /> <a href="https://wa.me/555194077467?text=Olá%20Gostaria%20de%20solicitar%20um%20orçamento%20por%20favor!" target="_blank">WhatsApp</a></li>
            </Ul>
        </FooterDiv>
    )
}