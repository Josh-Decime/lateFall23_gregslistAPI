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
    async searchHouses(searchBedroom) {
        const houses = await dbContext.House.find({ bedrooms: searchBedroom })
        return houses
    }
    async removeHouse(houseId) {
        const houseToRemove = await dbContext.House.findById(houseId)
        if (!houseToRemove) {
            throw new Error(`No house found at id: ${houseId}`)
        }
        await houseToRemove.remove()
        return `The ${houseToRemove.price} house built in ${houseToRemove.year} was removed`
    }


}

export const houseService = new HouseService