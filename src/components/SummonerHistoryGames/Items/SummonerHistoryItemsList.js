import React from 'react';
import SummonerHistoryItemsSingle from './SummonerHistoryItemsSingle.js'
import '../../../sass/SummonerHistoryItemsList.sass'

const SummonerHistoryItemsList = (props) => {

    const getItems = () => {
        const itemList = [props.itemList.item0,props.itemList.item1,props.itemList.item2,props.itemList.item3,props.itemList.item4,props.itemList.item5,props.itemList.item6]
        return itemList;
    }

    const singleItem = getItems().map((ele,index) => {if(ele !== 0 ) return <SummonerHistoryItemsSingle key={index} patch={props.patch} id={ele}/>})
    return (  
 
        <div className="itemsList">
            {singleItem}
        </div>
    );
}
 
export default SummonerHistoryItemsList;