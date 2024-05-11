import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const CLIENT_ID = "317e3ce2c51345cfa4cd5d074df73187";
const CLIENT_SECRET = "5841161ac7624bfd941eaed5be9ed748";
const artistID = ["4k1ELeJKT1ISyDv8JivPpB", "1GhPHrq36VKCY3ucVaZCfo"];
// const artistID = "2C5ZMi6drXQAbj9LNhzZo0";
// const artistID = "1GhPHrq36VKCY3ucVaZCfo";

function useToken() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      headers: {
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    };

    axios(authOptions)
      .then((response) => {
        const token = response.data.access_token;
        setToken(token);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { token, error };
}

export interface AlbumType {
  images: Array<{ url: string }>;
  name: string;
  artists: Array<{ name: string }>;
  external_urls: { spotify: string };
}

interface UseAlbumsResult {
  albums: AlbumType[];
  isLoading: boolean;
  error: string | null;
}

export function useAlbums(): UseAlbumsResult {
  const [albums, setAlbums] = useState<AlbumType[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { token, error: tokenError } = useToken();

  useEffect(() => {
    if (!token) return;

    const fetchAlbums = async () => {
      try {
        const albums = [];
        for (const id of artistID) {
          const response: AxiosResponse<{ items: AlbumType[] }> = await axios({
            url: `https://api.spotify.com/v1/artists/${id}/albums`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          albums.push(...response.data.items);
        }
        setAlbums(albums);
      } catch (err) {
        setError("An error occurred while fetching albums. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();
  }, [token]);

  if (tokenError) {
    setError("An error occurred while retrieving token. Please try again.");
  }

  return { albums, isLoading, error };
}
