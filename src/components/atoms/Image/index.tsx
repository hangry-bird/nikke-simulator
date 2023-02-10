import styled from 'styled-components'

type ImageProps = {
    src: string;
    alt?: string;
}

// const PortraitLayout = ({ 
//     ...rest
//  }: ImageProps) => {
//     return(
//         <ImageStyled {...rest} />
//     )
// }

// export default PortraitLayout;


// const ImageStyled = styled.image`
//     width: 100px;
//     height: 300px;
// `

const Img = styled.img<ImageProps>`
    width: 100%;
`;

export default Img;
