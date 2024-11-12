const apiKey = '644911e8072a4cabb1d13714241211'; // 여기에 WeatherAPI 키를 입력하세요.

// 엔터 키를 눌렀을 때 날씨 정보를 가져오는 기능 추가
document.getElementById('city').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const city = this.value;
        if (city) {
            getWeather(city);
        } else {
            alert('도시를 입력하세요.');
        }
    }
});

function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ko`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('날씨 정보를 가져오는 데 실패했습니다.');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerText = error.message;
        });
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.location.name}, ${data.location.region}의 날씨</h2>
        <p>현재 온도: ${data.current.temp_c}°C</p>
        <p>상태: ${data.current.condition.text}</p>
        <p>습도: ${data.current.humidity}%</p>
        <p>바람 속도: ${data.current.wind_kph} km/h</p>
        <p>기압: ${data.current.pressure_mb} hPa</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}