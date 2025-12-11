/* Returns a random DNA base */
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

/* Returns a random single stand of DNA containing 15 bases */
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const existingOrganismNums = new Set(); // Set to track existing specimen numbers for uniqueness

/* Factory function to create a pAequor organism object */

const pAequorFactory = (organismNum, dnaArr) => {
  if (existingOrganismNums.has(organismNum)) {
    return `This new Organism cannot be added with this specimenNum. Specimen Number ${organismNum} already exists.`;
  } else {
    existingOrganismNums.add(organismNum);
    return {
      specimenNum: organismNum,
      dna: dnaArr,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(newPAequor) {
        let commonBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === newPAequor.dna[i]) {
            commonBases++;
          }
        }
        const percentage = ((commonBases / this.dna.length) * 100); // toFixed moved into the log in order to return a number not a string 
        console.log(
          `Specimen #${this.specimenNum} and Specimen #${newPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`
        );
        return percentage;
      },
      willLikelySurvive() {
        let survivalBases = 0;
        for (let j = 0; j < this.dna.length; j++) {
          if (this.dna[j] === 'C' || this.dna[j] === 'G') {
            survivalBases++;
          }
        }
        const survivalRate = (survivalBases / this.dna.length) * 100;
        return survivalRate >= 60;
      },
      complementStrand() {
        const complementDna = this.dna.map(base => {
          switch (base) {
            case 'A':
              return 'T';
            case 'T':
              return 'A';
            case 'C':
              return 'G';
            case 'G':
              return 'C';
          }
        });
        return complementDna;
      }
    };
  }
};

// ------------------------------------------------------
//   Testing pAequorFactory, methods and destructuring
// ------------------------------------------------------

// const organism1 = pAequorFactory(1, mockUpStrand()); 
// const organism2 = pAequorFactory(2, mockUpStrand());
//const { specimenNum, dna } = organism1; // Testing destructuring to see only specimenNum and dna properties of organism objects
//console.log({ specimenNum, dna });


/* Create an array to hold 30 pAequor organisms that are likely to survive */
// Refactored into a function in order to avoid global Set error when re-running the code multiple times

const generateSurvivingPAequor = (count, startNum) => {
  const localSet = new Set();
  const survivingPAequor = [];
  let specimenCounter = startNum;
  while (survivingPAequor.length < count) {
    if (localSet.has(specimenCounter)) {
      specimenCounter++;
      continue;
    }
    const newOrganism = pAequorFactory(specimenCounter, mockUpStrand());
    if (typeof newOrganism !== "string" && newOrganism.willLikelySurvive()) {
      survivingPAequor.push(newOrganism);
      localSet.add(specimenCounter);
    }
    specimenCounter++;
  }
  const objPAequor = survivingPAequor.map((surv) => ({
    specimenNum: surv.specimenNum,
    dna: surv.dna,
  }));
  return { survivingPAequor, objPAequor };
};

// ------------------------------------------------------
//   Testing generateSurvivingPAequor and destructuring
// ------------------------------------------------------

//const { survivingPAequor, objPAequor } = generateSurvivingPAequor(30, 1); 

//HINT: Stored the returned object destructured to get both arrays and to use survivorPAequor array later because it needs full organism objects otherwise it will give error
// Log the array of objPAequor organisms with only specimenNum and dna

/* Find the two most related organisms in the survivingPAequor array */

const mostRelatedOrganisms = (organisms) => {
  let maxAffinity = 0; //This variable stores the highest percentage found so far. Every time you find a higher percentage, you update it.
  let mostRelated = null; //This stores the pair of organisms that have the highest similarity. At the beginning is null (no organisms found yet)
  for (let i = 0; i < organisms.length; i++) {
    for (let j = i + 1; j < organisms.length; j++) {
      const similarity = organisms[i].compareDNA(organisms[j]);
      if (similarity > maxAffinity) {
        maxAffinity = similarity;
        mostRelated = [organisms[i], organisms[j]];
      }
    }
  }
  return { mostRelated, maxAffinity };
};

// ------------------------------------------------------
//   Testing mostRelatedOrganisms and destructuring
// ------------------------------------------------------

//const { mostRelated, maxAffinity } = mostRelatedOrganisms(survivingPAequor); // Call the function with the survivingPAequor array destructured 

//console.log("\nMOST RELATED ORGANISMS:");
//console.log(`Specimen #${mostRelated[0].specimenNum} and Specimen #${mostRelated[1].specimenNum} are the most related with ${maxAffinity.toFixed(2)}% similarity.`);


