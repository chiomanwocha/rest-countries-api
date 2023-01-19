import '../dist/output.css'
import { Icon } from '@iconify/react';

const NavBar = () => {
    return ( 
        <nav className='flex justify-between px-6 py-8 shadow-md shadow-gray-100'>
            <div>
                <p className='font-bold'>Where in the world?</p>
            </div>
            <div className='flex items-center gap-1'>
                <Icon icon="ph:moon-light" />
                <p className='capitalize'>dark mode</p>
            </div>
        </nav>
    );
}
 
export default NavBar;
