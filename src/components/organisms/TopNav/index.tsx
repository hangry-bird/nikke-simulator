import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'

// image
import ShiftyLogo from '@images/logo/shifty.png'
// atoms
import Img from '@components/atoms/Image/index'
import Label from '@components/atoms/Label/index'


const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const movePage = (path: string) => {
        navigate(path)
    }

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return(
        <TopNavContainer>
            <LogoWrap>
                <Img src={ShiftyLogo} width={"20px"} alt="shifty logo" />
                <Label color={"#fff"}>Nikke Simulator</Label>
            </LogoWrap>

            <PageRouteContainer>
                <PageName 
                    active={isActive('/')}
                    onClick={() => movePage('/')}
                >조합 시뮬레이터
                </PageName>
                <PageName 
                    active={isActive('/draw')}
                    onClick={() => movePage('/draw')}
                >모집 시뮬레이터
                </PageName>
            </PageRouteContainer>
        </TopNavContainer>
    )
}
export default TopNav;


const TopNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    padding: 14px;

    border-bottom: 1px solid #d8d8d8;
    background-color: #000;

    ${Img}{
        margin-right: 8px;
    }
`
const LogoWrap = styled.div`
    display: flex;
    align-items: center;
`
const PageRouteContainer = styled.ol`
    display: flex;

    & > ul:not(:first-of-type){
        margin-left: 30px;
    }
`
type PageNameProps = {
    active?: boolean;
}
const PageName = styled.ul<PageNameProps>`
    display: flex;
    color: ${({active}) => active ? "#fff" : "#d8d8d8"};
    font-weight: ${({active}) => active && "700"};
    cursor: pointer;
`
