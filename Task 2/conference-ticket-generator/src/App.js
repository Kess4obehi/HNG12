import React, { useState } from "react";
import TicketForm from "./components/TicketForm";
import Ticket from "./components/Ticket";
import "./App.css"; 

const App = () => {
  const [ticket, setTicket] = useState(null);

  return (
    <div className="container">
      <TicketForm onGenerateTicket={setTicket} />
      <Ticket ticketData={ticket} />
    </div>
  );
};

export default App;
