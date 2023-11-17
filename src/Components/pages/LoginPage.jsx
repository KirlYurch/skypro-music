import GlobalStyle from '../../GlobalStyle.js';
import * as S from "./LoginPageStyle.js";


export const AppLogin = ({ user, onAuthButtonClick }) => {
    

    
    return (
        <div>
            <GlobalStyle />
            <S.WrapperLogin>
                <S.ContainerEnter>
                    <S.ModalBLock>
                    <S.ModalFormLogin action="#">
                        <a href="../">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </a>
                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        <S.ModalInput type="password" name="password" placeholder="Пароль" />
                        <S.ModalBtnEnter type="button" onClick={onAuthButtonClick}  > 
                            <S.ModalBtnEnterA to="/"> {!user ? "Войти" : "Выйти"}</S.ModalBtnEnterA>
                            
                        </S.ModalBtnEnter>
                        <S.ModalBtnSignup type="button" > 
                            <S.ModalBtnSignupA to="/registration">Зарегистрироваться</S.ModalBtnSignupA>
                        </S.ModalBtnSignup>
                    </S.ModalFormLogin>
                    </S.ModalBLock>
                </S.ContainerEnter>
            </S.WrapperLogin>
        </div>
    )
}