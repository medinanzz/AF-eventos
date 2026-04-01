import { TextInfoJobDiv } from "./styles";
export function TextInfoJob() {
    const content = {
        // title: "Excelência em cada detalhe", // Opcional: adicionar um título
        desc1: "Equipe especializada em eventos que demandam alto padrão de organização e excelência.",
        desc2: "Entregamos um atendimento impecável, unindo postura, compromisso, agilidade e atenção aos mínimos detalhes."
    };

    return (
        <TextInfoJobDiv>
            <p>{content.desc1}</p>
            <p>{content.desc2}</p>
        </TextInfoJobDiv>
    );
}