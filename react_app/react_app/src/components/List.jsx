import React,{useEffect, useState} from 'react';
export default function List(props) {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/user/list');
          const data = await response.json();
          setDatas(data.content);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []);

    return (
        <div  >
            <ul  className="list-group">
              {datas.map((data) => (
                <li className="list-group-item" key={data.id} > 
                  <p className="fs-5">{data.name} {data.surname}</p>
                  <p>Address: {data.address}</p>
                  <p>Birth Date: {data.dateofbirth}</p>
                </li>
              ))}
           </ul>
        </div>
    )   
}