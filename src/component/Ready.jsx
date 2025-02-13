import barCode from "../assets/images/Bar-Code.png";

const Ready = ({ uploadedImage, name, email, ticketType, ticketNumber, specialRequest }) => {
    return (
        <div className="ready">
            <div className="ready-details">
                <h2>Your Ticket is Booked!</h2>
                <p>Check your email for a copy or you can <strong>download</strong></p>
            </div>
            <div className="final-ticket">
                <div className="final-ticket-info">
                    <div className="final-ticket-location">
                        <h1>Techember Fest ”25</h1>
                        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p>📅 March 15, 2025 | 7:00 PM</p>
                    </div>
                    <img src={uploadedImage || "default-user-image.png"} alt="user" />
                    <div className="ready-info">
                        <div className="info-content">
                            <div>
                                <p>Enter your name</p>
                                <h5>{name}</h5>
                            </div>
                            <div>
                                <p>Enter your email *</p>
                                <h5>{email}</h5>
                            </div>
                        </div>
                        <div className="info-content">
                            <div>
                                <p>Ticket Type:</p>
                                <h5 style={{ fontSize: '0.625em', fontWeight: '400' }}>{ticketType}</h5>
                            </div>
                            <div>
                                <p>Ticket for:</p>
                                <h5 style={{ fontSize: '0.625em', fontWeight: '400' }}>{ticketNumber}</h5>
                            </div>
                        </div>
                        <div className="special-request">
                            <p>Special Request?</p>
                            <h5 style={{ fontSize: '0.625em', fontWeight: '400' }}>
                                {specialRequest ? specialRequest : "Nil"}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="barcode">
                    <img src={barCode} alt="barcode" />
                </div>
            </div>
        </div>
    );
};

export default Ready;
