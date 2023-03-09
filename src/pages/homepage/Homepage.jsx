import './Homepage.css';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';

export default function Homepage(props){
    return(
        <main>
            <Hero/>
            <Gallery />
        </main>
    )
}


/*data={props.data}*/