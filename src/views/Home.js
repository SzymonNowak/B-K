import React, {Component} from 'react';
import GridTemplate from '../templates/GridTemplate';
import styled from 'styled-components'
import {database} from '../assets/Photos/database';
import Item from '../components/Molecules/Item';
import { NavLink, Link } from 'react-router-dom';
import Header from '../components/Molecules/Header/Header';
import Footer from '../components/Organisms/Footer/Footer';
import Paragraph from '../components/Atoms/Paragraph/Paragraph';
import H from '../components/Atoms/H/H';

const StyledH = styled(H)`
  margin-top:${({theme}) => theme.margin.m};
`;

const Home = () => {
        return(
          <>
            <GridTemplate>
                <Header>
                  <H>
                    Witamy
                  </H>
                  <Paragraph>
                    B&K Product to firma produkujaca torby, saszetki, plecaki, nerki.
                  </Paragraph> 
                  <Paragraph>
                    Prowadzimy również indywidualne projekty !
                  </Paragraph>
                </Header>
                        {database.map(item => 
                            (
                              <Item
                                cardType="articles"
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                url={item.photo}
                              />
                            )
                          )
                        }
                <Footer>
                  <StyledH>
                    Masz pytania?
                  </StyledH>
                  <Paragraph>
                    Napisz do nas email
                  </Paragraph> 
                  <Paragraph>
                    Albo odwiedz nasz <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BK-Product-686263085192347/?epa=SEARCH_BOX">  <i class="fab fa-facebook-f"></i> </a>
                  </Paragraph> 
                </Footer>
            </GridTemplate>
            </>
    )
}

export default Home;