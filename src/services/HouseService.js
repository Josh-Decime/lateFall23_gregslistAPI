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
    // async getOneHouse(houseId){
    //     const house = 
    // }


}

export const houseService = new HouseService