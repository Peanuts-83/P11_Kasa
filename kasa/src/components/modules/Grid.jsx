import '../../styles/modules/grid.scss'
import Photo from './Photo'


 function Grid({locs}) {
     return(
         <div className="Grid">
             {
                 locs.map((loc, i) =>
                    <div className='photo_grid' key={`${loc.name}, ${i}`}>
                        <Photo loc={loc} />
                    </div>
                )
             }
         </div>
     )
 }

 export default Grid
