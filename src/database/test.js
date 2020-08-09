const Database = require('./db')
const createProffy = require('./createProffy')


Database.then((db) => {
    // Inserir dados

    proffy = {
        name: "Diego Fernandes", 
        avatar: "https://github.com/diego3g.png", 
        whatsapp: "99997878", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: "Química", 
        cost: "20", 
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo bando de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // CreateProffy(db, {proffyValue, classValue, classSchedule})

    // Consultar os dados inseridos
})