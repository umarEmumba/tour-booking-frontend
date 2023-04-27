import styled from "styled-components";

export const FilterContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -50px;
    position: relative;
    padding: 10px;
`;

export const FilterWraper = styled.div`
    display: flex;
    column-gap: 5px;
    background-color : #FFFFFF;
    border-radius: 9px;
    box-shadow: 1px -3px 11px 0px #888888;
`;

interface FilterItemStyledProps {
    noBorder ?: boolean
}
export const FilterItemStyled = styled.div<FilterItemStyledProps>`
    margin: 10px 0;
    padding: 0 20px;
    border-right:${props=> props.noBorder ? "0px" : "1px" } solid #dcd0d0;
`;

export const IconContainerStyled = styled.div`
    display: inline-block;
    position: relative;
    width: 15px;
    height: 16px;  
    background: #e5e1e1;
    padding-top: 2px;
    padding: 3px 2px 0px 2px;
    border-radius: 10px;
    vertical-align: top;
    margin: 20px 10px;
`;
export const InputStyled = styled.input`
    border: none;
    &:focus-visible {
        outline : none;
    }
`;