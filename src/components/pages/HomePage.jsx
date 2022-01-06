import React from 'react';
import Nodegraph from '../nodegraph/Nodegraph';
import Search from '../search/Search';

const HomePage = () => {
  return (
    <div>
      <Search />
      <Nodegraph/>
    </div>
  );
}
export default HomePage;