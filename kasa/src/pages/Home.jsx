import Photo from "../components/modules/Photo"
import Grid from "../components/modules/Grid"
import carrousel from '../assets/carrousel.png'

function Home() {
    const locs = [
        {
            name: 'loc1',
            url: carrousel
        },
        {
            name: 'loc2',
            url: carrousel
        },
        {
            name: 'loc3',
            url: carrousel
        }
    ]
    return(
        <div>
            <Photo hpImg={true} />
            <Grid locs={locs}/>
        </div>
    )
}

export default Home