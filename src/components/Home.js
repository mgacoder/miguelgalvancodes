import background from '../img/homeBackground.jpeg';

const Home = () => {
    return ( 
        <div className='homeContainer' id='home'>
            <img src={background} className='backgroundImage'/>
        </div>
     );
}
 
export default Home;