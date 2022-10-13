const axios = require("axios")

;(async () => {
  const result = await axios.get(
    `https://www.drawmade.com/rest/v1/product/product-a-family-of-superheroes-custom-family-frame-black-cid175-drh0489`
  )
  console.log(result)
})()
