import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import  imageUrlBuilder  from '@sanity/image-url';

const Index = ({res,image}) => {
const [mapedData,setMapedData] = useState([]);

useEffect(() => {
   const imageBuilder = imageUrlBuilder({
      projectId: 'jj3j3gmk',
      dataset: 'production'
   })
   setMapedData(res.map(r => {
      return{
         ...r,
         mainImage : imageBuilder.image(r.mainImage)
      }
   }))

},[image])
console.log(mapedData)
  return (
   <div className='container-fluid'>
      <div className='row '>
      <div className='col-md-12 d-flex flex-wrap '>{mapedData.map(data => (
    <div key={data.title} className='col-md-4'>
      <Link href={`/Newspapers/${data.slug.current}`}>
         <div className='contentcard d-block'>
         <img className='image' src={data.mainImage} />
    <h4 className='contenttitle' >{data.title}</h4>
    <p>{data.description}</p>
         </div>
    
   </Link>
    </div>
   ))}</div>

      </div>

   </div>
  )
}

export default Index

export async function getServerSideProps(){
    const query = encodeURIComponent(`*[_type == "banglapaper"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `).then(d => d.json())
  
 
   return{
    props:{
       res : res.result,
       image : res.result[0].mainImage,
      
      

    }
   }
}
