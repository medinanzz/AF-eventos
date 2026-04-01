// import { ClickHereText } from "../clickHere";
import { ClickHereDiv } from "../clickHere/styles";

export function HoverHere() {
    return (
        <>
            <ClickHereDiv>
                <p className="p-dk"></p> {/* desktop*/}
                <p className="p-mb"></p> {/* mobile */}
            </ClickHereDiv>
        </>
    )
}