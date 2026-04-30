import './App.css';
import { useEffect, useState } from 'react';
import JobList from './components/JobList';
import { addJob, deleteJob, getJobs, updateJob } from './services/jobService';


function App() {

  const [title,setTitle]=useState("");
  const [company,setCompany]=useState("");
  const[status,setStatus]=useState("");
  const [jobs,setJobs]=useState([]);
  const [selectedJob,setSelectedJob]=useState(null);
  const [isEdit,setIsedit]=useState(false);


  useEffect(()=>{
    loadJobs();
  },[])

  const loadJobs =()=>{
    
    getJobs()
    .then(res=>setJobs(res.data))
    .catch(err=>console.log(err));
  };

  const handleSubmit =(e)=>{
    e.preventDefault();  
    const newJob={     
      title,
      company,
      status
    };   
    
 
    if(title.trim() && company.trim() && status)
    {
       if(isEdit)
       {       
        updateJob(selectedJob.id,newJob)
        .then(()=>{
          loadJobs();
          setTitle("");
          setCompany("");
          setStatus("");
          setSelectedJob(null);
          setIsedit(false);        
        })
       }
       else{
       
        addJob(newJob).then(()=>{
      loadJobs();
      setTitle("");
      setCompany("");
      setStatus("");       
    });
       }
      

    }     
  }
   const deleteRow =(id)=>{     
      deleteJob(id)
      .then(()=>
      {
        loadJobs();
      })
    } 

    const editRow=(jobData)=>{     
      setIsedit(true);         
      setSelectedJob(jobData);  
      setTitle(jobData.title);
      setCompany(jobData.company);   
      setStatus(jobData.status);
    }


  return (
    <div  className="wrapper">
      <h1 className='App'>Job Application Tracker</h1>
      <div className='card-layout'>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-items'>
          <label  className='form-label'>Title</label>
          <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          </div>
        

         <div className='form-items'>
          <label className='form-label'>Company</label>
        <input placeholder='Company' value={company} onChange={(e)=>setCompany(e.target.value)}></input>
          </div>
        
       
        <div className='form-items'>
        <label className='form-label'>Status</label>
       <select placeholder="Status" value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option id="0" value="">Select Status</option>
        <option id="1" value="Applied">Applied</option>
        <option id="2" value="Interview">Interview</option>
        <option id="3" value="Offer">Offer</option>
       </select>
          </div>
       
      <div className='form-items'>
        <button className="btn-primary" type="submit">{isEdit ? "Edit" :"Add"} Job</button>
      </div>      

      </form>

      </div>
      
 <div className='card-layout'>
 <JobList jobs={jobs} deleteJobfromList={deleteRow} editJobinList={editRow} />
 </div>
     
    </div>
  );
}

export default App;
