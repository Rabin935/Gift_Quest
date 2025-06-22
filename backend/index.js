const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/gifts', (req, res) => {
    res.json({ message: 'Gift selector api works!'})

});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));