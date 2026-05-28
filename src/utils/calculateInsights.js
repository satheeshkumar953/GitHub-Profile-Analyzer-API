const calculateInsights = (user, repos) => {

  let totalStars = 0;

  const languages = {};

  repos.forEach((repo) => {

    totalStars += repo.stargazers_count;

    if (repo.language) {

      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }
  });

  let topLanguage = "N/A";

  if (Object.keys(languages).length > 0) {

    topLanguage = Object.keys(languages).reduce((a, b) =>
      languages[a] > languages[b] ? a : b
    );
  }

  return {
    githubId: user.id,
    username: user.login,
    name: user.name,
    bio: user.bio,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    totalStars,
    topLanguage,
    profileUrl: user.html_url,
    avatarUrl: user.avatar_url,
    accountCreatedAt: user.created_at,
  };
};

module.exports = calculateInsights;