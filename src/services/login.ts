import axios from "axios";

export const fetchGravatar = (username: string) => {
  return `https://api.github.com/search/users?q=${username}`;
};

export const fetchGitHub = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: { q: username },
    });
    return response.data.items[0] || null;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
};
