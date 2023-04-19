import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className="modal" style={{ display: isOpen ? 'grid' : 'none' }}>
            <div className="modal-container">
                <button className='modal-close' onClick={ onClose }>
                    <i class="fa-regular fa-rectangle-xmark modal-close"></i>
                </button>
                { children }
            </div>
        </div>
    );
}

export default Modal;