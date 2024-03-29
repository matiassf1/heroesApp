import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {
  const { user, logout } = useContext( AuthContext );
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', {
        replace: true
    });
    logout();
 }   


    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-3" style={{backgroundColor:'#F23E16'}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={`${(isActive) =>{ isActive ? 'active' : '' }} nav-item nav-link`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={`${(isActive) =>{ isActive ? 'active' : '' }} nav-item nav-link`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={`${(isActive) =>{ isActive ? 'active' : '' }} nav-item nav-link`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-link nav-item text-dark fw-semibold fst-italic'>
                        {user?.name}
                    </span>

                    <button className='nav-link nav-item btn' onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}