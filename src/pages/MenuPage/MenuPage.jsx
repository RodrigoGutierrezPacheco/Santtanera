import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "./MenuPage.css"

export default function Menu() {
  return (
		<div>
			<h1>Menú</h1>
			<div className='categoria'>
    <ImageList sx={{width: "99%", height: "100%",justifyContent:"center"}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className="menuBox">
					<h2>{item.name}</h2>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
		</div>
		</div>
  );
}

const itemData = [
  {
		name:"Alimentos",
    img: 'images/hamburguesa.jpg',
    title: '$120.00',
    author: 'Hamburguesa',
  },
  {
		name:"Bebidas",
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
];