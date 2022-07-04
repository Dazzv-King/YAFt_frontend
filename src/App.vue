<template>
  <meta name = "viewport" content="width=device-width">
  <div class = 'container_main_page container'>
    <div class = 'burger'>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <h1>YAFT</h1>
    <h2>your travel advisor</h2>
    <span id = 'yaft_bottom_span'></span>
    
    <input 
      type = "text"
      v-model="inputCity"
      placeholder = 'Куда отправляемся?'
      class = 'choice_city_form'
      @keypress.enter="apiChooseCity()"
    >
    
    <h3>Дата отправления</h3>
    <span class = 'date_number'><p>04</p></span>
    <span class = 'date_month'><p>Август</p></span>
    
    <div class = 'range_day'> 
      <h3>Период поездки</h3>
      <input type = "range" min="1" max="7" step="1" value="3"> 
      <h3>7 дней</h3>
    </div>
  </div>
  <section>
    <div class = 'result_page container'>
      <h1>Прогноз погоды на период поездки</h1>
      <div class = 'weat_fsts'>
        <div
          class = 'weat_fst'
          >
          <p>чт</p>
          <img src = './assets/clothes.png'>
          <p>8 и 3</p>
        </div>
      </div>

      <h1>Какую одежду лучше взять с собой?</h1>
      <div class = 'nec_clothes'>
        <div class = 'top_and_bottom_nec_clothes'>
          <p>Верх/низ</p>
          <div class = 'top_and_bottom'>
            <div class = 'top_and_bottom_nec_cloth'>
              <img src = './assets/Cloth.png'>
              <p>Name</p>
              <span class = 'chk_mark'></span>
            </div>
          </div>
        </div>
        <div class = 'shoes_nec_clothes'>
          <p>Обувь</p>
          <div class = 'shoes'>
            <div class = 'shoes_nec_cloth'>
              <img src = './assets/Cloth.png'>
              <p>Name</p>
              <span class = 'chk_mark'></span>
          </div>
          </div>
        </div>
        <div class = 'accessories_nec_clothes'>
          <p>Аксессуары</p>
          <div class = 'accessories'>
            <div class = 'accessories_nec_cloth'>
              <img src = './assets/Cloth.png'>
              <p>Name</p>
              <span class = 'chk_mark'></span>
            </div>
          </div>
          
        </div>
      </div>
      
      <h2>А вы точно ничего не забыли?</h2>
      <h3>Список необходимых вещей для поездки</h3>
      <div class = 'nec_things'>
        <div class = 'nec_thing'>
          <img src = './assets/pass.png'>
          <p>Заграничный<br>паспорт</p>
          <span class = 'chk_mark'></span>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  data() {
    return {
      inputCity : '',
      dataCity : [],
      weatherData: [],
      days: [],
      max_Temp: [],
      min_Temp: [],
      weather: [], //cloudy

    }
  },
  methods: {
    apiChooseCity() {
      let dataFromGetWeather = {
        "id_route": 0,
        "id_client": 0,
        "city": this.inputCity,
        "date": "05-01-2022",
        "period": 5,
        "now_date": "01-01-2022"
      };
      fetch('http://localhost:8081/api/getWeather',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataFromGetWeather)
      })
      .then((response)=>{
                return response.json()
            })
      .then((data)=>{
              this.dataCity = JSON.stringify(data);
      })
    },
    weatherDataOnly() {
      
    },

  }
}
</script>

<style>
  @import "./assets/style.css";
</style>
