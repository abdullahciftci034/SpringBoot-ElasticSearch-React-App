import React,{useEffect, useState} from 'react';
export default function SaveUser(props) {
  const [datass, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    dateofbirth:''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/user/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({"name":formData.name,"surname":formData.surname,"address":formData.address,"dateofbirth":formData.dateofbirth})  
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="input-group">
          <form onSubmit={handleSubmit} className="card-body mb-3">
            <div >
              <input placeholder='Name'className="form-control mb-2" type="text" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div  >
              <input placeholder='Surname' className="form-control mb-2" type="text" name="surname"  required value={formData.surname} onChange={handleChange} />
            </div>
            <div>
              <input placeholder='Address' className="form-control mb-2" type="text" name="address"  required value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <b>Birth Date:</b><input  className="form-control mb-3" type="date" name="dateofbirth"  required value={formData.dateofbirth} onChange={handleChange} />
            </div>
            <button type="submit"  className="btn btn-primary" >Submit</button>
          </form>
        </div>
        Gönderilen Veri
        <ul className="list-group">
          <li className="list-group-item">
            <p className="fs-5" >{datass.name} {datass.surname}</p> 
            <p>Address: {datass.address}</p>
            <p>Birth Date: {datass.dateofbirth}</p>
          </li>
      </ul>
      </div>
    </div>
  );
}