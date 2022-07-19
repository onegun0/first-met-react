//숫자로 key값 사용
const numbers=[1,2,3,4,5];
const listItems = numbers.map((number)=>
<li key={number.toString()}>{number}</li>
)

//id값으로 key값 사용
const todoItems=todos.map((todo)=>
<li key={todo.id}>{todo.text}</li>)

//인덱스 값으로 key값 사용
const todoItems2=todos.map((todo,index)=>
<li key={index}>{todo.text}</li>
);