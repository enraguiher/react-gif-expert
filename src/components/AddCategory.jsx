import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('otro pokemon');

    const onInputChange = (event)=>{
        setinputValue(event.target.value);
    }

    const onsubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        onNewCategory(inputValue.trim());
        setinputValue("");
        //console.log(inputValue);
    }

  return (
    <form onSubmit={(event)=>onsubmit(event)}>
        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event)=>onInputChange(event)}
    />

    </form>
    
  )
}
