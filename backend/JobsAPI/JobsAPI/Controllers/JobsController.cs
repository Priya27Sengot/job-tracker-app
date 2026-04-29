using Microsoft.AspNetCore.Mvc;
using JobTrackerAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JobTrackerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private static List<Jobs> jobs = new List<Jobs>();

        [HttpGet]
        public IActionResult GetJobs()
        {
            return Ok(jobs);
        }

        [HttpPost]
        public IActionResult Addjob(Jobs job)
        {
            job.Id = jobs.Count + 1;
            jobs.Add(job);
            return Ok(job);
        }

        [HttpDelete("{id}")]
        public IActionResult Deletejob(int id) {
            Jobs job= jobs.FirstOrDefault(j=>j.Id == id);

            if (job == null)
                return NotFound();

            jobs.Remove(job);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateJob(int id, UpdateJob job)
        {
            Jobs oldJob= jobs.FirstOrDefault((j)=>j.Id == id);
            if (oldJob == null)
                return NotFound();
            if(string.IsNullOrWhiteSpace(job.Title) || string.IsNullOrWhiteSpace(job.Company))
            {
                return BadRequest("Title and Company required");
            }
            oldJob.Title = job.Title;
            oldJob.Company= job.Company;
            oldJob.Status = job.Status;
            return NoContent();

        }

    }
}
