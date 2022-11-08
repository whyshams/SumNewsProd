import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import  imageUrlBuilder  from '@sanity/image-url';
import Head from 'next/head';

const Index = ({res,image,resEn,imageEn}) => {
const [mapedData,setMapedData] = useState([]);
const [mapedEnData,setMapedEnData] = useState([]);



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
useEffect(() => {
   const imageBuilderEn = imageUrlBuilder({
      projectId: 'jj3j3gmk',
      dataset: 'production'
   })
   setMapedEnData(resEn.map(r => {
      return{
         ...r,
         mainImage : imageBuilderEn.image(r.mainImage)
      }
   }))

},[imageEn])
console.log(mapedData)
  return (
   <>
    <Head>
      <title>Top Newspaers of Bangladesh</title>
      <meta name="description" content="Keep up with the top newspapers of Bangladesh.Browse through your favorite Bangla or English newspapers of Bangladesh without leaving our webapp. It is a more efficient way of going through saveral newspapers of Bangladesh in one place"/>
      <meta name="keywords" content="Bangla newspaper,bd newspaper,all bangladesh news papers, english newspaper of bangladesh,english newspaper of bd,prothom alo,samakal,inkilab,daily star bd,new age bd,daily sun bd,financial bd,all newspaper of bangladesh "/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
   </Head>
    <div className='container-fluid'>
      <div className='row '>
      <h4 className='border-bottom pb-2 border-light mainpagetitle d-flex justify-content-center align-items-center'>Bangla Newspapers</h4>

      <div className='col-md-12 d-flex flex-wrap '>{mapedData.map(data => (
    <div key={data.title} className='col-md-4 mt-2'>
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
      <h4 className='border-bottom pb-2 border-light mainpagetitle d-flex justify-content-center align-items-center'>English Newspapers</h4>
      <div className='row '>
      <div className='col-md-12 d-flex flex-wrap '>{mapedEnData.map(data => (
    <div key={data.title} className='col-md-4 mt-2'>
      <Link href={`/EnPaper/${data.slug.current}`}>
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
   </>
  
  )
}

export default Index

export async function getServerSideProps(){
   const query = encodeURIComponent(`*[_type == "banglapaper"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `).then(d => d.json())
  
   const query2 = encodeURIComponent(`*[_type == "englishpaper"]`)
   const resEn = await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query2}
   `).then(d => d.json())
   
   return{
    props:{
       res : res.result,
       image : res.result[0].mainImage,
       resEn : resEn.result,
       imageEn: resEn.result[0].mainImage
      

    }
   }
}
