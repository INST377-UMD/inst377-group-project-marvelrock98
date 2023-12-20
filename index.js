const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://imtenbzrviqecypfummt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdGVuYnpydmlxZWN5cGZ1bW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NDEyNjksImV4cCI6MjAxODUxNzI2OX0.wLDuXBun9D1NOTtxPmwotedMfnCQzVHZBNTw0VVR8IY'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/home_page.html', { root: __dirname})
})

app.get('/cases', async (req, res) => {
    console.log('Getting Case')

    const {data, error} = await supabase
        .from('Law Firm Info')
        .select();

    if(error) {
        console.log(error)
    } else if(data){
        res.send(data)
    }
})

app.post('/case', async (req, res) => {
    console.log('Saving Entry')

    var name = req.body.name;
    var caseNumber = req.body.caseNumber;
    var state = req.body.state;
    var description = req.body.description;

    const {data, error} = await supabase    
        .from('Law Firm Info')
        .insert([
            {'Name': name, 'Case Number': caseNumber, 'State': state, 'Description': description}
        ])
        .select();

        console.log(data)
        console.log(error)
        res.header('Content-type', 'application/json')
        res.send(data)
})

/*
app.post('/case', async (req, res) => {
    console.log('Saving Entry');

    const { name, caseNumber, state } = req.body;

    // Validate and process the input
    if (name && caseNumber && state) {
        try {
            // Save the entry to Supabase
            const { data, error } = await supabase
                .from('Case')
                .upsert([{ name, caseNumber, state }], { onConflict: ['caseNumber'] });

            if (error) {
                throw error;
            }

            // Send a success response
            res.status(200).json({ message: 'Entry saved successfully' });
        } catch (error) {
            console.error('Error saving entry:', error);
            res.status(500).json({ message: 'Error saving entry' });
        }
    } else {
        // Send an error response if any field is empty
        res.status(400).json({ message: 'Please fill in all fields' });
    }
});
*/
app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE');
});