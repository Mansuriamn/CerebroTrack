import React, { useState, useEffect, useMemo } from "react";
import { Bar, Pie } from "react-chartjs-2";
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
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = ({leetCodeUser}) => {

  const [leetapi, setleetapi] = useState(null);
  const [submissionCalendar, setSubmissionCalendar] = useState([]);

  useEffect(() => {
    if (!leetCodeUser) return; // Ensure user is available before making API call

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${leetCodeUser}`);
        const data = res.data;
        if (data) {
          setleetapi(data);
          if (data.submissionCalendar) {
            const formattedData = Object.entries(data.submissionCalendar).map(
              ([timestamp, submissions]) => ({
                date: new Date(parseInt(timestamp, 10) * 1000).toLocaleDateString(),
                submissions,
              })
            );
            setSubmissionCalendar(formattedData);
          }
        }
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchData();
  }, [leetCodeUser]); // Only call API when leetCodeUser changes

  // Performance Chart Data
  const performanceData = useMemo(() => ({
    labels: ["Hard", "Medium", "Easy"],
    datasets: [
      {
        label: "Questions Solved",
        data: leetapi ? [leetapi.hardSolved, leetapi.mediumSolved, leetapi.easySolved] : [0, 0, 0],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }), [leetapi]);

  const performanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Score Distribution Data
  const scoreDistributionData = useMemo(() => ({
    labels: ["Total Questions", "Hard Solved", "Medium Solved", "Easy Solved"],
    datasets: [
      {
        label: "Questions",
        data: leetapi ? [leetapi.totalQuestions, leetapi.hardSolved, leetapi.mediumSolved, leetapi.easySolved] : [0, 0, 0, 0],
        backgroundColor: ["#F96E2A", "#FF9F40", "#36A2EB", "#FF6384"],
      },
    ],
  }), [leetapi]);
  return (
    <>
    <Headtop ></Headtop>
    <center className="context_name" ><b>LeetCode</b></center>
    <div className="middel">
      <div className="charts-container">
 <div className="chart-card" style={{ flex: 1 }}>
  <div className="score">
    <h4 >Score </h4>
    <div>
         <div >
         
        <div className="chart-container">
          <Pie data={scoreDistributionData} />
       </div>
      <div>
       
      </div>
         </div>
    </div>
   <div className="cha_data">
    <div className="card-container">
      
  <div className="card" onclick="cardClicked(1)">
   
    <h2> TotalSolved</h2>
    <div className="cha_bold">
         {leetapi ? (
           <p><b>{leetapi.totalSolved || 0}/</b>{leetapi.totalQuestions}</p>
         ) : (
           <p>Loading...</p>
         )}

    </div>
  </div>
    </div>
    <div className="card-container">
  <div className="card" onclick="cardClicked(1)">
    <h2> HardSolved </h2>
    <div className="cha_bold">
         {leetapi ? (
           <p><b>{leetapi.hardSolved || 0}/</b>{leetapi.totalHard}</p>
         ) : (
           <p>Loading...</p>
         )}

    </div>
  </div>
    </div>
    <div className="card-container">
  <div className="card" onclick="cardClicked(1)">
    <h2> MediumSolved </h2>
    <div className="cha_bold">
         {leetapi ? (
           <p><b>{leetapi.mediumSolved|| 0}/</b>{leetapi.totalMedium}</p>
         ) : (
           <p>Loading...</p>
         )}

    </div>
  </div>
    </div>
    <div className="card-container">
  <div className="card" onclick="cardClicked(1)">
    <h2> EasySolved </h2>
    <div className="cha_bold">
         {leetapi ? (
           <p><b>{leetapi.easySolved || 0}/</b>{leetapi.totalEasy}</p>
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
        <h4>Performance Metrics</h4>
        <div className="chart-container" style={{ height: "300px" }}>
          <Bar data={performanceData} options={performanceOptions} />
        </div>
      </div>

     
    </div>
    </div>

  <div className="table-container">
      <table className="custom-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Submissions</th>
            </tr>
          </thead>
          <tbody>
            {submissionCalendar.length > 0 ? (
              submissionCalendar.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.submissions}</td>
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
  );
};

export default Charts;

