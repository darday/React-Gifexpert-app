import React, { useState } from 'react';
import PropTypes from 'prop-types';




export const AddCategory = ({setCategories}) => {       //se recibe set categories q es enviado del componente padre

    const [inputValue, setinputValue] = useState('');//vacio es undefine y '' string vacio

    //extraer el valor ingresado e imprimir
    const handleInputChange =(e)=>{
        setinputValue(e.target.value); // se llama a la funcion usestate que va a tener los nuevos valores
    }

    //funcion para enter
    const handleSubmit=(e)=>{
        e.preventDefault();             //evita que el navegador refresque la página

        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]); //... extrae las categorias anteriores 
            setinputValue(''); //reicia el input y lo deja en blanco



        }
        //console.log("Submit enviado"); 


    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            
            
            
        </>
    )
}

AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired //func de funcion
}
