import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, {'font': []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [  'header', 'font', 'size',  'bold', 'italic', 'underline', 'strike', 'blockquote',  'list', 'bullet', 'indent',  'link', 'image', 'video']

const Addtrek = () => {
  const [eventName, seteventName] = useState('');
  const [displayName, setdisplayName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState('public');


  const [locations, setLocations] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [image, setImage] = useState(null);
  const [pickUpPoint, setPickUpPoint] = useState('');
  const [rows, setRows] = useState([{ name: '', count: '', discount: '',ticket:'', date: '' }]);

  const addRow = () => {
    setRows([...rows, { name: '', count: '', discount: '',ticket:'', date: '' }]);
  };

  const deleteRow = (index) => {
   if (rows.length > 1){ const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);}
  };
  const handleInputChange = (event, rowIndex, fieldName) => {
    const newRows = [...rows];
    newRows[rowIndex][fieldName] = event.target.value;
    setRows(newRows);
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  }

  const handlePickUpPointChange = (event) => {
    setPickUpPoint(event.target.value);
  }

 
  function handleVisibilityChange(event) {
    setVisibility(event.target.value);
  }


  const handleChange = (value) => {
    setDescription(value);
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      eventName,
      displayName,
      description,
      locations,
      fromDate,
      toDate,
      actualPrice,
      discountedPrice,
      pickUpPoint,
      rows
    }
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('/api/products', data, config);
      console.log(response.data);

    } catch (error) {
    }
  };
return(
  <div className="cbg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-6">
  
    <form className="bg-gray-100 p-6 rounded-lg" onSubmit={handleSubmit} >
    <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-gray-800">Trek Form</h1>
  
</div>       
 <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2" htmlFor="eventName">Event Name:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" id="eventName" type="text" placeholder="Enter Event Name" value={eventName} onChange={(e) => seteventName(e.target.value)}   />
            
        </div>

        <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2" htmlFor="displayName">Event Display Name:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" id="displayName" type="text" placeholder="Enter Event Name" value={displayName} onChange={(e) => setdisplayName(e.target.value)}   />
        </div>
        <div className="custom-margin">
            <label className="block font-bold text-gray-700 mb-2">Event Location:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" type="text" rows="4" placeholder="Enter Event Location" value={locations} onChange={(e) => setLocations(e.target.value)} required  />
        </div>
  <div className="my-4">
          <label className='block font-bold text-gray-700 mb-2'>Event Visibilit:</label>
          <div>
          <input type="radio" id="public" name="visibility" value="public" checked={visibility === 'public'} onChange={handleVisibilityChange} />

            <label htmlFor="public" className="form-label">Public</label>
          </div>
          <div>
          <input type="radio" id="link" name="visibility" value="link" checked={visibility === 'link'} onChange={handleVisibilityChange} />

            <label htmlFor="link" className="form-label">Link</label>
          </div>
          <div>
          <input type="radio" id="private" name="visibility" value="private" checked={visibility === 'private'} onChange={handleVisibilityChange} />
            <label htmlFor="private" className="form-label">Private</label>
          </div>
        </div>
  

  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <label className="block font-bold text-gray-700">From Date:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="date"
        value={fromDate}
        style={{maxWidth: '300px'}}
        onChange={(e) => setFromDate(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block font-bold text-gray-700">To Date:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="date"
        value={toDate}
        style={{maxWidth: '300px'}}
        onChange={(e) => setToDate(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <label className="block font-bold text-gray-700">Actual Price:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="number"
        value={actualPrice}
        placeholder="0"
        style={{maxWidth: '300px'}}

        onChange={(e) => setActualPrice(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block font-bold text-gray-700">Discount Price:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="number"
        value={discountedPrice}
        placeholder="0"
        style={{maxWidth: '300px'}}

        onChange={(e) => setDiscountedPrice(e.target.value)}
        required
      />
    </div>
      </div>
      <div className="mb-4">
        <label className="block">Event Image:</label>
        <input
          className="block w-full border-gray-300 rounded-md shadow-sm"
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="mb-6">
    <label className="block font-bold text-gray-700">Description:</label>
    <ReactQuill 
      className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={description} 
      onChange={handleDescriptionChange}
      modules={modules}
      formats={formats}
      theme="snow"
      rows={5}
      placeholder="Enter description here"
      required
    />
  </div>
  <div className="mb-6">
  <label className="block font-bold text-gray-700">Pick up points:</label>
  <textarea
    className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    value={pickUpPoint}
    onChange={handlePickUpPointChange}
    placeholder="Enter pick up points here"
  />
</div>

        {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ marginBottom: '20px' }}>
          <input
          
            type="text"
            class=" mr-2"
            placeholder="Ticket name"
            value={row.name}
            onChange={(event) => handleInputChange(event, rowIndex, 'name')}
          />
          <input
            type="number"
            className=" mr-2"
            placeholder="Total ticket count"
            value={row.count}
            onChange={(event) => handleInputChange(event, rowIndex, 'count')}
          />
          <input
            type="number"
            className=" mr-2"
            placeholder="Discount price"
            value={row.discount}
            onChange={(event) => handleInputChange(event, rowIndex, 'discount')}
          />
          <input
            type="number"
            className=" mr-2"
            placeholder="Ticket price"
            value={row.ticket}
            onChange={(event) => handleInputChange(event, rowIndex, 'ticket')}
          />
          <input
            type="date"
            className=" mr-2"
            placeholder="Date"
            value={row.date}
            onChange={(event) => handleInputChange(event, rowIndex, 'date')}
          />
           <button type="button" onClick={addRow}
  className="bg-blue-500 hover:bg-blue-700 text-white py-0.3 px-1.5 rounded-full mr-2"
  >
        +
      </button>
      <button type="button" onClick={() => deleteRow(rowIndex)} 
        className="bg-blue-500 hover:bg-blue-700 text-white py-0.3 px-1.5 rounded-full mr-2"
>
            -
          </button>
        </div>
      ))}
     

     <div style={{ display: 'flex', justifyContent: 'center' }}>
      

        <button className="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 transition-colors duration-300 " style={{ marginTop: '20px' }}>
        Add Trek
        </button>
        </div>
          </form>
          </div>
          );
          
          
          
  
  }  
  export default Addtrek;