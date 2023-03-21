// import React, { useState } from 'react'
import React from "react";
import "./Dashboard.css"
import {
  FaTh,
  FaBars,
  FaSearch,
  FaCodeBranch
}from "react-icons/fa";
import { MdOutlineNotificationAdd } from "react-icons/md";
import {BiChip} from "react-icons/bi"
import {HiBars3}from "react-icons/hi2"
import {SiSimpleanalytics} from "react-icons/si"
import {GrMail} from "react-icons/gr"
import image from "../src/assets/profile.jpg"
import chartimage from "./assets/1.png"
import axios from "axios";





const Dashboard = () => {
  const baseURL = "https://api.escuelajs.co/api/v1/products";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
   
<div  className='Dashboard'>
 <nav className='navbar'>
  <div className="brand" style={{color:"white"}}><HiBars3 size={30}/><h3 style={{paddingLeft:"20px"}}>HUD ADMIN</h3></div>
  <div >
    <div className="right-nav">
      <div  className="icons">
        <FaSearch size={20}/>
      </div>
      <div className="icons">
        < FaTh size={20}/>
      </div>
      <div className="icons" >
        <MdOutlineNotificationAdd size={23}/>
      </div>
      <div className="icons">
      <img className="image" src={image}/>
      </div>
      <div className="icons">
      <p>username@account.com</p>
      </div>
    </div> 
  </div>
 </nav>
 <div className="body-component">
 {/* sidebar */}
    <div className="sidebar">
    <h6 className="sidebar-header">Navigation</h6>
    <h4 className="white-hover"><BiChip size={25}/>Dashboard</h4>
    <h4 className="white-hover"><SiSimpleanalytics size={25}/>Analytics</h4>
    <h4 className="white-hover"><GrMail size={25}/>Email</h4>
    <h6 className="sidebar-header">components</h6>
    <h4 className="white-hover"><BiChip size={25}/>widgets</h4>
    <h4 className="white-hover"><SiSimpleanalytics size={25}/>Pos system</h4>
    <h4 className="white-hover"><GrMail size={25}/>UI kits</h4>
    <h4 className="white-hover"><BiChip size={25}/>table</h4>
    <h4 className="white-hover"><SiSimpleanalytics size={25}/>charts</h4>
    <h4 className="white-hover"><GrMail size={25}/>map</h4>
    <h6 className="sidebar-header">Users</h6>
    <h4 className="white-hover"><BiChip size={25}/>Profile</h4>
    <h4 className="white-hover"><SiSimpleanalytics size={25}/>Calender</h4>
    <h4 className="white-hover"><GrMail size={25}/>Settings</h4>
    <h4 className="white-hover"><GrMail size={25}/>Help center</h4>
    <button className="doc-button"><b><  FaCodeBranch size={20}/>Documentation</b></button>
    </div>

    <div className="cards-data">
      <div className="top-area">
      <div className="visitors-card"> 
      <h5 style={{paddingTop:"10px",color:"whitesmoke"}}>Site Visitors</h5>
      <div style={{display:"flex",color:"white",justifyContent:"space-around"}}><h2>4.2M</h2><div><img style={{width:"200px",height:"60px" ,opacity:"70%"}} src={chartimage}/></div></div>
      <div >
        <div  className="sub-card">33% more than last week</div>
        <div className="sub-card">45% new users</div>
        <div className="sub-card">3.25 bonuce rate </div>
      </div>
      </div>
      <div className="visitors-card"> 
      <h5 style={{paddingTop:"10px",color:"whitesmoke"}}>Site Visitors</h5>
      <div style={{display:"flex",color:"white",justifyContent:"space-around"}}><h2>4.2M</h2><div><img style={{width:"200px",height:"60px" ,opacity:"70%"}} src={chartimage}/></div></div>
      <div >
        <div  className="sub-card">33% more than last week</div>
        <div className="sub-card">45% new users</div>
        <div className="sub-card">3.25 bonuce rate </div>
      </div>
      </div>
      <div className="visitors-card"> 
      <h5 style={{paddingTop:"10px",color:"whitesmoke"}}>Site Visitors</h5>
      <div style={{display:"flex",color:"white",justifyContent:"space-around"}}><h2>4.2M</h2><div><img style={{width:"200px",height:"60px" ,opacity:"70%"}} src={chartimage}/></div></div>
      <div >
        <div  className="sub-card">33% more than last week</div>
        <div className="sub-card">45% new users</div>
        <div className="sub-card">3.25 bonuce rate </div>
      </div>
      </div>
      <div className="visitors-card"> 
      <h5 style={{paddingTop:"10px",color:"whitesmoke"}}>Site Visitors</h5>
      <div style={{display:"flex",color:"white",justifyContent:"space-around"}}><h2>4.2M</h2><div><img style={{width:"200px",height:"60px" ,opacity:"70%"}} src={chartimage}/></div></div>
      <div >
        <div  className="sub-card">33% more than last week</div>
        <div className="sub-card">45% new users</div>
        <div className="sub-card">3.25 bonuce rate </div>
      </div>
      </div>
      </div>
    <h6 style={{color:"white",paddingTop:"20px"}}> Top Products</h6>
    <div className="bottom-area">
    <div className="card-all">
   
     {post.map((post)=>(
      <div className="card">
      <div style={{width:"100px",height:"70px"}}><img style={{width:"100px",height:"70px"}} src={post.images}/></div>
      <h4>{post.title}</h4>
      <div>price:<p>{post.price}</p></div>
      <div > <FaSearch size={15}/></div>
      </div>
     ))} 
    </div>
    <div className="log">
    <table id="customers">
  
  <tr>
    <td><li>Alfreds Futterkiste</li></td>
    <td>just now</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>1 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
  <tr>
  <td><li>Alfreds Futterkiste</li></td>
  <td>2 min ago</td>
    <td><button>Product</button></td>
  </tr>
</table>
    </div>
    </div>
    </div>
    </div>
</div>
  )
}

export default Dashboard
