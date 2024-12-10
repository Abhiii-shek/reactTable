import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Account_name: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    Remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({
      Account_name: "",
      email: "",
      phone: "",
      website: "",
      industry: "",
      Remark: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border border-gray-300 rounded mb-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="Account_name"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded"
          value={formData.Account_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="p-2 border border-gray-300 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          className="p-2 border border-gray-300 rounded"
          value={formData.website}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          className="p-2 border border-gray-300 rounded"
          value={formData.industry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Remark"
          placeholder="Remark"
          className="p-2 border border-gray-300 rounded"
          value={formData.Remark}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
