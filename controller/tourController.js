const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`))
exports.getAllTour = (req, res) => {
    res.status(200).json({
        status: "success",
        result: tours.length,
        data: {
            tours
        }
    })
}

exports.getSingleTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
}

exports.newTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)
    console.log(tours)
    fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            response: "success",
            tour: {
                newTour
            }
        })
    })
}

exports.updateTour = (req, res) => {
    res.status(200).json({
        response: "success",
        data: "keep patching"
    })
}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        response: "success",
        data: null
    })
}