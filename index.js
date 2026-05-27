require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const github_data = {
  "login": "dotSHUBHAM101",
  "id": 262222744,
  "node_id": "U_kgDOD6EzmA",
  "avatar_url": "https://avatars.githubusercontent.com/u/262222744?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dotSHUBHAM101",
  "html_url": "https://github.com/dotSHUBHAM101",
  "followers_url": "https://api.github.com/users/dotSHUBHAM101/followers",
  "following_url": "https://api.github.com/users/dotSHUBHAM101/following{/other_user}",
  "gists_url": "https://api.github.com/users/dotSHUBHAM101/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dotSHUBHAM101/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dotSHUBHAM101/subscriptions",
  "organizations_url": "https://api.github.com/users/dotSHUBHAM101/orgs",
  "repos_url": "https://api.github.com/users/dotSHUBHAM101/repos",
  "events_url": "https://api.github.com/users/dotSHUBHAM101/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dotSHUBHAM101/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SHUBHAM MISHRA",
  "company": null,
  "blog": "",
  "location": "Raipur India",
  "email": null,
  "hireable": null,
  "bio": "Computer Science student with a strong interest in web development and solving problems in leetcode and codechefs coding platform",
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2026-02-17T22:18:18Z",
  "updated_at": "2026-05-21T10:13:01Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/linkedin', (req, res) => {
  res.send(`Shubham doesnt has linkedin`)
})

app.get('/login', (req, res) => {
  res.send('<h1> Login bro </h1>')
})

app.get('/signup', (req, res) => {
  res.send('<input type = "text" placeholder = "enter name"/>');
})


app.get('/github', (req, res) => {
  res.json(github_data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
