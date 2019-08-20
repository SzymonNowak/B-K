import React, {Component} from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import NavBar from '../components/Organisms/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';


class MainTemplate extends Component {
    state = {

    }
    render() {
        const { children } = this.props;
        return(
            <div>
                <GlobalStyle/>
                <NavBar></NavBar>
                <ThemeProvider theme={theme}> 
                {children} 
                </ThemeProvider>
            </div>
        )
    }

}

export default MainTemplate;