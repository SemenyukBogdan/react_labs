import {useNavigate} from 'react-router-dom'
function AboutPage() {
    const navigate = useNavigate();

    return (
        <>
        <div>
            this is about page.
        </div>
        <button onClick={() => {
            navigate("/")
        }}>
            go to home page
        </button>
        </>
    )
}

export default AboutPage;