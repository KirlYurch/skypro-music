import { useEffect, useState } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import NavMenu from "./Components/NavMenu";
import Sidebar from "./Components/Sidebar";
import Tracklist from "./Components/Tracklist";
import * as S from './AppStyle';
import GlobalStyle from './GlobalStyle.js';


function delay(interval) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve();
      }, interval);
  });
};

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    delay(3000).then(() => {
      setLoading(!loading);
    })
  }, []);
  

  return (
    <>
        <GlobalStyle />
        <S.Wrapper>
            <S.Container>
            <S.Main>
                <NavMenu />
                <Tracklist isLoading={loading}/>
                <Sidebar isLoading={loading}/>
            </S.Main>
            <AudioPlayer isLoading={loading} />
            <S.Footer />
            </S.Container>
        </S.Wrapper>
    </>
);
}

export default App;