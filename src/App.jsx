import React, { useState } from "react";
import CheckBox from "./component/CheckBox";
import ItemForm from "./pages/ItemForm";
import SupplierForm from "./pages/SupplierForm";
import { saveItemsupplier } from "./services/apiService";
import Datatable from "./component/Datatable";

const App = () => {
  const [showItem, setShowTtem] = useState(false);
  const [showSupplier, setShowSupplier] = useState(false);
  const [itemData, setItemData] = useState({});
  const [supplierData, setSupplierData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  console.log("itemdata",itemData);
  

  const handleSubmit = async () => {
    if (
      !itemData.itemName ||
      !itemData.quantity ||
      !itemData.unitPrice ||
      !itemData.currency ||
      !supplierData.supplierName ||
      !supplierData.companyName ||
      !supplierData.email ||
      !supplierData.phoneNumber ||
      !supplierData.phoneCode ||
      !supplierData.countryId ||
      !supplierData.stateId ||
      !supplierData.cityId
    ) {
      alert("Please fill out all required fields");
      return;
    }
  
    const data = {
      itemDetails: itemData,
      supplier: supplierData,
    };
  
    try {
      const response = await saveItemsupplier(data);
      if (response && response.status === 200) {
        setSubmittedData([...submittedData, response.data]);
        alert("Data is saved");
      } else {
        alert(`Failed to save data: ${response.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("An error occurred during saving data: " + error.message);
    }
  };
  
  
  return (
    <div>
      <h1>Inventory Management System</h1>
      <CheckBox
        label="Item"
        isChecked={showItem}
        onChange={() => setShowTtem(!showItem)}
      />
      <CheckBox
        label="Supplier"
        isChecked={showSupplier}
        onChange={() => setShowSupplier(!showSupplier)}
      />
      <ItemForm visible={showItem} setItemData={setItemData} />
      <SupplierForm visible={showSupplier} setSupplierData={setSupplierData} />
      <button onClick={handleSubmit}>Submit</button>

      <Datatable data={submittedData} setSubmittedData={setSubmittedData} />
    </div>
  );
};

export default App;
