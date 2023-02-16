import styled from 'styled-components'

interface ButtonProps{
    
}

const Button = styled.button<ButtonProps>`
    width: 60px;
    height: 30px;

    border: 1px solid red;
`;

export default Button;
