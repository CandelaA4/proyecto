class Api {
  getProducts = async () => {
    return await fetch("https://candelaa4.github.io/proyecto/assets/data.json", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
  };
}
