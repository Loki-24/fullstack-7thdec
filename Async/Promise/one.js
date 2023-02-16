let goToMovie = (success, failure) => {

    let amount = 1200

    amount > 500 ? success("Go to Movie @ P M") : failure("go to PSA , practice")


}

goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})
