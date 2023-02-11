import styled from 'styled-components'

type ImageProps = {
    src: string;
    alt?: string;
    width?: string;
}

const Img = styled.img<ImageProps>`
    width: ${({width}) => width || "100%"};
`;

export default Img;
