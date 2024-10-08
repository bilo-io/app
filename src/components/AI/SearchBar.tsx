'use client';

import React from 'react';
import FontAwesome from 'react-fontawesome';

interface SearchBarProps {
    // eslint-disable-next-line no-undef
    onSearch: (text: FormDataEntryValue | null) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      // @ts-ignore
      const formData = new FormData(e.target);
      const text = formData.get('text');
      onSearch?.(text);
    }}
    className='relative mb-2 flex flex-row items-center'
  >
    <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none">
      <FontAwesome name="search" />
    </div>
    <input
      type="search"
      name="text"
      id="default-search"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-r-none"
      placeholder="Search for images..."
      required
    />
    <button
      type="submit"
      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-l-none"
    >
                Search
    </button>
  </form>);