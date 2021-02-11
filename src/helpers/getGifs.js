import React from "react";
export const getGifs = async (category) => {
  //esta funcion regresa todas las imagenes
  //las regresa en forma de promesa
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=68KcI7GSOwItEQVvjQeR1obQSahaHMGo`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
