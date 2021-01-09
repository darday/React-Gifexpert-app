//hoks no son mas que funciones

import { useEffect, useState } from "react"
import { getGifs } from "../components/helpers/getGifs";
//cuando se usa oir primera vez useFetchgifs se manda el estado por defecto 

export const useFetchGifs=(category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    useEffect(()=>{                 //para evaluar un cambio, los efectos no pueden ser async      
        getGifs( category)              //traigo las imagenes (es una prom,esa)
            .then(imgs=>{
                setTimeout(() => {
                    setstate({
                        data:imgs,
                        loading:false
                    })
                }, 500);
               
            })  ;         
    },[ category])                  // arreglo vacio para q solo se ejecuta una vez, evalua q cambia la categoria


    //funcion que recibe un callback q despues de un tiempo hgace alguna cosa
    /*setTimeout(() => {
        setstate({
            data:[1,2,3,4,5,6,7],
            loading:false
        })
    }, 3000);*/
    return state;
}

