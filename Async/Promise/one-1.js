let goToMovie = (success, failure) => {

    let amount = 200

    amount > 500 ? success("Go to Movie @ P M") : failure("go to PSA , practice")


}

goToMovie(() => { }, () => { })
