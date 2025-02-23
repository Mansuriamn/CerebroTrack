import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Headtop from "./Headtop";
import Footer from "./Footer";
import './Charts.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register required Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
 
  ArcElement,
  Tooltip,
  Legend
);



export default function CodeChef({CodeChefUser}) {
   console.log(CodeChefUser);

  const [leetapi, setleetapi] = useState(null);
  const [submissionCalendar, setSubmissionCalendar] = useState([]);

  useEffect(() => {
    if (!CodeChefUser) return;

    const api = `https://codechef-api.vercel.app/handle/${CodeChefUser}`;
    console.log(api);
    axios.get(api)
      .then((res) => {
        setleetapi(res.data);
        console.log(res.data.heatMap);
        if (res.data.heatMap?.length > 0) {
          setSubmissionCalendar(res.data.heatMap);
        }
      })
      .catch((err) => console.error("Error fetching CodeChef data:", err));
  }, [CodeChefUser]);

  // Data for the Performance Chart
  const performanceData = {
    labels: ["Country Rank", "Global Rank"],
    datasets: [
      {
        label: "Ranking",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [leetapi?.countryRank || 0, leetapi?.globalRank || 0],
        borderWidth: 1,
      },
    ],
  };

  const performanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
   <>
  <Headtop></Headtop>
     <center className="context_name" ><b>CodeChef</b></center>
     <div className="middel">
       <div className="charts-container">
  <div className="chart-card" style={{ flex: 1 }}>
   <div className="score">
     <h4 >Score </h4>
     <div>
          <div >
          
         <div className="chart-container">
           <img  src="https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg" />
        </div>
       <div>
        
 
       </div>
          </div>
     </div>
    <div className="cha_data">
     <div className="card-container">
       
   <div className="card" onclick="cardClicked(1)">
    
     <h2> currentRating</h2>
     <div className="cha_bold">
          {leetapi ? (
            <p><b>{leetapi?.currentRating || 0}</b></p>
          ) : (
            <p>Loading...</p>
          )}
 
     </div>
   </div>
     </div>
     <div className="card-container">
   <div className="card" onclick="cardClicked(1)">
     <h2> highestRating </h2>
     <div className="cha_bold">
          {leetapi ? (
            <p><b>{leetapi?.highestRating|| 0}</b></p>
          ) : (
            <p>Loading...</p>
          )}
 
     </div>
   </div>
     </div>
     <div className="card-container">
   <div className="card" onclick="cardClicked(1)">
     <h2> stars </h2>
     <div className="cha_bold">
          {leetapi ? (
            <p><b>{leetapi?.stars|| 0}</b></p>
          ) : (
            <p>Loading...</p>
          )}
 
     </div>
   </div>
     </div>
     <div className="card-container">
   <div className="card" onclick="cardClicked(1)">
     <h2> countryRank </h2>
     <div className="cha_bold">
          {leetapi ? (
            <p><b>{leetapi?.countryRank || 0}</b></p>
          ) : (
            <p>Loading...</p>
          )}
 
     </div>
   </div>
     </div>
    
    </div>
   </div>
 </div>
 
 
 
       <div className="chart-card" style={{ flex: 1 }}>
         <h4>Rank</h4>
         <div className="chart-container" style={{ height: "300px" }}>
           {leetapi ? (
             <Bar data={performanceData} options={performanceOptions} />
           ) : (
             <p>Loading...</p>
           )}
         </div>
       </div>
 
      
     </div>
     </div>
 
   <div className="table-container">
       <table className="custom-table">
           <thead>
             <tr>
               <th>Date</th>
               <th>Value</th>
             </tr>
           </thead>
           <tbody>
             {submissionCalendar.length > 0 ? (
               submissionCalendar.map((entry, index) => (
                 <tr key={index}>
                   <td>{entry.date}</td>
                   <td>{entry.value}</td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan="2">Loading...</td>
               </tr>
             )}
           </tbody>
         </table>
       </div>
 
 
   <Footer></Footer>
   
   </>
  )
}

