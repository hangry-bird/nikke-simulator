import { ReactNode } from 'react'
import styled from 'styled-components'

type PortraitLayoutProps = {
    children: ReactNode;
    onClick?: () => void;
}

const PortraitLayout = ({ children, ...rest }: PortraitLayoutProps) => {
    return(
        <PortraitContainer
            {...rest}
        >
            {children}
        </PortraitContainer>
    )
}

export default PortraitLayout;


const PortraitContainer = styled.div`
    position: relative;

    width: 160px;
    height: 200px;
    
    border: 1px solid red;

    overflow: hidden;
    cursor: pointer;
`