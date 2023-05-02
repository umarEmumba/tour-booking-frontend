import { Children, FC, ReactNode } from "react"
import { ContainerStyled } from "./ContainerStyled"

interface ContainerPropsType {
    children : ReactNode;
    isSubpage ?: boolean;
}
const Container: FC<ContainerPropsType> = ({children, isSubpage}) => {
    return (
        <ContainerStyled subpage={isSubpage}>
            {children}
        </ContainerStyled>
    )
}
export default Container;