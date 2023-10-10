import React from 'react'
import {useState} from 'react'

import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Slider from "./components/Slider"


export default function App() {
const [color1,color2]=useState("danger");

const sendColor=()=>{
  color2("primary");
}

  return (
    <div>
<Navbar color={color1} param={sendColor}></Navbar>
<Slider
  title1="I am Binaya Koirala" description1="sfglskfms,fnls g sm,gblsm gmsbg  sdgmbs gmn esḍf,s dmfb" image1="https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  title2="sdnlmfns gms " description2="sfglskfms,fnls g sm,gblsm gmsbg  sdgmbs gmn esḍf,s dmfb" image2="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  title3="fklsdnf s g s" description3="sfglskfms,fnls g sm,gblsm gmsbg  sdgmbs gmn esḍf,s dmfb" image3="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
/>

<Cards title="Binaya" clr="primary" img="https://images.pexels.com/photos/4878372/pexels-photo-4878372.jpeg?auto=compress&cs=tinysrgb&w=600"></Cards>
<Cards title="Binaya" clr="success" img="https://images.pexels.com/photos/15335262/pexels-photo-15335262/free-photo-of-close-up-photograph-of-a-common-blue-butterfly.jpeg?auto=compress&cs=tinysrgb&w=600"></Cards>
<Cards title="Binaya" clr="warning" img="https://images.pexels.com/photos/3805975/pexels-photo-3805975.jpeg?auto=compress&cs=tinysrgb&w=600"></Cards>



    </div>

      
    
    
  )
}


