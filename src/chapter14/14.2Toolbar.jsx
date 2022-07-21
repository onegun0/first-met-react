//기존 방식인 props로 전달
function App(){
    return <Toolbar theme="dark" />
}

function Toolbar(props){
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
}
function ThemeButton(props){
    return <Button theme={props.theme} />
}

//context사용-------------------------------------------------

const ThemeContext = React.createContext('light');
//현재 테마를 위한 컨텍스트를 생성하며 기본 값으로 light를 넣었다.

function App(props){
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props){
    return (
        <div>
            <ThemeButton />
        </div>
    );
}

function ThemeButton(props){
    return (
        <ThemeContext.Consumer>
            {(value) => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}




