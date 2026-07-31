import { useState } from "react";
import "./App.css";

function App(){

const [lostItems,setLostItems]=useState([
{
item:"Laptop",
location:"Library",
date:"31 Jul 2026",
status:"Lost"
},
{
item:"Wallet",
location:"Canteen",
date:"30 Jul 2026",
status:"Lost"
}
]);


const [foundItems,setFoundItems]=useState([
{
item:"ID Card",
location:"Block A",
date:"31 Jul 2026",
status:"Found"
},
{
item:"Keys",
location:"Parking Area",
date:"29 Jul 2026",
status:"Found"
}
]);


const [lostForm,setLostForm]=useState({
item:"",
location:"",
date:""
});


const [foundForm,setFoundForm]=useState({
item:"",
location:"",
date:""
});



const submitLost=()=>{

if(!lostForm.item || !lostForm.location || !lostForm.date)
return;


setLostItems([
{
...lostForm,
status:"Lost"
},
...lostItems
]);


setLostForm({
item:"",
location:"",
date:""
});

};



const submitFound=()=>{

if(!foundForm.item || !foundForm.location || !foundForm.date)
return;


setFoundItems([
{
...foundForm,
status:"Found"
},
...foundItems
]);


setFoundForm({
item:"",
location:"",
date:""
});

};



return(

<div className="app">


<nav className="navbar">


<div className="logo">
🎒 Lost & Found
</div>


<ul>

<li>
<a href="#home">Home</a>
</li>


<li>
<a href="#lost">Lost</a>
</li>


<li>
<a href="#found">Found</a>
</li>


<li>
<a href="#contact">Contact</a>
</li>


</ul>


</nav>



<section className="hero" id="home">


<div className="hero-left">


<h1>Find What's Lost.</h1>

<h1>Return What's Found.</h1>


<p>
Helping students reconnect with their lost belongings
through a modern digital portal.
</p>


<div className="hero-buttons">

<button>
Report Lost
</button>


<button className="outline">
Report Found
</button>


</div>


</div>



<div className="hero-right">

<img
src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
alt="Lost Found"
/>

</div>


</section>
<section className="stats">

<div className="card">
<h2>{lostItems.length}</h2>
<p>Lost Items</p>
</div>


<div className="card">
<h2>{foundItems.length}</h2>
<p>Found Items</p>
</div>


<div className="card">
<h2>15</h2>
<p>Returned</p>
</div>


<div className="card">
<h2>9</h2>
<p>Pending</p>
</div>

</section>





<section className="search-section">

<input
type="text"
placeholder="🔍 Search Lost or Found Item..."
/>

</section>





<section className="forms">


<div className="form-card">


<h2>Report Lost Item</h2>


<input
placeholder="Item Name"
value={lostForm.item}
onChange={(e)=>
setLostForm({
...lostForm,
item:e.target.value
})
}
/>


<input
placeholder="Lost Location"
value={lostForm.location}
onChange={(e)=>
setLostForm({
...lostForm,
location:e.target.value
})
}
/>


<input
type="date"
value={lostForm.date}
onChange={(e)=>
setLostForm({
...lostForm,
date:e.target.value
})
}
/>


<button onClick={submitLost}>
Submit Lost Item
</button>


</div>





<div className="form-card">


<h2>Report Found Item</h2>


<input
placeholder="Item Name"
value={foundForm.item}
onChange={(e)=>
setFoundForm({
...foundForm,
item:e.target.value
})
}
/>


<input
placeholder="Found Location"
value={foundForm.location}
onChange={(e)=>
setFoundForm({
...foundForm,
location:e.target.value
})
}
/>


<input
type="date"
value={foundForm.date}
onChange={(e)=>
setFoundForm({
...foundForm,
date:e.target.value
})
}
/>


<button onClick={submitFound}>
Submit Found Item
</button>


</div>


</section>





<section className="items-section">


<div className="items-box" id="lost">

<h2>📌 Recently Lost Items</h2>


{
lostItems.map((item,index)=>(

<div className="item-card" key={index}>

<h3>{item.item}</h3>

<p>📍 {item.location}</p>

<p>📅 {item.date}</p>

<span className="lost">
{item.status}
</span>

</div>

))
}


</div>







<div className="items-box" id="found">

<h2>✅ Recently Found Items</h2>


{
foundItems.map((item,index)=>(

<div className="item-card" key={index}>

<h3>{item.item}</h3>

<p>📍 {item.location}</p>

<p>📅 {item.date}</p>

<span className="found">
{item.status}
</span>

</div>

))
}


</div>


</section>
<section className="features">


<div className="feature-card">

<h3>🔒 Secure Reporting</h3>

<p>
Every lost or found report is stored safely and displayed
in a clean dashboard.
</p>

</div>



<div className="feature-card">

<h3>⚡ Fast Search</h3>

<p>
Search items quickly and find matching reports easily.
</p>

</div>



<div className="feature-card">

<h3>📱 Mobile Friendly</h3>

<p>
The portal works smoothly on desktop, tablet, and mobile devices.
</p>

</div>


</section>





<section className="contact-section" id="contact">


<div className="contact-box">


<h2>📞 Contact Us</h2>


<p>
Have a question or found someone's lost item?
Contact the Lost & Found team.
</p>



<div className="contact-details">


<p>📧 Email: lostfound@gmail.com</p>

<p>📱 Phone: +91 98765 43210</p>

<p>📍 Location: College Campus</p>


</div>


</div>


</section>






<footer className="footer">


<h2>
🎒 Lost & Found Portal
</h2>


<p>
Helping students recover their belongings quickly and securely.
</p>



<div className="footer-links">


<a href="#home">
Home
</a>


<a href="#lost">
Lost
</a>


<a href="#found">
Found
</a>


<a href="#contact">
Contact
</a>


</div>



<p className="copyright">

© 2026 Lost & Found Portal | Developed by Lisha Shetty

</p>


</footer>



</div>

);

}


export default App;