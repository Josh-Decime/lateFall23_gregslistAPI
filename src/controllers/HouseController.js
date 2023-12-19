import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouses)
            .get('', this.getHouses)
    }

    async createHouses(request, response, next) {
        try {
            const houseData = request.body
            const house = await houseService.createHouses(houseData)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

    async getHouses(request, response, next) {
        try {
            const houses = await houseService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }






}