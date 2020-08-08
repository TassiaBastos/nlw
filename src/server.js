const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://github.com/diego3g.png", 
        whatsapp: "99997878", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_form: [720], 
        time_to: [1120]
    },
    {
        name: "Maria Rita", 
        avatar: "https://github.com/diego3g.png", 
        whatsapp: "99997878", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject: "Matemática", 
        cost: "20", 
        weekday: [1], 
        time_form: [720], 
        time_to: [1120]
    },
    {
        name: "Tássia Barros", 
        avatar: "https://avatars3.githubusercontent.com/u/14933152?s=460&u=59e1a10c335742b74a5d48dba374917f7bd9b833&v=4", 
        whatsapp: "9999787", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject: "Biologia", 
        cost: "20", 
        weekday: [1], 
        time_form: [720], 
        time_to: [1120]
    }
]

function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy(req, res){
    return res.render("study.html", { proffys })
}
function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)