import React, {useEffect, useState} from "react";
import axios from "axios";
import _ from "lodash";

const pageSize =10;
const Body = () => {

  const [launches, setLaunches]=useState([]);

  const [paginatedLaunches, setPaginatedLaunches]= useState();
  const [currentPage, setCurrentPage]=useState(1);
  // console.log(setLaunches);
  let date = new Date();
  useEffect(()=>{
    axios.get('https://api.spacexdata.com/v5/launches')
    .then((res)=>{
      console.log(res.data[3]);
      setLaunches(res.data);
      setPaginatedLaunches(_(res.data).slice(0).take(pageSize).value());
    })
  },[]);

const pageCount = launches ? Math.ceil(launches.length/pageSize): 0;

if (pageCount ==1) return null;

const pages = _.range(1, pageCount+1);

const pagination= (pageNo)=> {

  setCurrentPage(pageNo);
  const startIndex =(pageNo - 1) * pageSize;
const paginatedLaunches = _(launches).slice(startIndex).take(pageSize).value();
setPaginatedLaunches(paginatedLaunches);
}
  return <>
  
  {!paginatedLaunches ? ("No Data found"): 
  
  (<table className="table table-hover table-bordered">
        <thead className="tHeadBcg">
          <tr>
            <th className="col colWidth">Sr No</th>
            <th className="col colWidth">UTC Date</th>
            <th className="col">Rocket</th>
            <th className="col">Mission</th>
            <th className="col">Orbit</th>
            <th className="col">Launch Status</th>
            <th className="col">Launchpad</th>
          </tr>
        </thead>
        <tbody>
       { paginatedLaunches.map((launch, index)=>(
        <tr key={index}>

          <td className="col">{launch.flight_number}</td>
          <td className="col">{  ( launch.date_utc ? launch.date_utc.substring(0,10): null)}</td>
          <td className="col">{launch.rocket}</td>
          <td className="col">{launch.name}</td>
          <td className="col textJustify">{launch.details ? launch.details : "No Data Available"}</td>
          <td className={launch.success ? "col text-success " : "col text-danger "}>{launch.success == true ? "Success" : "Failed"}</td>
          <td className="col">{launch.launchpad}</td>
          
        </tr>
       ))
         } 
        </tbody>
      </table>
      )}

      <nav className="d-flex justify-content-end">
        <ul className="pagination">

          {
            pages.map((page)=>(
              <li className={page === currentPage ?  "page-iten active": "page-item"}>
                <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
              </li>
            ))
          
        
        }
        </ul>



      </nav>

  

    
    </>
  
};

export default Body;
