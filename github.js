/**
 * GitHub Finder app
 * Application for searching GitHub users
 * 
 * @version 1.0.0
 * @author Dmitriy Tuzov
 * @license MIT
 * 
 */

class GitHub {
  constructor() {
    this.client_id = '926522178a53bc24721b';
    this.client_secret = '5291bbf0539a0addb44364746c4d69ea265b75a4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile, // profile: profile
      repos
    };
  }
}