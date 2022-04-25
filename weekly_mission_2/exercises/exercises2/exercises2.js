const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
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

explorers.forEach(explorer => console.log(explorer.name));

explorers.forEach(explorer => console.log(`El stack de ${explorer.name} es ${explorer.stack}`));

const newList = explorers.map(explorer => explorer.stack);
console.log(`La nueva lista es ${newList}`);

const listExplorerJS = explorers.filter((explorer) =>
    explorer.stack.includes('js')
);
console.log('La nueva lista de explorer es', listExplorerJS);

const primerExplorer = explorers.find((explorer) => explorer.city === 'CDMX');
console.log("El primer explorer es", primerExplorer);

const suma = explorers.reduce((acc, element) => acc + element.exercises_completed, 0);
console.log("La suma de exercises_completed es:", suma);

const validacion = explorers.some((explorer) => explorer.missions.frontend.isFinished === true);
console.log("la validación es", validacion);

const validacionEvery = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log("La validación con every es", validacionEvery);