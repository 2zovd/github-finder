class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // display profile and UI
  getProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View ${user.login} profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-2">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-2">Following: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest repos</h3>
      <div id="repos"></div>
    `;
  }

  getRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    })

    document.getElementById('#repos').innerHTML = output;
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // parent container
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // create div container
    const div = document.createElement('div');
    // add class
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // insert container to UI
    container.insertBefore(div, search);

    // timeout function
    setTimeout(() => {
      this.clearAlert();
    }, 1000)
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}