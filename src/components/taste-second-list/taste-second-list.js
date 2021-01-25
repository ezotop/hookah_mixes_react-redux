import React, { Component } from 'react';
import TasteSecondListItem from '../taste-second-list-item';
import {connect} from 'react-redux';
import WithTasteService from '../hoc';
import {tastesError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class TasteSecondList extends Component {

    render() {
        const {chosenTaste, loading, error} = this.props;
        
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <Error/>
        }

        const content = chosenTaste.map(item => {
            // console.log(item);
            return <TasteSecondListItem key={item.id} item={item}/>
            
        });

        return (
            <ul className="plate">
                {content}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        chosenTaste: state.chosenTaste,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    
    tastesError
};

export default WithTasteService()(connect(mapStateToProps, mapDispatchToProps)(TasteSecondList));