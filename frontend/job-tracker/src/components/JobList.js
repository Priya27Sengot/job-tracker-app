import React from 'react';
import '../App.css';

const JobList = ({jobs,deleteJobfromList,editJobinList})=>{    

    
    function deleteRow(id)
    {
        if(window.confirm("Are you sure you want to delete this job?"))
        {
            deleteJobfromList(id);
        }
        
    }
   
    function editRow(job)
    {       
        window.alert("Form is prepopulated with selected job details");
        editJobinList(job);       
    }
    return(
        <>
            <h4>List of Jobs</h4>    
         <table className='job-table'>
            <thead>
  <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
          
            {jobs.map((job)=>(
                <tbody>
  <tr key={job.id}>
                <td>
                    {job.title}
                </td>
                <td>
                   {job.company}  
                </td>
                <td data-status={job.status}>
                   {job.status}  
                </td>
                <td>
                    <div className='btn-container'>
<button  className='btn-edit' onClick={()=>editRow(job)} >Edit</button> 
                    </div >
                    <div className='btn-container'>
 <button className='btn-delete'onClick={()=>deleteRow(job.id)}>Delete</button>
                    </div>
                 
                
                  
                </td>
            </tr>
                </tbody>
              
            ))}
           
         </table>        
           
            
        </>
    )
}

export default JobList;