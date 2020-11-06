if (process.env.NODE_ENV !== 'PROD') {
  require('dotenv').config()
}
const atob = require('atob');

console.log(`Stage is ${process.env.NODE_ENV}`)

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
const services = require('./backend/services');

const { users, projects, communities } = require('./backend/db');

app.use(express.static(__dirname + '/public'));
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/project/:id', (req, res) => {
  let authData = { state: false }
  if (req.user) {
    authData.state = true;
    authData.name = req.user.name;
  }
  res.render('1project.ejs', { authData, paymentLink: services.liqpay(), project: projects[5] })
})

app.get('/about', (req, res) => {
  let authData = { state: false }
  if (req.user) {
    authData.state = true;
    authData.name = req.user.name;
  }
  res.render('about.ejs', { authData })
})

app.get('/fond', (req, res) => {
  let authData = { state: false }
  if (req.user) {
    authData.state = true;
    authData.name = req.user.name;
  }
  res.render('fond.ejs', { authData, projects, communities, paymentLink: services.liqpay() })
})

app.get('/post', (req, res) => {
  let authData = { state: false }
  if (req.user) {
    authData.state = true;
    authData.name = req.user.name;
  }
  res.render('post.ejs', { authData })
})

app.get('/main', (req, res) => {
  let authData = { state: false }
  if (req.user) {
    authData.state = true;
    authData.name = req.user.name;
  }
  res.render('main.ejs', { authData })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    services.sendMail.sendRegisterMail(req.body.email);
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userId = Date.now().toString();
    users.push({
      id: userId,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/main')
  } catch {
    res.redirect('/register')
  }
})


app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

app.post('/sendMail', (req, res) => {
  services.sendMail.sendMailToMonAmour(req.body);
  res.redirect('/main')
})

app.post('/liqpay', (req, res) => {
  const DATA = JSON.parse(atob(req.body.data));
  // console.log(JSON.stringify(DATA, null, 2));
  projects[5].recaivedAmount += DATA.amount;
  projects[5].backerCount++;
  res.send(200)
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(process.env.PORT)