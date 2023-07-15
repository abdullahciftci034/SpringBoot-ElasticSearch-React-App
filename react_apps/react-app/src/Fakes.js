import React from 'react';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
export default function Fakes() {
  const addfakerData = async () =>{
   for (let j = 0; 20 > j; j++) {
      const turkishName  = faker.person.firstName(); 
      const randomSurNames = faker.person.lastName(); 
      const randomDates = generateDateofbirth();
      const fakeAddresss = generateAddress();
      try {
        const response = await fetch('http://127.0.0.1:8080/user/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({"name":turkishName ,"surname":randomSurNames,"address":fakeAddresss,"dateofbirth":randomDates})  
        })
      } catch (error) {
        console.log(error);
      }

   }
  }
  const handleClick = async (event) => {
    await addfakerData();
  };






  const generateDateofbirth = () => {
    const startDate = new Date('1950-01-01'); // Define the start date for the range
    const endDate = new Date('2003-12-31'); // Define the end date for the range
    return faker.date.between(startDate, endDate).toISOString().split('T')[0];
  }
  const generateAddress = () => {
    const address = faker.address.streetAddress(); // Generate a street address
    const city = faker.address.city(); // Generate a city
    const state = faker.address.state(); // Generate a state
    const zipCode = faker.address.zipCode(); // Generate a zip code
    const country = faker.address.country(); // Generate a country
    return `${address}, ${city}, ${state} ${zipCode}, ${country}`;
  };
  const randomName = faker.person.firstName(); 
  const randomSurName = faker.person.lastName(); 
  const randomDate = generateDateofbirth();
  const fakeAddress = generateAddress();
  return (
    <div className='Fakes'>
      <Link to="/">Home</Link><br/>
        <button onClick={handleClick}>Fake Data Ekle</button>
      <ul>
        <li>
          {randomName}
        </li>
        <li>
          {randomSurName}
        </li>
        <li>
          {randomDate}
        </li>
        <li>
          {fakeAddress}
        </li>
      </ul>
    </div>
  )
}