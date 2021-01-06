import React, { useState, useContext, useEffect } from 'react';
import VideoContext from '../../context/VideoContext';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const { fetchVideos } = useContext(VideoContext);

  const onChange = (e) => setTerm(e.target.value);

  useEffect(() => {
    fetchVideos('cars');
  }, [fetchVideos]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetchVideos(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
