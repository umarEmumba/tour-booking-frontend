import Image from 'next/image'
import { BackGroundImageContainer } from './BackGroundImageStyled'
import { BackGroungImageStyled } from './ImageStyled'

const BackGroundImage = () => {
    return (
        <BackGroundImageContainer>
            <BackGroungImageStyled src="/assets/images/big-city.avif" alt="night city" fill/>
        </BackGroundImageContainer>
    )
}
export default BackGroundImage