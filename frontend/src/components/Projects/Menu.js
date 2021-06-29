import React from 'react';

const Menu = ({ items }) => {
  console.log(`items`, items)
  return (
    <div className='section-center'>
      {items.data.map((menuItem) => {
        const { id, title, description, github, tags, photo} = menuItem;
        console.log(`menuItem`, menuItem)
        return (
          <div key={id} className='card'>
            
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                {photo ? <h1>{photo}</h1> : '' }
                <h4 className='price'>${tags}</h4>
              </header>
              <p className='item-text'>{description}</p>
              <p className="github">{github}</p>
              <a href={github}>Github</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;