const ticketTypes = [
  { price: 'Free', description: 'REGULAR ACCESS', type: 'Free' },
  { price: '$150', description: 'VIP ACCESS', type: 'VIP' },
  { price: '$150', description: 'VVIP ACCESS', type: 'VVIP' }
];

const Selection = ({ selectedTicketNumber, onTicketNumberChange, selectedTicketIndex, onTicketClick }) => {
  return (
      <div className='selection'>
          <div className="event-details">
              <h1>Techember Fest ’25</h1>
              <p>Join us for an unforgettable experience at <br/> [Event Name]! Secure your spot now.</p>
              <p>📍 [Event Location] | March 15, 2025 | 7:00 PM</p>
          </div>

          <hr/>

          <div className="ticket-selection">
              <h4>Select Ticket Type:</h4>
              <div className="ticket-type">
                  {ticketTypes.map((ticket, index) => (
                      <div
                          className={`ticket ${selectedTicketIndex === index ? 'selected' : ''}`} 
                          key={index}
                          onClick={() => onTicketClick(index)}
                      >
                          <h5>{ticket.price}</h5>
                          <div>
                              <h6>{ticket.description}</h6>
                              <p>20/52</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <div className="ticket-number">
              <h4>Select Number of Tickets:</h4>
              <select value={selectedTicketNumber} onChange={onTicketNumberChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
          </div>
      </div>
  );
};

export default Selection;
