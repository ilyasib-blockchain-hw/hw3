'use strict'
 
const { ethers } = require("ethers")
const rateAbi = require("../abi/rate.json")
const config = require("../config/configuration.json")

const main = async () => {
  const provider = new ethers.providers.AlchemyWebSocketProvider("homestead", config.alchemyApiKey)

  config.oracles.forEach(({ name, adderss, precision }) => {
    const contract = new ethers.Contract(adderss, rateAbi, provider)

    contract.on("AnswerUpdated", (current, roundId, updatedAt, _) => {
      const formattedCurrent = ethers.utils.formatUnits(current, precision)
      const formattedUpdatedAt = new Date(updatedAt * 1000)

      console.log(`[${name}] At ${formattedUpdatedAt} exchange rate was ${formattedCurrent} in round #${roundId}`)
    })

    console.log(`Subscribed on events "AnswerUpdated" in contract name = ${name}, address = ${adderss}`)
  })
}

main()