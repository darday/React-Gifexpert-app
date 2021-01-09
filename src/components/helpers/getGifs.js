
//funcion que pide imagenes para eso le pasamos el valor categoria como argumentro
export const getGifs= async( category )=>{   //si es asincrono se pone el await
    //almacenamos en una variable el url de la api
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=4Q3OCEsJWXiGYoLYh0pnQU6Yw5ZQplzP`;
    const resp = await fetch(url);  //fetch espera o trae valores de la api await espera una promesa
    const {data} = await resp.json(); // esta es la respuesta que viene en forma de json
    //barrer con todos los datos de la dat y va a crear una nueva lista
    const gifs=data.map(img=>{
        //retorna un nuevo objeto con la info q m,e interesa
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    //pasamos el nuevo arreglo al nuevoestado
    return (gifs);  //devuelve una promesa (colecci9on de datos)
}
