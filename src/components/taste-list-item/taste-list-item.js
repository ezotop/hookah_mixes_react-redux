import React from 'react';

import './taste-list-item.scss';

const TasteListItem = ({tasteItem, onAddMainTaste}) => {
    const {id, title} = tasteItem;

        let clazz = 'taste__item';
        const onChoose = (id) => {
            if (id === tasteItem.id) {
                return clazz += '_active'
            }
            return clazz;
        };
    
    return (
        <li className={clazz}
            onClick={() => {
                onAddMainTaste(id)
                onChoose(id)
            }}>
            {title}
        </li>
    )
};

export default TasteListItem;