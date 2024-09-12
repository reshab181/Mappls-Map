// services/getToken.js
export const getToken = async () => {
  const url = "https://outpost.mappls.com/api/security/oauth/token";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    accept: "application/json",
  };

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id:
      "33OkryzDZsIToVCWlEo88chK_VJMYs8KFxhv8Q6uYCK28E6_SZBUIQTBcLkmMBTouBfPOUPCcwPTK29yPUpydA==",
    client_secret:
      "lrFxI-iSEg-ApqpBta09Zyp5FvbAoQeSYEsIN25xvMonxx-Dck80ZRbMZWIFdXQjfgM-DEyRwA_JiSP1V2hZtiZk8l90Budy",
  });

  try {
    console.log("Sending request to token API...");
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (data.access_token) {
      console.log("Access token retrieved:", data.access_token);
      return data.access_token;
    } else {
      console.log("Failed to retrieve access token");
      throw new Error("Failed to retrieve access token");
    }
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};
