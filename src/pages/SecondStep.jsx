import { useNavigate } from "react-router-dom";
import Attendee from '../component/Attendee';
import MainComponent from '../component/MainComponent';
import useFormStorage from "../hooks/useFormStorage";
import { useState } from "react";

const SecondStep = () => {
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useFormStorage("uploadedImage", "");
    const [name, setName] = useFormStorage("attendeeName", "");
    const [email, setEmail] = useFormStorage("attendeeEmail", "");
    const [selectedTicketType] = useFormStorage("ticketType", "Free"); 
    const [emailError, setEmailError] = useState(""); 
    const [nameError, setNameError] = useState(""); 

    const validateEmail = (inputEmail) => {
        setEmail(inputEmail);
        if (!inputEmail) {
            setEmailError("Email is required");
        } else if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validateName = (inputName) => {
        setName(inputName);
        if (!inputName.trim()) {
            setNameError("Name is required");
        } else {
            setNameError("");
        }
    };

    const handleNext = () => {
        if (!uploadedImage) {
            alert("Please upload an image before proceeding!");
            return;
        }
        if (!name.trim() || !email.trim()) {
            alert("Please fill out your name and email!");
            return;
        }
        if (emailError || nameError) {
            alert("Please fix the errors before proceeding!");
            return;
        }
        navigate("/step-3");
    };

    const isFormInvalid = !name.trim() || !email.trim() || emailError || nameError;

    return (
        <div>
            <MainComponent
                step={2}
                heading='Attendee Details'
                buttonPrevious="Back" 
                buttonNext={`Get my ${selectedTicketType} Ticket`}
                onNext={handleNext}
                disabled={isFormInvalid} // Disable button if any validation fails
            >
                <Attendee 
                    onUpload={setUploadedImage} 
                    name={name} 
                    setName={validateName} // Validate name
                    email={email} 
                    setEmail={validateEmail} // Validate email
                />
            </MainComponent>
        </div>
    );
};

export default SecondStep;
