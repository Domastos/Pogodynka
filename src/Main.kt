import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.math.round

fun main(args: Array<String>) {
    createUserInput()
}


fun createUserInput() {
    val root = document.getElementById("weatherContainer")
    root?.appendChild(createMapOfPolandDiv())
}

fun createMapOfPolandDiv(): HTMLDivElement{
    return document.create.div (classes = "map") {
        h1 (classes = "map_header"){
            +"Mapa Polski" }
        img(classes = "svg_map"){
            src = "images/POL_location_map.svg"
            alt="Map of poland"
            usemap = "#poland"
            width="500"
            height="450"
        }
        map(name = "poland"){
            for (city in listOfCities){
                area(shape = AreaShape.circle, classes = "wojewodstwo") {
                    coords = city.coords
                    alt=city.alt
                    title=city.alt
                    target="_self"
                    accessKey="h"
                    onClickFunction = {
                        val xhttp: dynamic = XMLHttpRequest();
                        xhttp.open("GET", "${BASE_URL}city=${city.name}$BASE_URL_SUFFIX&key=$APP_ID", false)
                        xhttp.send()
                        val forecastResult = JSON.parse<WeatherData>(xhttp.responseText)
                        printData(forecastResult)
                    }
                }
            }
        }
    }
}


fun printData(weatherData: WeatherData){
    val root = document.getElementById("forecastContainer")
    root?.appendChild(document.create.div(classes = "currentTemp"){
        h3{
            +"Prognoz pogody dla miasta ${weatherData.city_name} (Polska)"
        }
    })
    printForecast(weatherData)
}

fun printForecast(weatherData: WeatherData){
    val forecastContainer = document.create.div()
    weatherData.data.forEachIndexed { _, forecast ->
        with(forecast)
        {
            forecastContainer.appendChild(document.create.div (classes = "weatherBlock"){
                div(classes = "dateTempBlock") {
                    p(classes = "headerLightText") {
                        +"Data: $valid_date"
                    }
                    p(classes = "primaryText") {
                        +"Temperatura: ${round(temp*0.1)} °C"
                    }
                }
                    img{
                        src = "https://www.weatherbit.io/static/img/icons/${weather.icon}.png"
                        height="90"
                        width="90"
                    }
                    p(classes = "currentDescription"){
                        +weather.description
                    }
                div {
                    p(classes = "currentTemp") {
                        span(classes = "tipText") { +"max " }
                        span(classes = "secondaryText") { +"${round(max_temp * 0.1)} °C" }
                        span(classes = "secondaryText") { +" /${round(min_temp * 0.1)} °C" }
                        span(classes = "tipText") { +" min" }
                    }
                }
                onClickFunction = {
                    printDetailedForecast(forecast)
                }
            })
        }
    }
    document.getElementById("forecastContainer")?.appendChild(forecastContainer)
}

fun printDetailedForecast(data: Data){
    val root = document.getElementById("forecastContainer")
    val weatherDetailDiv = document.create.div(classes = "detailedForecast")
    val basicDetailDiv = document.create.div {
        p(classes = "secondaryText") {
            +"Kierunel wiatru${data.wind_cdir_full}"
        }
        p(classes = "secondaryText") {
            +"Kierunek wiatru ${data.wind_dir}°"
        }
        p(classes = "secondaryText") {
            +"Prędkość wiatru ${data.wind_spd} km/h"
        }
    }
    val otherDetailsDiv = document.create.div {
        div{
            p(classes = "secondaryText") {+"Ciśnienie: ${data.pres} mb"}
            p(classes = "secondaryText") {+"Punkt rosy ${round(data.dewpt*0.1)}°C"}
            p(classes = "secondaryText") {+"Zachmurzenie ${data.clouds}%"}
        }
    }
    weatherDetailDiv.appendChild(basicDetailDiv)
    weatherDetailDiv.appendChild(otherDetailsDiv)
    root?.appendChild(weatherDetailDiv)
}
