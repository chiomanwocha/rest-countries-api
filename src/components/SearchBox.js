import '../dist/output.css'
import { Icon } from '@iconify/react';

const SearchBox = () => {
    return ( 
        <div className='flex items-center gap-4 bg-white mt-6 mb-10 shadow-md shadow-gray-100 px-6 py-4'>
            <Icon icon="material-symbols:search-rounded" color="#CCCCCC" className='text-xl'/>
            <input type="text" placeholder='Search for a country ...' className='text-sm outline-none w-full'/>
        </div>
    );
}
 
export default SearchBox;