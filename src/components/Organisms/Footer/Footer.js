import styled, {css} from 'styled-components';
const Footer = styled.div`
  border-top:1px solid white;
  grid-column: 1/6;
  text-align:center;
  margin-bottom:${({theme}) => theme.margin.l};
  letter-spacing: 5px;
  margin-top: 150px;
  @media (max-width:1500px) {
    grid-column: 1/5;
    }
    @media  (max-width:1111px) {
    grid-column: 1/4;

    }
    @media  (max-width:768px) {
    grid-column: 1/3;

    }
`;

export default Footer;