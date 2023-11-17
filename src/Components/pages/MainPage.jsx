import { useEffect, useState } from "react";
import AudioPlayer from "../AudioPlayer";
import NavMenu from "../NavMenu";
import Sidebar from "../Sidebar";
import Tracklist from "../Tracklist";
import * as S from "../../AppStyle";
import GlobalStyle from "../../GlobalStyle";

function delay(interval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
  };

export const  MainPage = () => {


    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        delay(1000).then(() => {
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
    )
}