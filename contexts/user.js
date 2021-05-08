import React, {createContext, useState} from 'react'

/*
* Context 의 값을 수정해서 Context 를 사용하는 컴포넌트에 변경된 내용을 반영
*
* Provider 컴포넌트의 value 에 전역적으로 관리할 상태 변수와 상태를 변경하는 함수를 함께 전달하는 UserProvider 컴포넌트를 생성.
*
* UserProvider 컴포넌트는 기존의 provider 컴포넌트와 사용법이 동일하지만 하위에 있는 Consumer 컴포넌트의 자식 함수의 파라미터로 데이터뿐만 아니라 데이터를 변경할 수 있는 함수도 함께 전달.
*
* createContext 의 기본값도 UserProvider 컴포넌트의 value 로 전달하는 형태와 동일한 형태를 갖도록 작성.
*
* Consumer 컴포넌트의 상위 컴포넌트에 Provider 컴포넌트가 없더라도 동작에 문제가 생기지 않도록 형태를 동일하게 맞추는 것이 좋다.
*
*/

const UserContext = createContext({
    user:{name: ''},
    dispatch: () => {},
}); // context 생성

const UserProvider = ({children}) => {
    const [name, setName] = useState('Expo');
    const value = {user:{name}, dispatch:setName};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

export default UserContext;
