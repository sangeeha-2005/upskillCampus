// Temporary storage
let dummyData = [];

const getData = (req, res) => {
    res.json(dummyData);
};

const postData = (req, res) => {
    const newData = req.body;
    dummyData.push(newData);
    res.json({ message: 'Data added successfully!', data: newData });
};

module.exports = { getData, postData };
