import React from 'react';
import TasteServiceContext from '../taste-service-context';

const WithTasteService = () => (Wrapped) => {
    return (props) => {
        return (
            <TasteServiceContext.Consumer>
                {
                    (TasteService) => {
                        return <Wrapped {...props} TasteService={TasteService}/>
                    }
                }
            </TasteServiceContext.Consumer>
        );
    }
};

export default WithTasteService;