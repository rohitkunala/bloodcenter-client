import { FilteringTable } from "./basic-table/FilteringTable";

import { useEffect, useState } from "react";
import axios from "axios";

const BloodCenter = () => {
  const [show, setShow] = useState(false)
  const [donors, setDonors] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:5000/fbf").then( res => console.log(res) ).catch( err => console.log(err) )
  // })

  const onFetchDonors = () => {
    axios.get("http://localhost:5000/bloodCenter").then( res => { console.log(JSON.parse(res.data).donors); setDonors(JSON.parse(res.data).donors) } ).catch( err => console.log(err) );
    setShow(true);
  }

  return (
    <FilteringTable show={show} handleShow={(val)=>setShow(val)} onFetchDonors={onFetchDonors} donors={donors}/>
  );
}
export default BloodCenter