import React, { useEffect, useState } from "react";

function CreateArea(props) {
  const [formdata, setformdata] = useState({
    productid: "",
    sellingprice: "",
    productname: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setformdata((prevformdata) => {
      return {
        ...prevformdata,
        [name]: value
      };
    });
  }

  function submitformdata(event) {
    props.onAdd(formdata);
    setformdata({
      productid: "",
      sellingprice: "",
      productname: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>Product Id</label>
        <input
          type="number"
          name="productid"
          onChange={handleChange}
          value={formdata.productid}
        />
        <label>Selling Price</label>
        <input
          type="number"
          name="sellingprice"
          onChange={handleChange}
          value={formdata.sellingprice}
        />
        <label>Product Id</label>
        <input
          type="text"
          name="productname"
          onChange={handleChange}
          value={formdata.productname}
        />

        <button onClick={submitformdata}>Add</button>
      </form>
      <h1>Products</h1>
      <h4>Total Value Worth of Products:Rs.0</h4>
    </div>
  );
}

export default CreateArea;
