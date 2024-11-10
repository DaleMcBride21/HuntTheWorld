export function countriesTempelate(country)
{
    return `<section class="country-card">
        <h2>${country.name.common}</h2>
        <img src="../images/flags/4x3/${country.altSpellings[0]}.svg">
        <h3>Region:</h3>
        <p>${country.region}</p>
    </section>`
}