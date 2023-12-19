import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouses)
            .get('', this.getHouses)
            .get('/:houseId', this.getOneHouse)
            .get('/searchBedroom/:bedrooms', this.searchHouses)
            .delete('/:houseId', this.removeHouse)
            .put('/:houseId', this.updateHouse)
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

    async getOneHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getOneHouse(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
    async searchHouses(request, response, next) {
        try {
            const searchBedroom = request.params.bedrooms
            const houses = await houseService.searchHouses(searchBedroom)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async removeHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const message = await houseService.removeHouse(houseId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
    async updateHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const updateData = request.body
            const house = await houseService.updateHouse(houseId, updateData)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }






}