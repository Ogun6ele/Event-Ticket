import { useNavigate } from "react-router-dom"; 
import MainComponent from "../component/MainComponent";
import Selection from "../component/Selection";
import useFormStorage from "../hooks/useFormStorage";

const ticketTypes = [
    { price: "Free", description: "REGULAR ACCESS", type: "Free" },
    { price: "$150", description: "VIP ACCESS", type: "VIP" },
    { price: "$250", description: "VVIP ACCESS", type: "VVIP" }
];

const FirstStep = () => {
    const navigate = useNavigate();

    const [selectedTicketNumber, setSelectedTicketNumber] = useFormStorage("ticketNumber", 1);
    const [selectedTicketIndex, setSelectedTicketIndex] = useFormStorage("ticketIndex", 0);
    const [selectedTicketType, setSelectedTicketType] = useFormStorage("ticketType", ticketTypes[0].type);

    const handleTicketClick = (index) => {
        setSelectedTicketIndex(index);
        setSelectedTicketType(ticketTypes[index].type); // Store the selected type
    };

    const handleNext = () => {
        navigate("/step-2"); 
    };

    return (
        <div>
            <MainComponent
                step={1}
                heading='Ticket Selection'
                buttonPrevious="Cancel" 
                buttonNext="Next"
                onNext={handleNext}
            >
                <Selection 
                    selectedTicketNumber={selectedTicketNumber} 
                    onTicketNumberChange={(e) => setSelectedTicketNumber(e.target.value)}
                    selectedTicketIndex={selectedTicketIndex}
                    onTicketClick={handleTicketClick}
                    selectedTicketType={selectedTicketType}
                />
            </MainComponent>
        </div>
    );
};

export default FirstStep;
