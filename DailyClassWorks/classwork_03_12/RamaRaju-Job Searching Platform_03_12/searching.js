let jobsData = []; 

const fetchJobData = async () => {
  try {
    const response = await axios.get('https://mocki.io/v1/710d227f-c9f4-4320-868d-9d36c4d65517');
    
    jobsData = response.data.map((job) => ({
      ...job,
      summary: `${job.title} at ${job.company}, located in ${job.location}`,
    }));

    renderJobs(jobsData); 
  } catch (error) {
    console.error("Error fetching job data:", error);
  }
};

const renderJobs = (jobs) => {
  const jobGrid = document.getElementById('jobGrid');
  const totalJobs = document.getElementById('totalJobs');
  jobGrid.innerHTML = '';

  jobs.map((job) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${job.image}" alt="${job.title}">
      <div class="card-content">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Email:</strong> ${job.email}</p>
        <p><strong>Salary:</strong> ${job.salary || "N/A"}</p>
        <p><strong>Internship:</strong> ${job.internship ? "Yes" : "No"}</p>
        <p><strong>Stipend:</strong> ${job.stipend || "N/A"}</p>
        <p><strong>Category:</strong> ${job.category}</p>
        <p>${job.description}</p>
        <p><em>${job.summary}</em></p>
      </div>
    `;
    jobGrid.appendChild(card);
  });

  const total = jobs.reduce((count) => count + 1, 0);
  totalJobs.textContent = total;
};


const filterJobs = () => {
  const roleInput = document.getElementById('roleInput').value.toLowerCase();
  const locationInput = document.getElementById('locationInput').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(roleInput) &&
      job.location.toLowerCase().includes(locationInput) && 
      (categoryFilter === '' || job.category === categoryFilter)
    );
  });

  renderJobs(filteredJobs);

  const categorySummary = filteredJobs.reduce((acc, job) => {
    acc[job.category] = (acc[job.category] || 0) + 1;
    return acc;
  }, {});
  console.log("Category Summary:", categorySummary);
};

document.getElementById('searchBtn').addEventListener('click', filterJobs);
document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('roleInput').value = '';
  document.getElementById('locationInput').value = '';
  document.getElementById('categoryFilter').value = '';
  renderJobs(jobsData); 
});

fetchJobData();
