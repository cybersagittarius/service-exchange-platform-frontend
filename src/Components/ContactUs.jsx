import{useState}from 'react';
import axios from 'axios';


const ContactUs = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");

const formSubmit = e =>{
    e.preventDefault();

    axios({
        method:"POST",
        url:"http://localhost:3000/contact",
        data:useState
    }).then((response) =>{
        if(response.data.status ==="success"){
            alert("Message sent");
            //clear the input
            setName("");
            setEmail("");
            setMessage("");
        }else if (response.data.status === "fail"){
alert("Message failed to send")
        }
    })
}
    return (
        <form id="contact" onSubmit={formSubmit} method="POST">
        <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Please Enter Your Name" required className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com" required className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control"
            value={message}
            onChange = {(e) => setMessage(e.target.value)}
             placeholder="Write Your Message" rows="5"/>
        </div>
          <button type="submit" className="btn btn-primary">
              Submit
          </button>
        </form>
    )
}

export default ContactUs;
