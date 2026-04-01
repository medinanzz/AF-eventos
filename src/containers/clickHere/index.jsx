import { FiArrowDown } from "react-icons/fi";
import { ClickHereDiv } from "./styles";

export function ClickHereText() {
    return (
        <>
            <ClickHereDiv>
                <p>Clique aqui</p>
                <div>
                    <span>
                        <FiArrowDown size={22} className="arrowDown"/>
                    </span>
                </div>
            </ClickHereDiv>
        </>
    )
}