import styled from 'styled-components'
import { TextTag } from '@src/types';

interface SpanProps extends TextTag {
    
}

const Span = styled.span<SpanProps>`
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

export default Span;
