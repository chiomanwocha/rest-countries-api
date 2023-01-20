import '../dist/output.css'
import { Icon } from '@iconify/react';

const SearchBox = () => {
    return ( 
        <div className='md:flex justify-between md:mt-6 md:mb-10 md:gap-10 '>
            <div className='flex items-center gap-4 mt-10 mb-6 md:mt-0 md:mb-0 bg-white shadow-md md:w-full shadow-gray-100 px-6 py-4'>
                <Icon icon="material-symbols:search-rounded" color="#CCCCCC" className='text-xl'/>
                <input type="text" placeholder='Search for a country ...' className='text-sm outline-none w-full'/>
            </div>
            <select name="countries" id="countries" className="p-4 flex justify-start text-md outline-none" defaultValue={'selected'}>
                <option value="selected" disabled >Filter by Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
        </div>
    );
}
 
export default SearchBox;