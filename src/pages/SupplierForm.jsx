import React, { useState } from "react";
import Input from "../component/Input";

const SupplierForm = ({ visible, setSupplierData }) => {
  if (!visible) return null;
  const [formData, setformData] = useState({
    supplierName: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  phoneCode: '',
  countryId: '',
  stateId: '',
  cityId: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updateData = { ...formData, [name]: value };
    console.log(e.target);
    setformData(updateData);
    setSupplierData(updateData);
  };

  return (
    <div>
      <h3>Supplier Details</h3>

      <Input
        label="Supplier Name"
        value={formData.supplierName}
        onChange={handleChange}
        name="supplierName"
      />
      <Input
        label="Country"
        value={formData.country}
        onChange={handleChange}
        name="country"
      />
      <Input
        label="State"
        value={formData.state}
        onChange={handleChange}
        name="state"
      />
      <Input
        label="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        name="companyName"
      />
      <Input
        label="Phone Code"
        value={formData.phoneCode}
        onChange={handleChange}
        name="phoneCode"
      />
      <Input
        label="Country ID"
        value={formData.countryId}
        onChange={handleChange}
        name="countryId"
      />
      <Input
        label="State ID"
        value={formData.stateId}
        onChange={handleChange}
        name="stateId"
      />
      <Input
        label="City ID"
        value={formData.cityId}
        onChange={handleChange}
        name="cityId"
      />

      <Input
        label="City"
        value={formData.city}
        onChange={handleChange}
        name="city"
      />
      <Input
        label="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
      />
      <Input
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
      />
    </div>
  );
};

export default SupplierForm;
