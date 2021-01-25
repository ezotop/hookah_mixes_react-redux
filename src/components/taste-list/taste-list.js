import React, { Component } from 'react';
import TasteListItem from '../taste-list-item';
import {connect} from 'react-redux';
import WithTasteService from '../hoc';
import {tastesLoaded, tastesRequested, tastesError, mainTasteChosen} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './taste-list.scss'

class TasteList extends Component {
    componentDidMount() {
        this.props.tastesRequested();
        const {TasteService} = this.props;
        TasteService.getTasteItems()
            .then(res => this.props.tastesLoaded(res))
            .catch(() => this.props.tastesError());
    }

    render() {
        const {tasteItems, loading, error} = this.props;
       
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <Error/>
        }

        const content = tasteItems.map(tasteItem => {
            
            return <TasteListItem
                        key={tasteItem.id}
                        tasteItem={tasteItem}
                        onAddMainTaste={() => this.props.mainTasteChosen(tasteItem.id)}/>
            
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
        tasteItems: state.tastes,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    tastesLoaded,
    tastesRequested,
    tastesError,
    mainTasteChosen
};

export default WithTasteService()(connect(mapStateToProps, mapDispatchToProps)(TasteList));