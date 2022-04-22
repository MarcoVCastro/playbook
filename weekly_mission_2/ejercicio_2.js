const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack:
    [
      "js",
      "c#"
    ],
    missions:
    {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]

//USING FOREACH
console.log("The name of the explorers using FOREACH are: ")
explorers.forEach(names => console.log(names.name))


//USING FOREACH
console.log("The stack of the explorers using FOREACH are: ")
explorers.forEach(stack => console.log(stack.stack))

//USING MAP
const explorerStacks = explorers.map((explorerData) => explorerData.stack)
console.log("Los stacks de los explorers son: " + explorerStacks)


//USING FILTER INCLUDE
const explorersWithJs = explorers.filter((js)=> js.stack.includes("js")
)
console.log("Los explorers que usan JS son:")
console.log(explorersWithJs)

//USING FIND  
const resultados = explorers.find((city) => city.city === "CDMX");
console.log("The " + resultados.name + " is living in: " + resultados.city)

const exercisesCompleted = explorers.map((exercises) => exercises.exercises_completed);
console.log("The exercises completed by the explorers are :"+ exercisesCompleted)


//USING REDUCE
const result_of_reduce = exercisesCompleted.reduce((previous, current) => previous + current, 0)

console.log("The sum of all exercises completed by the explorers are: " + result_of_reduce)

//USING SOME
const areFinished = explorers.some((finish) =>  finish.missions.frontend.exercisesFinished === true)
console.log("Ejemplo 14: Some explorer have finished the exercises?: " + areFinished) //true

//USING EVERY
const AllFinished = explorers.every((all) => all === true) // every
console.log("Every explorer had finished the unboarding?: " + AllFinished)