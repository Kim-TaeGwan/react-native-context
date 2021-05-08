import React from 'react';
import styled from "styled-components/native";
import User from "../components/User";
import {UserProvider} from "../contexts/user";
import Input from "../components/Input";

const Container = styled.View`
  flex:1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`
/*
 * Context 에 있는 Provider 컴포넌트는 하위 컴포넌트에 Context 의 변화를 알리는 역할을 한다.
 * Provider 컴포넌트는 value 를 받아서 모든 하위 컴포넌트에 전달하고, 하위 컴포넌트는 Provider 컴포넌트의 value 가 변경될 때마다 다시 렌더링 된다.
 */
const App = () => {
    return (
        <UserProvider>
            <Container>
                <User />
                <Input />
            </Container>
        </UserProvider>

    );
};

export default App;
