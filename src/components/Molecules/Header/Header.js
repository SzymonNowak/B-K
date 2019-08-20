import styled, {css} from 'styled-components';

const Header = styled.div`
  grid-column: 1/6;
  text-align:center;
  margin-bottom: ${({theme}) => theme.margin.m};
  margin-top: ${({theme}) => theme.margin.m};
  letter-spacing: 5px;
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

export default Header;