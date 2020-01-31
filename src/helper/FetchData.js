export const FetchData = async (url = null, error = "No Response Received") => {
  if (null === url) throw new Error("Url is null");
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(error);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There has been a problem with your getPlanet operation:",
      error
    );
  }
};
