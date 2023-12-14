function createMaterial(name, unit, costPerUnit) {
  var material = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit,
  }
  return material
}

function calculateMaterialCost(material, amount) {
  if (material.name === 'fabric') {
    var fabricCost = material.costPerUnit * amount
    return `${amount} yards of fabric costs $${fabricCost}.`
  } else if (material.name === 'paint') {
    var paintCost = material.costPerUnit * amount
    return `${amount} pints of paint costs $${paintCost}.`
  }
}

function createSupplyCloset(supplyCloset) {
  var myCloset = {supplies:[]}
  if (!supplyCloset) {
    return myCloset
      } else {
        for (var i = 0; i < supplyCloset.length; i++) {
        myCloset.supplies.push(supplyCloset[i].name)
       }
        return myCloset 
  }
}

function addSupply(myCloset, material) {
  if (!myCloset.supplies.includes(material.name)) {
   myCloset.supplies.push(material.name) 
     return myCloset.supplies 
    } else 
  return 'You already have fabric in your closet!'
}

function createNewProject(materials, status) {
  var newProject = {
    materialsNeeded: materials,
    status: status || 'not started'
  }
  return newProject
}

function compareMaterials(neededSupplies, mySupplies) {
  var totalSupplies = []

  for (var i = 0; i < neededSupplies.materialsNeeded.length; i++) {
    var mustHave = neededSupplies.materialsNeeded[i].name
      totalSupplies.push(mustHave)
        } if (mySupplies.supplies.includes(...totalSupplies)) {
          console.log('mySupplies.supplies: ', mySupplies.supplies)
          console.log('...totalSupplies', ...totalSupplies)
            return 'Yay! You can start this project!'
        } else return 'Oh no! You need to go shopping before you can start this project!'
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}