import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//usar el snipet rafc



const GitExpertApp = ()=>{

    /*
    retorna el html
    
    hook de useState tiene dos valores el primer es el valor y el segundo es un opcional

    */

    const [categories, setCategories] = useState(['Evil Wizard']);
    //agregar un valor a la lista
    /*
    const handleAdd =()=>{
        //categories.push('Hunter');          //push añande un valor al final de un array
        setCategories([...categories,'Hunter']); //... extrae las categorias anteriores 
    }
    */



    return(
        <>
            <h2>GifExpertAdd</h2>

            {/* módule the recive the value of the input */}
            <AddCategory setCategories={setCategories} />

            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button>  // boton comentado poer q lo vamos a hacer de otra manera*/}
            <ol>
                {/* imprimir todo lol vector */}
                {
                    //map sirve para transformar cada elemento dentro del arreglo a algo que puede sar interpretadp por js
                    //map recibe 2 valores primero categoria, y luego el indice
                    categories.map(category=>(
                        // return <li key={category}>{category}</li>
                         <GifGrid 
                            key={category} 
                            category={category}/>  //llamamos al nuevo modulo y enviamos el argumento que se esta utilizando con el map

                    ))
                }
            </ol>

        </>

    );
};

export default GitExpertApp;