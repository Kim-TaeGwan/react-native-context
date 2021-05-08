import React, {useContext} from 'react';
import UserContext from "../contexts/user";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 24px;
  margin:10px;
`

 /*
 * 기존에는 컴포넌트 간에 상태를 전달하는 경우 부모에서 자식으로 props 를 이용해 전달해야했다.
 * 이 방법은 컴포넌트의 계층이 복잡해질수록 개발 및 유지보수가 어렵다는 단점이 있다.
 * ContextAPI 를 이용하면 편하고 간결하게 상태를 공유 할 수 있다.
 *
 * ContextAPI 가 상태를 쉽게 전달하고 가져와서 사용할 수 있다고 해서 무조건 ContextAPI 를 사용하는 것은 좋지않다.
 * 상태를 전달해야 하는 관계의 구조가 간단하다면 굳이 ContextAPI 를 사용할 필요가 없다.
 *
 * ContextAPI 는 프로젝트의 구조가 복잡하고 많은 컴포넌트가 이용하는 데이터를 전역적으로 관리할때 사용하는 것이 좋다.
 * 예르 들어 애플리케이션 전체에서 알고 있어야 하는 로그인 상태, 테마, 설정 상태를 관리할 때 유용하게 사용할 수 있다.
 *
 * 생성된 Context 오브젝트는 입력된 기본값 외에도 Consumer 컴포넌트와 Provider 컴포넌트를 갖고있다.
 * 이번에는 Context 의 내용을 읽고 사용하는 Consumer 컴포넌트의 사용방법을 보자
 *
 * Consumer 컴포넌트는 상위 컴포넌트 중 가장 가까운 곳에 있는 Provider 컴포넌트가 전달하는 데이터를 이용한다.
 * 만약 상위 컴포넌트 중 Provider 컴포넌트가 없다면 createContext 함수의 파라미너로 전달된 기본값을 사용한다.
 *
 * Consumer 컴포넌트의 자식은 반드시 리액트 컴포넌트를 반환하는 함수여야 한다.
 * 이 함수는 Context 의 현재값을 파라미터로 전달받아 데이터를 사용할 수 있다.
 *
 *
 * useContext 함수는 Consumer 컴포넌트의 자식 함수로 전달되던 값과 동일한 데이터를 반환하므로 Consumer 컴포넌트를 사용하지 않고 Context 의 내용을 사용할 수 있게 해준다.
 *
 * Consumer 컴포넌트를 사용할 때는 Consumer 컴포넌트의 자식으로 반드시 리액트 컴포넌트를 반환하는 함수를 넣어야 하지만, useContext 를 이용하면 Consumer 컴포넌트를 사용했을 때 보다 사용법이 활씬 간편하고 코드의 가독성도 좋아진다.
 */

const User = () => {
    const {user} = useContext(UserContext);
    return (
        // <UserContext.Provider value={{name: 'React Native'}}>
        //     <UserContext.Consumer>
        //         {value => <StyledText>Name: {value.name}</StyledText>}
        //      </UserContext.Consumer>
        // </ UserContext.Provider>
        // <UserConsumer>
        //     {({user}) => <StyledText>Name:{user.name}</StyledText>}
        // </UserConsumer>
        <StyledText>Name: {user.name}</StyledText>
    );
};

export default User;
