// src/Search.tsx
import React from 'react';

interface SearchProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
    return (
        <input
            type="text"
            onChange={onChange}
            placeholder="Search users"
        />
    );
};

export default Search;
