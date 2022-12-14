import React from 'react';
import Card from '../card/Card';

const GridCard = ({ listItems, type }) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                listItems.map(item => (
                    <Card key={item.id} item={item} type={type} />
                ))
            }
        </div>
    );
};

export default GridCard;