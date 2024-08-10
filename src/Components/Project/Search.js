import React from "react";
import '../../Assets/Styles/Search.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img className="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" alt="Voice Search" title="Search by Voice" />
            <span>Total Projects: {searchTerm}</span>
        </div>
    );
};

export default SearchBar;
