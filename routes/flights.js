import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

//GET /movies/:id
router.get('/:id', flightsCtrl.show)

//POST /flights
router.post('/', flightsCtrl.create)


export {
  router,
}
