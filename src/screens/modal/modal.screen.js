import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class ModalScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    return (
      <div className="flex justify-center">
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Open Modal
        </button>
        <Modal
          open={this.state.isModalOpen}
          onClose={() => this.setState({ isModalOpen: false })}
          animationDuration={2000}
        >
          <div>
            <h2>Mobwiser Mentoring Program</h2>
            <img
              alt="mentoring-program"
              src="https://mobwiser.com/wp-content/uploads/2020/05/Captura-de-ecra%CC%83-2020-05-11-a%CC%80s-22.26.18.png"
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalScreen;
