import styled from "@emotion/styled";

interface ILimitTextProps {
    valueLength: number;
    maxLength: number;
}

const LimitText = ({ valueLength, maxLength }: ILimitTextProps) => {
    return (
        <Contianer>
            <span>{valueLength}</span> / <span>{maxLength}</span>
        </Contianer>
    );
};

const Contianer = styled.p`
    margin-top: 4px;
    margin-left: auto;
    color: #e4e4e4;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;

export default LimitText;
