import React,{useEffect, useState} from 'react';
export default function Search1(props) {
    let searchTimeout; 
  const [datass, setData] = useState([]);
  const [formData, setFormData] = useState({
    search: '',
  });

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setFormData({ ...formData, search: searchValue });
  
    if (searchValue.length > 0) {
      clearTimeout(searchTimeout);
  
      searchTimeout = setTimeout(async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/user/searchUser1/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: searchValue
          });
  
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
        }
      }, 500); // Delay the API call by 500 milliseconds
    }
  };

  return (
    <div >
      <div className="input-group-prepend">           
        <input 
          id="search1" 
          type="search" 
          name="search" 
          className="form-control" 
          placeholder="Search ..."
          onChange={handleChange} 
          value={formData.search} 
        />
      </div>
        <ul className="list-group">
          {datass.map((data) => (
              <li className="list-group-item"  key={data.id}> 
                  <p className="fs-5">{data.name} {data.surname}</p>
                  <p>Address: {data.address}</p>
                  <p>Birth Date: {data.dateofbirth}</p>
              </li>
          ))}

        </ul>
    </div>
  );
}   