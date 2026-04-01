// import { useState } from "react";
import { JobDescriptionDiv, Li, Title, Ul } from "./styles";
import { DescriptionOfJob } from "./description-of-job";
import { ModalContent } from "./styles";
import { FaCheck } from "react-icons/fa6";
import { FooterModalVisited } from "../modal-visited/footer";

export function JobDescription() {
  const cargos = [
    "Bartenders",
    "Assador",
    "Copeira(o)",
    "Garçom",
    "Manobrista",
    "Recepcionista",
    "Segurança",
  ].sort(); // O .sort() garante a ordem A-Z
  const styles = {
    ul1: {
      width: "300px",
      justifyContent: "space-between",
    },
  };
  const cargos2 = [
    'Atendimento personalizado;',
    'Agilidade e comprometimento;',
    'Equipe uniformizada e pontual;',
    'Experiência em eventos sociais e corporativos;',
    'Mais de 15 anos de experiência.',
  ];

  return (
    <JobDescriptionDiv>
      <Title>Bem-vindo(a) à AF eventos</Title>
      <DescriptionOfJob />
      <ModalContent>
        <Ul className="ul1" style={styles.ul1}>
          {cargos.map((cargo) => (
            <Li key={cargo} style={styles.li1}>
              <FaCheck size={20} />
              <p>{cargo}</p>
            </Li>
          ))}
        </Ul>
        <hr />
        <Ul className="ul2" style={styles.ul2}>
          {cargos2.map((cargo)  => (
            <Li key={cargo}>
              <FaCheck size={22} />
              <p>{cargo}</p>
            </Li>
          ))}
        </Ul>
      </ModalContent>
      <FooterModalVisited />

    </JobDescriptionDiv>
  );
}
