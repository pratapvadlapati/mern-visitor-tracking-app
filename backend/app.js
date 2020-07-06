const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const Routes = require('./routes/routes');
const User    = require('./routes/user');
const Visitor = require('./routes/visitor');

const app = express();

const DBURL = 'mongodb://localhost:27017/visitortracking'
//DB Connection

mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>{ console.log('DB CONNECTED')}).catch(err => console.log(err))
mongoose.set('useFindAndModify', false);

const PORT = process.env.PORT || '4488';


app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());


//Routes
app.use('/api', Routes);
app.use('/api', User);
app.use('/api', Visitor);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})