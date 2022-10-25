import * as React from 'react';
import "./Alimentos.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { display } from '@mui/system';

export default function Alimentos() {
  return (
		<div className='alimento'>
			<span className='titulo'>Alimentos</span>
			<img className='alimentos' src="images/alimento.jpg" alt="" />
    {/* <ImageList sx={{ width:"99%", height:"100%", marginLeft:".5%", display:"flex", flexDirection:"column"}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
					className='alimentos'
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={<span>{item.title} <br/>{item.sabores}</span>}
            subtitle={<span>{item.precio}<br/>{item.precio2}<br/>{item.precio3}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList> */}
		</div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Alitas',
    precio: '10 piezas $109.00',
		precio2: '20 piezas $169.00',
		sabores: 'BBQ | Mango Habanero | Bufalo'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Boneless',
    precio: '250gr piezas $109.00',
		precio2: '500 piezas $189.00',
		sabores: 'BBQ | Mango Habanero | Bufalo'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Tender Box',
		sabores: '200gr tiras de pollo + 200gr de papas',
    precio: 'C/ papas a la francesa $119.00',
		precio2: 'C/ papas gajo $129.00',
		precio3: 'Queso extra $10.00'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Tender Burguer',
    sabores: 'Tiras tender de pollo, aderezo, mix de vegetales, queso manchego o americano y papas a la francesa',
    precio: 'Natural|BBQ|Bufalo|Manchego|Mango HAbanero',
		precio2: 'C/ papas gajo $129.00',
		precio3: 'Queso extra $10.00'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '$150.00',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '$150.00',
  },
];
