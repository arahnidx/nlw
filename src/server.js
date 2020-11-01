const proffys = [
    {
        name: "Sidney Mizael", 
        avatar: "https://scontent.fssa14-1.fna.fbcdn.net/v/t1.0-9/82481186_2696092357141217_4647426996802945024_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=IQl6sNw0auIAX-ttuyH&_nc_ht=scontent.fssa14-1.fna&oh=a4ccc6acb88e26f9ff809cde03be7bb0&oe=5FBCE46A", 
        whatsapp: "71997039159", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20,00", 
        weekday: [
            0
        ], 
        time_from: [
            720
        ], 
        time_to: [
            1220
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {

    position = +subjectNumber-1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html" , {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }


    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.static("public")) //arquivos estaticos tipo imagens, scripts e etc
.get("/", pageLanding)  //rotas
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5000)