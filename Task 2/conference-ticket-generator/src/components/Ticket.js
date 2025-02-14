import React from "react";

const Ticket = ({ ticketData }) => {
  if (!ticketData) return null;

  return (
    <div className="ticket">
      <h2>🎟️ Conference Ticket 🎟️</h2>
      <p><strong>Name:</strong> {ticketData.name}</p>
      <p><strong>Email:</strong> {ticketData.email}</p>
      <img src={ticketData.avatar} alt="Avatar" className="avatar" />
    </div>
  );
};

export default Ticket;
