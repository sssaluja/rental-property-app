import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import '../styles/searchBar.css'

const SearchBar = () => {
    return (
        <div className="searchBar_container">
            <div className="searchBar_fields">
                <div className="searchBar_text">
                    <h3>Find Your Ideal Home</h3>
                </div>
                <div className="searchInput">
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
                <div className="filter">
                    Filter By State :<select>
                        <option>Kashmir</option>
                        <option>Kerala</option>
                        <option>Maharashtra</option>
                        <option>Arunachal</option>
                        <option>Karnataka</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;