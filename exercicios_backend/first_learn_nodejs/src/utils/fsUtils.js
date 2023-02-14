const fs = require('fs').promises;
const path = require('path');

const PATH_MISSION = '../../mission.json';

const readMission = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, PATH_MISSION));
    const mission = JSON.parse(data);
    return mission;
  } catch (error) {
    return `Erro ao ler arquivo ${error}`;
  }
};

const writeNewMission = async (newMission) => {
  try {
    const oldMission = await readMission();
    const allMissions = JSON.stringify([...oldMission, { ip: new Date(), ...newMission }]);
    console.log('arquivo incluído com sucesso!');
    await fs.writeFile(path.resolve(__dirname, PATH_MISSION), allMissions);
  } catch (error) {
    console.log(`Erro na escrita do arquivo ${error}`);
  }
};

module.exports = {
  readMission,
  writeNewMission,
};
