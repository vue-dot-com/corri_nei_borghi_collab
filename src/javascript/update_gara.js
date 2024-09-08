const fs = require("fs");
const path = "./repo-B/constants.js"; // Path to constants.js in Repo B

// Function to update constants.js with new race info
function updateRaceInfo(inputs) {
  // Read the existing constants.js file
  let fileContent = fs.readFileSync(path, "utf8");

  // Race info to be added
  const newRaceInfo = `
  {
    location: "${inputs.location}",
    name: "${inputs.name}",
    date: "${inputs.date}",
    logo: "${inputs.logo}",
    description: "${inputs.description}",
    imgCopertina: "${inputs.imgCopertina}",
    programma: {
      partenzaBaby: "${inputs.partenzaBaby}",
      partenzaNonCompetitiva: "${inputs.partenzaNonCompetitiva}",
      partenzaCompetitiva: { m: "${inputs.partenzaCompetitivaM}", f: "${inputs.partenzaCompetitivaF}" },
      ritrovo: "${inputs.ritrovo}",
      parcheggi: "${inputs.parcheggi}",
      docce: "${inputs.docce}",
      ristoro: "${inputs.ristoro}",
      altro: "${inputs.altro}"
    },
    percorso: {
      baby: { km: "${inputs.babyKm}", dislivello: "${inputs.babyDislivello}", img: "${inputs.babyImg}", gpx: "${inputs.babyGpx}" },
      nonCompetitiva: { km: "${inputs.ncKm}", dislivello: "${inputs.ncDislivello}", img: "${inputs.ncImg}", gpx: "${inputs.ncGpx}" },
      competitiva: {
        m: { km: "${inputs.compKmM}", dislivello: "${inputs.compDislivelloM}", img: "${inputs.compImg}" },
        f: { km: "${inputs.compKmF}", dislivello: "${inputs.compDislivelloF}", img: "${inputs.compImg}" }
      }
    }
  }`;

  // Add the new race info to the file
  fileContent = fileContent.replace(
    "const tappe = [",
    `const tappe = [${newRaceInfo},`
  );

  // Save the updated constants.js file
  fs.writeFileSync(path, fileContent, "utf8");
}

// Call the function with the inputs (these would come from GitHub Actions)
updateRaceInfo({
  location: process.env.INPUT_LOCATION,
  name: process.env.INPUT_NAME,
  date: process.env.INPUT_DATE,
  logo: process.env.INPUT_LOGO,
  description: process.env.INPUT_DESCRIPTION,
  imgCopertina: process.env.INPUT_IMGCOPERTINA,
  partenzaBaby: process.env.INPUT_PARTENZABABY,
  partenzaNonCompetitiva: process.env.INPUT_PARTENZANONCOMPETITIVA,
  partenzaCompetitivaM: process.env.INPUT_PARTENZACOMPETITIVAM,
  partenzaCompetitivaF: process.env.INPUT_PARTENZACOMPETITIVAF,
  ritrovo: process.env.INPUT_RITROVO,
  parcheggi: process.env.INPUT_PARCHEGGI,
  docce: process.env.INPUT_DOCCE,
  ristoro: process.env.INPUT_RISTORO,
  altro: process.env.INPUT_ALTRO,
  babyKm: process.env.INPUT_BABYKM,
  babyDislivello: process.env.INPUT_BABYDISLIVELLO,
  babyImg: process.env.INPUT_BABYIMG,
  babyGpx: process.env.INPUT_BABYGPX,
  ncKm: process.env.INPUT_NCKM,
  ncDislivello: process.env.INPUT_NCDISLIVELLO,
  ncImg: process.env.INPUT_NCIMG,
  ncGpx: process.env.INPUT_NCGPX,
  compKmM: process.env.INPUT_COMPKMM,
  compDislivelloM: process.env.INPUT_COMPDISLIVELLOM,
  compImg: process.env.INPUT_COMPIMG,
  compKmF: process.env.INPUT_COMPKMF,
  compDislivelloF: process.env.INPUT_COMPDISLIVELLOF,
});
