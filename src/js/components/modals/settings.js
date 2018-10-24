import React from 'react';

import ModalWrapper from './ModalWrapper';

const SettingsModal = props => {
  const settings = provider => {
    props.hideModal();
    props.settings(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Settings"
      width={400}
      showOk={false}
    >
      <p>Choose your flavor</p>
      <button onClick={() => settings('facebook')}>Facebook</button>
      <button onClick={() => settings('google')}>Google</button>
      <button onClick={() => settings('twitter')}>Twitter</button>
    </ModalWrapper>
  );
};

export default SettingsModal;
