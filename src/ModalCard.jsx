const ModalCard = ({emailProp, onClose}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img className="modal-success" src='/success-svgrepo-com.svg'/>
                <h2 className="modal-head">Thanks for subscribing!</h2>
                <p className="modal-text">A confirmation has been sent to <strong className="bold-text">{emailProp}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <button className="modal-button" onClick={onClose}>Dismiss message</button>
            </div>
      </div>
    )
}

export default ModalCard;

/*
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
*/