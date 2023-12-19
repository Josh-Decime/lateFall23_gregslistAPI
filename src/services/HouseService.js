import { dbContext } from "../db/DbContext.js";



class HouseService {
    async createHouses(houseData) {
        const house = await dbContext.House.create(houseData)
        return house
    }
    async getHouses() {
        const houses = await dbContext.House.find()
        return houses
    }
    async getOneHouse(houseId) {
        const house = await dbContext.House.findById(houseId)
        if (!house) {
            throw new Error(`there is no house at this id: ${houseId}`)
        }
        return house
    }


}

export const houseService = new HouseService