import React from 'react';

const TasteSecondListItem = ({item}) => {
    // console.log(item);
    // if (!item) {
    //     return <div>Choose taste</div>
    // }

    return (
        <li className="taste__item" key={item.id}
            style={{color: 'black', cursor: 'pointer', margin: '10px 0'}}>
            <View item={item}/>
        </li>
    )
};

const View = ({item}) => {
    const {first, firstPart, second, secondPart} = item;
    if (second && secondPart) {
        return `${first}: ${firstPart}% + ${second}: ${secondPart}%`
    } else {
        return `${first}: ${firstPart}%`
    }
};

export default TasteSecondListItem;