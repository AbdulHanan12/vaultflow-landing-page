import React, { useEffect, useState, useRef } from 'react';

export function LearnerSelect({ value, onChange }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Filter users by query
  const filtered = query
    ? users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))
    : users;

  // Handle select
  const handleSelect = (user) => {
    onChange(user);
    setQuery(user.name);
    setOpen(false);
    inputRef.current.blur();
  };

  // When value changes externally, update query
  useEffect(() => {
    if (value && value.name !== query) setQuery(value.name);
    if (!value && query) setQuery('');
  }, [value]);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        className="w-full rounded-md bg-gray-100 px-4 py-3 text-gray-900 text-base mb-4 outline-none border-none placeholder-gray-400"
        placeholder="Start typing here"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setOpen(true);
          onChange(null);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        autoComplete="off"
      />
      {open && (
        <div className="absolute left-0 right-0 z-[10001] bg-white rounded-xl shadow-lg mt-[-0.5rem] max-h-60 overflow-y-auto border border-gray-200">
          {loading ? (
            <div className="p-4 text-gray-400">Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="p-4 text-gray-400">No learners found</div>
          ) : (
            filtered.map(user => (
              <div
                key={user.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onMouseDown={() => handleSelect(user)}
              >
                {user.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
} 