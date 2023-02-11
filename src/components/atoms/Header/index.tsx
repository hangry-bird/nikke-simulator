import styled from 'styled-components'
import { TextTag } from '@src/types';

interface HeaderProps extends TextTag {
    
}

export const H1 = styled.h1<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};

    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
export const H2 = styled.h2<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};

    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
export const H3 = styled.h3<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};
    
    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
export const H4 = styled.h4<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};
    
    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
export const H5 = styled.h5<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};
    
    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
export const H6 = styled.h6<HeaderProps>`
    font-size: ${({fs12}) => fs12 && "12px"};
    font-size: ${({fs14}) => fs14 && "14px"};
    font-size: ${({fs16}) => fs16 && "16px"};
    font-size: ${({fs18}) => fs18 && "18px"};
    font-size: ${({fs20}) => fs20 && "20px"};
    font-size: ${({fs22}) => fs22 && "22px"};
    font-size: ${({fs24}) => fs24 && "24px"};
    
    font-weight: ${({bold}) => bold && "700"};
    color: ${({color}) => color || "#000"};
`;
