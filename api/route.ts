import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { query, variables } = req.body;

  const graphqlResponse = await fetch('http://test2024.peddlesoftdev.xyz/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Include any other headers required by the external GraphQL API
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await graphqlResponse.json();

  // Respond to the client with the data from the external GraphQL API
  res.status(200).json(data);
}



