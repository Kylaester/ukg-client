// import React, { useState } from "react";
// import validator from 'validator';
// import InputError from '../InputError/InputError';
// import {Link} from 'react-router-dom';
// import axios from 'axios';



// function WarehouseAdd() {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [country, setCountry] = useState('');
//   const [contact, setContact] = useState('');
//   const [position, setPosition] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');

//   const [warehouseError, setWarehouseError] = useState(false);
//   const [addressError, setAddressError] = useState(false);
//   const [cityError, setCityError] = useState(false);
//   const [countryError, setCountryError] = useState(false);
//   const [contactError, setContactError] = useState(false);
//   const [positionError, setPositionError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);
//   const [emailError, setEmailError] = useState(false);

 

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//     setPhoneError(validator.isEmpty(phone));
//   };

//   const handlePositionChange = (e) => {
//     setPosition(e.target.value);
//     setPositionError(validator.isEmpty(position));
//   };

//   const handleContactChange = (e) => {
//     setContact(e.target.value);  
//     setContactError(validator.isEmpty(contact));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);

//     setContactError(validator.isEmpty(contact));
//     setPositionError(validator.isEmpty(position));
//     setPhoneError(validator.isEmpty(phone));
  
//     if(!(warehouseError && addressError && cityError 
//       && countryError && emailError && contactError 
//       && positionError && phoneError)){
    
//         const newWarehouse = {
//           warehouse_name: name,
//           address: address,
//           city: city,
//           country: country,
//           contact_name: name,
//           contact_postion:position,
//           contact_phone: phone,
//           contact_email: email
//         };
//         axios.post('http://localhost:8080/api/warehouse', newWarehouse)
//           .then(response => {
//             console.log(response.data);
//             setFormSubmitted(true);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//         };
//   }

//   return (
//     <div className='entire-warehouse-form'>

//       <form id="add-warehouse-form" onSubmit={handleSubmit}>
//       <Link to={`/`} className='link-add-warehouse-title'>
//         <h2 className='add-warehouse-title'>Add New Warehouse</h2>
//       </Link>
//     <div className='warehouse-complete-section'>
//         <div className='warehouse-details-section'>
//           <h3 className='warehouse-details-title'>Warehouse Details</h3>

//           <label htmlFor="warehouse-name">Warehouse Name</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleWarehouseChange} type="text" placeholder='Warehouse Name'value={name} />
//           {formSubmitted && warehouseError && <InputError/>}

//           <label htmlFor="street-address">Street Address</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleAddressChange} type="text" placeholder='Street Address'value={address}  />
//           {formSubmitted && addressError && <InputError/>}

//           <label htmlFor="city">City</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleCityChange} type="text" placeholder='City'value={city}/>
//           {formSubmitted && cityError && <InputError/>}

//           <label htmlFor="country">Country</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleCountryChange} type="text" placeholder='Country' value={country}  />
//           {formSubmitted && countryError && <InputError/>}
//          </div>

//         <div className='contact-details-section'>
//           <h3 className='contact-details-title'>Contact Details</h3>

//           <label htmlFor="contact-name">Contact Name</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleContactChange} type="text" id="contact-name" name="contact-name" placeholder='Contact Name' value={contact} />
//           {formSubmitted && contactError && <InputError/>}

//           <label htmlFor="position">Position</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handlePositionChange} type="text" id="position" name="position" placeholder='Position' value={position} />
//           {formSubmitted && positionError && <InputError/>}

//           <label htmlFor="phone-number">Phone Number</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`}onChange={handlePhoneChange} type="text" id="phone-number" name="phone-number" placeholder='Phone Number' value={phone} />
//           {formSubmitted && phoneError && <InputError />}

//           <label htmlFor="email">Email</label>
//           <input className={`warehouse-input ${warehouseError ? "warehouse-input-error":""}`} onChange={handleEmailChange} type="text" id="email" name="email" placeholder='Email'value={email} />
//           {formSubmitted && emailError && <InputError/>}
//         </div>
//         </div>
//         <div className='add-warehouse-buttons'>
//         <Link to={'/'} className='cancel-button-link'>
//           <button className='cancel-button' type="button" id="cancel-btn">Cancel</button>
//           </Link>
//           <Link to={'/'} className='submit-button-link'>
//           <button className='submit-button' type="submit">
//             +  Add Warehouse
//           </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }


// export default WarehouseAdd;