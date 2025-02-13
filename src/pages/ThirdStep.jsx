import { useNavigate } from "react-router-dom";
import Ready from '../component/Ready';
import MainComponent from '../component/MainComponent';
import useFormStorage from "../hooks/useFormStorage"; // Import the hook

const ThirdStep = () => {
    const navigate = useNavigate();

    // Retrieve stored data
    const [uploadedImage] = useFormStorage("uploadedImage", "");
    const [name] = useFormStorage("attendeeName", "");
    const [email] = useFormStorage("attendeeEmail", "");
    const [ticketType] = useFormStorage("ticketType", "Free");
    const [ticketNumber] = useFormStorage("ticketNumber", "1");
    const [specialRequest] = useFormStorage("specialRequest", "");

    const handleNext = () => {
        navigate("/"); // Navigate back to FirstStep
    };

    return (
        <div>
            <MainComponent
                heading='Ready'
                buttonPrevious="Book Another Ticket" 
                buttonNext="Download Ticket"
                onNext={handleNext}
            >
                {/* Pass props to Ready */}
                <Ready 
                    uploadedImage={uploadedImage}
                    name={name}
                    email={email}
                    ticketType={ticketType}
                    ticketNumber={ticketNumber}
                    specialRequest={specialRequest}
                />
            </MainComponent>
        </div>  
    );
};

export default ThirdStep;
