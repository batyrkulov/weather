export const weatherAPI = {
  getWeather: async city => {
    const wetherDataResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lang=en&units=metric&APPID=d40a503250d24c66b99389f9d54b9381&q=${city}`)
    const wetherInJson = await wetherDataResponse.json()
    if (wetherInJson.cod=='200') {
      let lastSelectedDay =''
      let sortedWether = wetherInJson.list.filter(w=>{
        if (w.dt_txt.split(' ')[0] !== lastSelectedDay) {
          lastSelectedDay = w.dt_txt.split(' ')[0]
          return true
        } else
          return false
      })
      return sortedWether
    } else
      return false
  }
}
