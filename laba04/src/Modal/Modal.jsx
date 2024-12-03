import './Modal.css'
function Modal({modalIsActive,setModalActive,children}) {
    return (
        <>
            <div  className={modalIsActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
                <div className="modal-content">
                    <div className="modal-body"></div>
                    {children}
                </div>
            </div>


        </>
    );
}


export default Modal