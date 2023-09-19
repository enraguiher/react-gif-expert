import React from 'react'
import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['pokemon']);//hook para cachar el estado

    const onAddCategory = (newCategory)=>{
        console.log(newCategory);
        //en react intentamos no mutar el estado, por eso crearemos uno nuevo
        //setCategories([...categories,'one piece']);//esta es una forma de agregar un valor al array anterior
        if(categories.includes(newCategory)) return;
        setCategories(cat =>[newCategory,...categories]);
        //setCategories(cat =>[...cat,'one piece']);
    }

  return (
    <>
    <h1>Gif Expert App</h1>
    <AddCategory onNewCategory={event=>onAddCategory(event)}/>
    <button onClick={onAddCategory}>Agregar</button>
        {
            categories.map((category) =>{//de preferencia se recomienda no usar el indice con las llaves o sea (category, i)
                return (
                    <GifGrid key={category} category={category}/>
                    )
            })
        }
    </>
  )
}
