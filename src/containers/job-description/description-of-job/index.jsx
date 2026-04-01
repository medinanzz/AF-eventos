// import { FaCheck } from "react-icons/fa";
import { DivDescriptoin, DivTexts, Title } from "./styles";

export function  DescriptionOfJob() {
    const text1 = 'Empresa especializada em serviços operacionais para eventos, com uma equipe treinada, responsável e alinhada com o padrão que o seu evento merece.';

    // const text2 = 'Mais de 15 anos de experiência.';
    // const text3 = '';
    const styles = {
        spanWrap: {
            padding: '.5em',
            userSelect: 'none',
        }
    }
    
    return (
        <DivDescriptoin>
            <DivTexts>
                <p>
                    {text1}
                </p>
                <span style={styles.spanWrap}></span>
                {/* <p>
                    {text2}
                </p> */}
            </DivTexts>
        </DivDescriptoin>
    )
}