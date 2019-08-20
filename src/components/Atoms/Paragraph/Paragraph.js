import styled, {css} from 'styled-components';

const Paragraph = styled.p`
  font-size:${({theme}) => theme.fontSize.xl};
  margin-top:${({theme}) => theme.margin.xs};
  letter-spacing: 2px;
  @media (max-width:1500px) {
    ${({theme}) => theme.margin.s};
    }
    @media  (max-width:1111px) {
        ${({theme}) => theme.margin.xs};
    }
    @media  (max-width:768px) {
        ${({theme}) => theme.margin.xxs};
    }
`;

export default Paragraph;
