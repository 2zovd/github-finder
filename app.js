// Init github
const github = new GitHub();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    // http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // show profile
          ui.getProfile(data.profile);
          // show repos
          ui.getRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})