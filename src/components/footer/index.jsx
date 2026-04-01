// import { MdHeight } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { FooterDiv, SpanLink, Ul } from "./styles";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export function Footer() {
    const heightFooter = 50;
    const [isOpen, setIsOpen] = useState(false);
    const styles = {
        divMainFooter: {
            width: '100%',
            height: `${heightFooter}px`,
        }
    }
    return(
        <div style={styles.divMainFooter} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <FooterDiv isOpen={isOpen}>
                <Ul>
                    <li className="li1"><a href="https://www.instagram.com/afeventos2/" className="a a-footer">Instagram <SpanLink>AF Eventos</SpanLink></a></li>
                    <li className="li2">Fazer seu agendamento <FaArrowRight /> <a href="https://wa.me/555194077467?text=Olá%20Gostaria%20de%20solicitar%20um%20orçamento%20por%20favor!" target="_blank">WhatsApp</a></li>
                </Ul>
            </FooterDiv>
        </div>
    )
}