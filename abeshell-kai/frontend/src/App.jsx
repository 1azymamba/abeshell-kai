// 

/**/

import './App.css';
import React, { Component, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GridBackgroundWithText from './Functions/GridBackgroundWithText.tsx';
import SideNav from './Functions/LeftNavigationMenu';
import TableContents from './Functions/TableContents';
import LeftImageAndDescription from "./Functions/LeftImageAndDescription.tsx";

const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      //main: '#7fff00',
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFA500',
    },
    background: {
      //default: '#15202B'
      default: '#FFFFFF'
    }
  },
});

const texts_to_repeat = 'ABE Hiroshi';
const name_of_home_page = texts_to_repeat;
const repeat_count = 4;
const texsts = Array(repeat_count).fill(texts_to_repeat);



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "ABE Hiroshi"
    };
  }

  setUserName = (newName) => {
    this.setState({ userName: newName });
  }

  render(){
    return(
      <body background="abe-background.jpg">
        <ThemeProvider them={theme}>
          <CssBaseline />
          <div>
            <h1 className="homePageTitle">{name_of_home_page}のホームページ</h1><h2 className='homePageSubTitle'>Abeshell-kai<br></br>～ABE Hiroshiと学ぶサイバーセキュリティ～</h2>
          </div>
          <table className="table1">
            <td>
            </td>
          </table>

          <div style={{display: 'flex', width: '100%' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideNav userName={this.state.userName} setUserName={this.setUserName} />
            </div>
            <div style={{ flex: '0', marginLeft: '500px' }}>
              <LeftImageAndDescription/>
            </div>
            <div style={{ flex: '1' }}>
              <TableContents/>
            </div>
          </div>

          <div>
          </div>
        </ThemeProvider>
      </body>
    )
  }
}

export default App;