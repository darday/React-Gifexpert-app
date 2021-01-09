// import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({category}) => {      //el argumento que recibimos se pone entre llaves

    //custom hooks extraer la logica de algun componente de manera más facil 
    //un nuevo estado
    /*
    const [images, setimages] = useState([]);


    //si ponemos [] un arreglo vacio solo se ejecuta una vez
    //use efects para controlar la peticion si la categoria cambia unicamente si la categorpua cambia
    useEffect(()=>{
        //llamamos al getGifs y atrapamos una prtomesa
        getGifs(category)
            .then(imgs=>setimages(imgs));   //then imgs es una variable  y esa variable llama a una funcio a la cual su argumento es el m,ismo imgs 
    },[category]);  //se le pone category en las llaves para que si la categoria cambia tambien cambiara
    */
   
    //getGifs();

    /*custOM HOOK */

    const {data:images, loading}= useFetchGifs( category);    //almacenamos la funcion en la llaves {} eso se llama desestructurar

    return (
        <>
            <h3>{category}</h3>
            {/* " ? " = si loading es true  " : " = caso contrario ---- el && si cumple hace si no no hace nada*/}
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid ">
                
                {
                    images.map(img=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }           
    
            </div>
        </>
    )
}
