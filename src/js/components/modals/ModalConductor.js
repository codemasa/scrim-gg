import React from 'react';

import SettingsModal from './settings';

const ModalConductor = props => {
    switch(props.currentModal){
        case 'SETTINGS':
            return <SettingsModal {...props}/>;

        default:
            return null;
    }
};

export default ModalConductor;
