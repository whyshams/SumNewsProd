import Head from "next/head"

const AboutUs = () => {
  return (
    <>
        <Head>
            <title>About Us</title>
            <meta name='description' content='Know about SumNews and why it is different from other news portal of Bangladesh' />
        </Head>
        <div className='mainpagetitle mt-3'>
            <h1 className=' d-flex justify-content-center align-items-center '>About SumNews</h1>
        </div>
        <hr className='text-muted'/>
        <div className='text-secondary'>
            <div className='contentcard rounded fullscreen mt-4 d-block justify-content-center align-items-center'>
                <h4 className='mb-2 contentparatitle'>SumNews was created as an idea of making news consumption and sharing as easy as possible.</h4> 
                <p className='mt-2'>Here, you can find any News from around the world from the best News agencies of the world and summarize them in a click in a 4-5 line summarization of the context of the whole news or article. It also very simple to share any news from Sumnews with your friends through clicking the social media buttons below every news. </p>
                <p className='mt-2'> You can keep yourself up to date with the current affairs of Bangladesh. Firstly, from the Local English News agencies and secondly, Bangla news from the top news portals of the country. Be it according to your choice of Topic or regional Divisions.</p>
          </div>

        </div>
    </>
  )
}

export default AboutUs