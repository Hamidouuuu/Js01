var jour = prompt("Entrer un jour: ");
    var weekends = 'samedi'|| 'dimanche';
    if (jour == weekends) {
        console.log('weekend');
    } else {
        console.log('weekday');
    }