namespace JobTrackerAPI.Models
{
    public class Jobs
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Company { get; set; }
        public string Status { get; set; }

    }
    public class UpdateJob
    {
        public string Title { get; set; }
        public string Company { get; set; }
        public string Status { get; set; }


    }
}
