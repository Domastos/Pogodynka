data class CityData(val name: String, val coords: String, val alt: String)

val gdansk = CityData( "Gdansk", "185,45,45", "pomorskie")
val szczecin = CityData("Szczecin", "68,95,51", "zachodniopomorskie")
val bialystok = CityData("Bialystok", "430,125,53", "podlaskie")
val olsztyn = CityData("Olsztyn", "315,72,48", "warminskie")
val zielonaGora = CityData("Zielona Gora","68,95,51", "lubuskie")
val torun = CityData("Bydgoszcz", "212,143,46", "kujawskie")
val warszawa = CityData("Warszawa", "340,199,63", "mazowieckie")
val poznan = CityData("Poznan", "143,201,56", "wielkopolskie")
val wroclaw = CityData("Wroclaw", "107,296,45", "dolnoslanskie")
val lodz = CityData("Lodz", "262,257,48", "lodzkie")
val kielce = CityData("Kielce", "323,325,32", "swietokrzyskie")
val lublin = CityData("Lublin", "436,283,54", "lubelskie")
val opole = CityData("Opole", "178,333,31", "opolskie")
val rzeszow = CityData("Rzeszow", "395,390,43", "podkarpatskie")
val katowice = CityData("Katowice", "232,359,34", "slanskie")
val krakow = CityData("Krakow", "298,400,42", "malopolskie")

val listOfCities = listOf(gdansk, szczecin, bialystok, olsztyn, zielonaGora, torun,
        warszawa, poznan, wroclaw, lodz, kielce, lublin, opole, rzeszow, katowice, krakow)

