import { useState } from "react";

const scaleName ={
    c:'섭씨',
    f:'화씨'
};

function temperatureInput(props){
    const [temperature,setTemperature]=useState('');
    const handleChange=(event)=>{
        setTemperature(event.target.value);
    }
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleName[props.scale]}):
            </legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
};

function Calculator(props){
    return (
        <div>
            <temperatureInput scale="c" />
            <temperatureInput scale="f" />
        </div>
    )
}

//섭씨 화씨 변환 함수

function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

//섭씨 화씨 변환 함수 호출하는 함수 
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

//shared state 적용하기
return (
    
    //변경 전 : <input value={temperature} onChange={handleChange} />
    <input value={props.temperature} onChange={handleChange} />
)

//상위 컴포넌트로 값을 전달하기
const handleChange=(event)=>{
    //변경 전: setTemperature(event.target.value)
    props.onTemperatureChange(event.target.value)
}

//최종 TemperatureInput 컴포넌트
function TemperatureInput(props){
    const handleChange = (event)=>{
        props.onTemperatureChange(event.target.value)
    }
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleName[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}