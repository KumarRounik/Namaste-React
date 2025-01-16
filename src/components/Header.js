import { useState } from "react";

const loggedInUser = () =>{
    //API call to check authentication
    return false;
};

const Title = () => (
    <a href="/">
   <img 
    className="logo"
    alt="logo"
    src="http://t1.gstatic.com/images?q=tbn:ANd9GcTsFA_WDM7tGA5t-3uQ8VwxLTxVD2fwELRn_QHRJ7hwxoWU5MHI"    
   />
   </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
             ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
};
export default Header;