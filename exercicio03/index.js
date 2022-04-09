const axios = require('axios');

axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
    .then(response => console.log(response.data));