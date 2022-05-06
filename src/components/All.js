// import CustomizedTables from "./mui-components/Table";

import { useEffect, useState } from "react";
import axios from "axios";
import { FilteringTable } from "./basic-table/FilteringTable";
// import MultiFilterTable from "./multi-filter-table/MultiFilterTable";

const All = () => {

  const [show, setShow] = useState(false)
  const [donors, setDonors] = useState([])

  const onFetchDonors = () => {
    axios.get("http://localhost:5000/all").then( res => { console.log(JSON.parse(res.data).donors); setDonors(JSON.parse(res.data).donors) } ).catch( err => console.log(err) );
    setShow(true);
  }

  return (
    <FilteringTable show={show} handleShow={(val)=>setShow(val)} onFetchDonors={onFetchDonors} donors={donors}/>
    // <MultiFilterTable />
  );

}
export default All