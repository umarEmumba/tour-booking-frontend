import { Children, FC, ReactNode } from "react"
import { ContainerStyled } from "./ContainerStyled"

interface ContainerPropsType {
    children : ReactNode
}
const Container: FC<ContainerPropsType> = ({children}) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}
export default Container;