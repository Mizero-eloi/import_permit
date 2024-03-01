import React, {useState} from 'react';
import emailjs from 'emailjs-com';


function Form() {

    const [citizenship, setCitizenship] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [nationality, setNationality] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otherNames, setOtherNames] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [tinNumber, setTinNumber] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [businessLocation, setBusinessLocation] = useState('');
    const [purposeOfImportation, setPurposeOfImportation] = useState('');
    const [productionName, setProductionName] = useState('');
    const [weight, setWeight] = useState('');
    const [description, setDescription] = useState('');
    const [unitOfMeasurement, setUnitOfMeasurement] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Citizenship:", citizenship);
        console.log("Identification Number:", identificationNumber);
        console.log("Passport Number:", passportNumber);
        console.log("Nationality:", nationality);
        console.log("Phone Number:", phoneNumber);
        console.log("Email:", email);
        console.log("Location:", location);
        console.log("Business Type:", businessType);
        console.log("Company Name:", companyName);
        console.log("TIN Number:", tinNumber);
        console.log("Registration Date:", registrationDate);
        console.log("Business Location:", businessLocation);
        console.log("Purpose of Importation:", purposeOfImportation);
        console.log("Production Name:", productionName);
        console.log("Weight:", weight);
        console.log("Description:", description);
        console.log("Unit of Measurement:", unitOfMeasurement);
        console.log("Quantity:", quantity);



        // Your EmailJS service ID, template ID, and user ID
    const serviceId = 'service_b0hnewe';
    const templateId = 'template_ljx5j08';
    const userId = 'dbuq bjxm hgru ddus';
  
    // Prepare the template parameters with form data
    const templateParams = {
      citizenship,
      identificationNumber,
      passportNumber,
      nationality,
      phoneNumber,
      email,
      location,
      businessType,
      companyName,
      tinNumber,
      registrationDate,
      businessLocation,
      purposeOfImportation,
      productionName,
      weight,
      description,
      unitOfMeasurement,
      quantity
    };
  
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
      };



  return (
      <form className='p-8'>
      <div className="mt-5 mx-auto bg-white rounded-md border border-blue-900 shadow-md max-w-[70%]">
        <div className='w-full bg-blue-200 border-blue-900 border-b bold text-blue-600 rounded-r-md rounded-l-md relative p-[14px] b'>
          <p>Business Owner Details</p>
        </div>
        <h2 className="p-5">Business Owner Details</h2>
        <div className="p-5">
          <div className="mb-4 w-full md:w-1/3">
            <label htmlFor="citizenship" className="block text-gray-700 mb-2 font-medium">Application Citizenship</label>
            <select 
              id="citizenship" 
              name="citizenship" 
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Rwandan">Rwandan</option>
              <option value="Foreigner">Foreigner</option>
            </select>
          </div>

          <div className="flex gap-5">
            {citizenship === "Rwandan" && (
              <div className="mb-4 w-1/3">
                <label htmlFor="identification_number" className="block text-gray-700 font-medium mb-2">Identification Number </label>
                <input
        type="text"
        id="nid"
        name="nid"
        value={identificationNumber}
        placeholder="Enter National ID"
        maxLength={16} // Set maximum length of NID
        minLength={16} // Set minimum length of NID
        pattern="\d{16}" // Set pattern to allow only 16 digits
        title="Please enter a 16-digit National ID number"
        required // Mark field as required
        onChange={(e) => setIdentificationNumber(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"

      />
              </div>
            )}
            {citizenship === "Foreigner" && (
              <div className="mb-4 w-1/3">
                <label htmlFor="passport_number" className="block text-gray-700 font-medium mb-2">Passport Number </label>
                <input type="text" id="passport_number" name="passport_number" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setPassportNumber(e.target.value)}/>
              </div>
            )}
            <div className="mb-4 w-1/3">
              <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">Nationality </label>
              <input type="text" id="nationality" name="nationality" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
          </div>









          <div className="flex gap-5">
            <div className="mb-4 w-1/3">
              <label htmlFor="other_names" className="block text-gray-700 font-medium mb-2">Other names </label>
              <input type="text" id="other_names" name="other_names" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setOtherNames(e.target.value)}/>
            </div>
            <div className="mb-4 w-1/3">
              <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">Surname </label>
              <input type="text" id="surname" name="surname" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setSurname(e.target.value)} />
            </div>
          </div>



          <div className="flex gap-5">
            <div className="mb-4 w-1/3">
              <label htmlFor="phone_number" className="block text-gray-700 font-medium mb-2">Phone Number </label>
              <input placeholder='Enter phone number' type="tel" id="phone_number" name="phone_number" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div className="mb-4 w-1/3">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail Address </label>
              <input placeholder='Enter email address' type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div>
          <h2 className="p-5 font-medium">Business Owner Address</h2>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-1/3">
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location </label>
              <input placeholder='Enter district' type="text" id="location" name="location" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setLocation(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      

      <div className="mt-5 mx-auto bg-white rounded-md border border-blue-900   shadow-md max-w-[70%]">
      <div className='w-full bg-blue-200  border-blue-900  border-b bold text-blue-600 rounded-r-md rounded-l-md relative p-[14px] b'>
            <p>Business  Details</p>
        </div>


        <div className="p-5">
      <div className="mb-4 w-full md:w-1/3">
          <label htmlFor="Business_type" className="block text-gray-700 mb-2 font-semibold">Business type</label>
          <select id="Business_type" name="Business_type" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setBusinessType(e.target.value)}>
            <option value="">Enter Business Type</option>
            <option value="retailer">Retailer</option>
            <option value="wholesale">Wholesale</option>
            <option value="manufacturer">Manufacturer</option>
            {/* Add more options as needed */}
          </select>
        </div>   


        <div className="flex gap-5">

        <div className="mb-4 w-1/3">
          <label htmlFor="company_name" className="block text-gray-700 font-medium mb-2">Company name </label>
          <input placeholder='Enter company name' type="text" id="company_name" name="company_name" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        
        <div className="mb-4 w-1/3">
          <label htmlFor="tin_number" className="block text-gray-700 font-medium mb-2">Tin number </label>
          <input placeholder='Enter TIN number' type="number" id="tin_number" name="tin_number" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setTinNumber(e.target.value)} />
        </div>
        
        </div>
        
        <div className="flex gap-5">

        <div className="mb-4 w-1/3">
          <label htmlFor="registration_date" className="block text-gray-700 font-medium mb-2">Registration_date </label>
          <input placeholder='Select date' type="date" id="registration_date" name="registration_date" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setRegistrationDate(e.target.value)} />
        </div>
        </div> 

        <div>
            <h2>Business Address</h2>
            <div className="mb-4 w-1/3">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location </label>
          <input placeholder=' Enter district' type="location" id="location" name="location" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setBusinessLocation(e.target.value)} />
        </div>
        </div>

        </div>




    </div>



    <div className="mt-5 mx-auto bg-white rounded-md border border-blue-900  shadow-md max-w-[70%]">


        <div className='w-full bg-blue-200  border-blue-900  border-b bold text-blue-600 rounded-r-md rounded-l-md relative p-[14px] b'>
            <p>Product Information</p>
        </div>


        <h2 className="p-5">Important Details</h2> 

        <div className="p-5">

        <div className="mb-4 w-1/2 flex gap-12">
            <div>

          <label htmlFor="purpose_of_importation" className="block text-gray-700 mb-2 font-semibold">Purpose of importation</label>
          <select id="purpose_of_importation" name="purpose_of_importation" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setPurposeOfImportation(e.target.value)}>
            <option value="">Select the purpose of importation</option>
            <option value="direct_sale">Direct sale</option>
            <option value="personal_use">Personal use</option>
            <option value="Trial_use">Trial use</option>
            <option value="Other">Other</option>
   
            {/* Add more options as needed */}
          </select>

            </div>

          <div className="mb-4 w-full">
          <label htmlFor="production_name" className="block text-gray-700 font-medium mb-2">Production name </label>
          <input placeholder="Enter product name" type="production_name" id="identification_number" name="production_name" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setProductionName(e.target.value)} />
        </div>
        </div>

        <div className="mb-4 w-1/2 flex gap-5">
            <div>

          <label htmlFor="product_details" className="block text-gray-700 mb-2 font-semibold">Product details</label>
          <select id="product_details" name="product_details" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setPurposeOfImportation(e.target.value)}>
            <option value="">Select the product category</option>
            <option value="general_purpose">General purpose</option>
            <option value="construction">Construction materials </option>
            <option value="chemicals">Checmicals</option>
   
            {/* Add more options as needed */}
          </select>

            </div>

          <div className="mb-4 w-1/3">
          <label htmlFor="production_name" className="block text-gray-700 font-medium mb-2">Production name </label>
          <input placeholder="Enter product name" type="production_name" id="identification_number" name="production_name" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setProductionName(e.target.value)} />
        </div>
        </div>


        <div className="flex gap-5">

        <div className="mb-4 w-1/3">
          <label htmlFor="Weight(kg)" className="block text-gray-700 font-medium mb-2">Weight </label>
          <input type="Weight" id="Weight" name="Weight" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setWeight(e.target.value)}/>
        </div>
        
        <div className="mb-4 w-1/3">
          <label htmlFor="Description" className="block text-gray-700 font-medium mb-2">Description of products </label>
          <input type="passport_number" id="Description" name="Description" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        

        </div>

        <div className="flex gap-5">

        <div className="mb-4 w-1/3">
        <label htmlFor="unit_of_measurement" className="block text-gray-700 mb-2 font-semibold">Unit of measurement</label>
          <select id="unit_of_measurement" name="unit_of_measurement" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setUnitOfMeasurement(e.target.value)}>
            <option value="">Enter unit of measurement</option>
            <option value="Kgs">Kgs</option>
            <option value="Tonnes">Tonnes</option>
   
            {/* Add more options as needed */}
          </select>
        </div>
        
        <div className="mb-4 w-1/3">
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity </label>
          <input placeholder='Enter quantity' type="quantity" id="quantity" name="quantity" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        
        </div> 

        </div>    
        </div>

    <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 relative left-[14%] top-[2em]">Apply</button>
      
    </form>
  );
}

export default Form;
