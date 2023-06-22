import { useState } from 'react'
import { Link, } from 'react-router-dom';

import logoGreen from '../../assets/images/logo-event-green.png'
import logoUk from '../../assets/images/UK-icon.png'
import italyFlag from '../../assets/images/italy-flag.png'

import './Header.css'


function Header() {

    const [flag, setFlag] = useState(logoUk);
    const [iSUk, setISUk] = useState(true);



    return (
        <div className='header'>
            <div className="flex-header">
                <img className="logo-greenFlag" src={logoGreen} />
                <Link to={iSUk ? '/' : 'view-italy-category'}>
                    <img className="logo-uk " onClick={() => {
                        if (iSUk === true) {
                            setISUk(false);
                            setFlag(italyFlag);
                        } else {
                            setISUk(true);
                            setFlag(logoUk);

                        }
                    }} src={flag}></img>
                </Link>

            </div>
        </div>
    )

}
export default Header;