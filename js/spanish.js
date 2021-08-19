async function fetchData() {
  try {
    const fetchSpanish = await fetch(
      "https://restcountries.eu/rest/v2/lang/es"
    );
    const spanish = await fetchSpanish.json();
    const filter = await spanish.filter((x) => x.region == "Europe");
    console.log(filter);
  } catch {
    console.log("Page Not Found");
  }
}
fetchData();
