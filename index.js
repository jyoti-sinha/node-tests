const express = require('express')
const app = express()
const formidable = require('formidable')
const util = require('util')
const emailer = require('nodemailer')
const customCli = require('./custom-cli.js')


customCli();
app.get('/', (req, res) => {     
    res.send({name: 'jyoti'});
})

app.listen('2400', () => {
    //log('Node Server is listening.', 'success')    
})

// const mailSender = 'saswati.chakraborty1983@gmail.com'
// const transporter = emailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: mailSender,
//         pass: '#Nilanjan_1983'
//     }
// })
// const emailerOption = {
//     from: mailSender,
//     to: 'jyoti40sinha@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// }
// transporter.sendMail(emailerOption, (err, info) => {
//     if(err) throw err
 
//     console.log(info)
// })



// app.get('/', (req, res) => {
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.end(
//         '<form action="/upload" enctype="multipart/form-data" method="post">'+
//         '<input type="text" name="title"><br>'+
//         '<input type="file" name="upload" multiple="multiple"><br>'+
//         '<input type="submit" value="Upload">'+
//         '</form>'
//     );
// })

// app.post('/upload', (req, res) => {
//     let form = new formidable.IncomingForm();
 
//     form.parse(req);

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/uploads/' + file.name;
//     });

//     form.on('file', function (name, file){
//         res.end('Uploaded ' + file.name)
//     });

//     form.on('error', function(err) {
//         console.log(err)
//     });
    
    
// })


