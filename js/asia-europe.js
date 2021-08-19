async function fetchData() {
  try {
    const fetchAsia = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    );
    const asia = await fetchAsia.json();

    const fetchEurope = await fetch(
      "https://restcountries.eu/rest/v2/region/europe"
    );
    const europe = await fetchEurope.json();

    console.log([asia, europe].flat());
  } catch {
    console.log("Page Not Found");
  }
}
fetchData();
