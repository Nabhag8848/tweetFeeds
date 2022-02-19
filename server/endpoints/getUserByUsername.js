const needle = require('needle')
require('dotenv').config()

const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

const getUserByUsername = async (users) => {
  const params = {
    "usernames": users,
    "user.fields": "created_at,description",
    "expansions": "pinned_tweet_id"
  }

  const res = await needle('get', endpointURL, params, {
    headers: {
      "User-Agent": "v2UserLookupJS",
      "authorization": `Bearer ${token}`
    }
  })

  if (res.body) {
    return res.body;
  } else {
    throw new Error('Unsuccessful request')
  }
}


module.exports = getUserByUsername
