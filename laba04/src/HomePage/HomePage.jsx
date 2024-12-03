import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Modal from "../Modal/Modal.jsx";

function HomePage() {
    const navigate = useNavigate();
    const [modalIsActive, setModalActive] = useState(false)
    const handleExternalNavigate = () => {
        setModalActive(false);
        window.location.href = "https://google.com";
    };

    return (
        <>
                <h1>
                    this is home page
                </h1>
                <button style={{width:'300px',height:'200px'}} onClick={() => setModalActive(true)}>
                    go to google.com
                </button>
                <button style={{width:'300px',height:'200px'}} onClick={() => navigate('about')}>
                    go to about page
                </button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto aspernatur aut blanditiis, doloremque doloribus fuga inventore laboriosam molestias nam qui quod repudiandae similique soluta suscipit tempore tenetur vel veritatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto aspernatur aut blanditiis, doloremque doloribus fuga inventore laboriosam molestias nam qui quod repudiandae similique soluta suscipit tempore tenetur vel veritatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto aspernatur aut blanditiis, doloremque doloribus fuga inventore laboriosam molestias nam qui quod repudiandae similique soluta suscipit tempore tenetur vel veritatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto aspernatur aut blanditiis, doloremque doloribus fuga inventore laboriosam molestias nam qui quod repudiandae similique soluta suscipit tempore tenetur vel veritatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto aspernatur aut blanditiis, doloremque doloribus fuga inventore laboriosam molestias nam qui quod repudiandae similique soluta suscipit tempore tenetur vel veritatis.</p>
                <Modal modalIsActive={modalIsActive} setModalActive={setModalActive}>
                    <p>
                        Are you sure you want to go to another site?
                    </p>
                    <button
                        onClick={() => {
                            setModalActive(false);
                            handleExternalNavigate();
                        }}
                    >
                        Yes, leave thid page
                    </button>
                    <button onClick={() => {setModalActive(false)}}
                            >no</button>

                </Modal>
            </>
    )
}


export default HomePage;