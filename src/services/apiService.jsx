const BASE_URL = "https://apis-technical-test.conqt.com";
export const saveItemsupplier = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/Api/Item-Supplier/Save-Items-Suppliers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error("Server error", responseData);
            return { status: response.status, message: responseData.errors || responseData.message || "An unknown error occurred" };
        }

        return { status: response.status, data: responseData };
    } catch (error) {
        console.error("Error in saveItemsupplier:", error);
        return { status: 500, message: error.message || "An error occurred" };
    }
};

export const getItemWithSuppliers= async ()=>{
    try {
        const response = await fetch (`${BASE_URL}/Api/Item-Supplier/Get-All-Items`)
        if (!response.ok) throw new Error("Failed to fetch items")
            return await response.json();

    }catch(e){
        console.error("error fetching items ",e);
        throw e
        
    }
}

export const updateItemSupplier =async (itemId,supplierId,data)=>{
    try {
        const response = await fetch(`${BASE_URL}/Api/Item-Supplier/Update-Items-Details/${itemId}/${supplierId}`,{
            method:'PATCH',
            headers : {'Content-Type':"application/json"},
            body:JSON.stringify(data)

    } )
    if (!response.ok) throw new Error("faild to update item and supplier")
        return await response.json();}
    catch (error) {
        console.error("error updating data",error);
        throw error
        
    }
}