import React, { useState, useEffect } from "react";

const TicketForm = ({ onGenerateTicket }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [errors, setErrors] = useState({});

  // Save form data in local storage
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
  }, [name, email, avatar]);

  // Validate the form
  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
    if (!avatar.startsWith("http")) newErrors.avatar = "Must be a valid image URL";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onGenerateTicket({ name, email, avatar });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Conference Ticket Generator</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label>Email Address:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Avatar URL:</label>
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        {errors.avatar && <p className="error">{errors.avatar}</p>}
      </div>

      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default TicketForm;
