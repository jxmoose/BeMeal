import './Navbar.css';

function Navbar() {
    return (
        <div class="nav-bar">
            <a onClick={() => {window.location.href="/"}}><h1 class="brand-name">BeMeal</h1></a>
        </div>
    );
}

export default Navbar;