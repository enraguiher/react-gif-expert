//evitar ejecutar la funcion directamente en un funtional component

export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=V14xeVjsOnxRnnHmgr8G0AoR9BnyGJTo&q=${category}&limit=10`;
    const resp = await fetch(url);7
    const {data} = await resp.json();
    const gifs = data.map(img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
    );
    console.log(gifs);
  
  return gifs;
  }