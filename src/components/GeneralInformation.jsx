import { useState } from 'react'

function GeneralInformation() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    let blocked = false

    

    const CheckForErrors = (e) => {
        const elements = e.target.elements;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value === ''  && elements[i].name !== 'submit') {
            elements[i].style.border = '1px solid red';
            blocked = true
            } else {
            elements[i].style.border = '';
            }
    }}

    const ToggleEdit = (e) => {
        if (document.getElementById('input-form').style.display == 'none') {
            document.getElementById('editbutton').style.display = 'block'
        }
            else {document.getElementById('editbutton').style.display = 'none'
           
            }
        }

    const handleSubmit = (e) => {
        CheckForErrors(e)
        e.preventDefault()
        if (blocked) {
            blocked = false
            return
        }else {        
        setFirstName(e.target.firstName.value)
        setLastName(e.target.lastName.value)
        setEmail(e.target.email.value)
        setPhone(e.target.phone.value)
        setAddress(e.target.address.value)
        setCity(e.target.city.value)
        setState(e.target.state.value)
        setZip(e.target.zip.value)}
        document.getElementById('input-form').style.display = 'none'
        document.getElementById('input-form-button').style.display = 'none'
        ToggleEdit()
    }



const HandleEdit = (e) => {
    if (document.getElementById('input-form').style.display == 'none') {
            document.getElementById('input-form').style.display = 'block'
            document.getElementById('input-form-button').style.display = 'block'}
        }
       


    return (
        <> <h1>Contact Information <button id='editbutton' onClick={HandleEdit}>✏️</button></h1>
            <form onSubmit={handleSubmit}>
                <div id='input-form'>
                    <input type="text" name="firstName" placeholder="First Name" />
                    <input type="text" name="lastName" placeholder="Last Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                    <input type="text" name="address" placeholder="Address" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="text" name="state" placeholder="State" />
                    <input type="text" name="zip" placeholder="Zip" />
                </div>
                <button type="submit" name='submit' id='input-form-button'>Submit</button>
            </form>
           
            <div className="card">
                <h1>
                    {firstName} {lastName}
                </h1>
                <h2>
                    {email}
                </h2>
                <h2>
                    {phone}
                </h2>
                <h3>
                    {address} {city} {state} {zip} 
                </h3>
    
             
            </div>
        </>
    )
}

export default GeneralInformation