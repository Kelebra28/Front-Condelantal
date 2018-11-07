

// {"start_date":"2018-01-01","due_date":"2018-01-04","num_guest":2}

export const  addDates = dates => ({
    type:"ADD_DATE",
    dates
})


//{"price":1500}

export const addPrice = price => ({
    type:"ADD_PRICE",
    price
})

//{"paypal_cofirmation":"asdfclalsdñfkñ"}
export const addPaypal =  paypal  => ({
    type:"ADD_PAYPAL",
    paypal
})