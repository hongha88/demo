import { transformArrayObjectToMap } from '@helpers/utils.helper';
import { ProficientType } from 'enums/master.enum';
import { Model } from 'mongoose';
import { GameConfigDocument, GameConfigKey } from 'schemas/gameConfig.schema';

export const initGameConfig = async (
  gameConfigModel: Model<GameConfigDocument>,
) => {
  const initValues: GameConfigKey = {
    damage: 100,
    defense: 100,
    speed: 4,
    jogSpeed: 5,
    sprintSpeed: 6,
    level: {
      1: { exp: 0, hpIncrease: 0 },
      2: { exp: 1000, hpIncrease: 100 },
      3: { exp: 2000, hpIncrease: 100 },
      4: { exp: 3000, hpIncrease: 100 },
      5: { exp: 4000, hpIncrease: 100 },
      6: { exp: 10000, hpIncrease: 500 },
    },
    proficient: {
      [ProficientType.S]: {
        proficientScore: 2000,
        proficientIncreaseWin: 20,
        proficientIncreaseLose: 10,
      },
      [ProficientType.A]: {
        proficientScore: 1500,
        proficientIncreaseWin: 15,
        proficientIncreaseLose: 10,
      },
      [ProficientType.B]: {
        proficientScore: 1000,
        proficientIncreaseWin: 10,
        proficientIncreaseLose: 5,
      },
      [ProficientType.C]: {
        proficientScore: 500,
        proficientIncreaseWin: 10,
        proficientIncreaseLose: 5,
      },
      [ProficientType.D]: {
        proficientScore: 0,
        proficientIncreaseWin: 10,
        proficientIncreaseLose: 1,
      },
    },
    staminaRecover: 2, // ...dv/sec
    staminaCost: 5, // ...dv/sec
    stamina: 100,
    hp: 10000,
    mana: 100,
    recoverMana: 5, // ...dv/sec
    specialEnergy: 3000,
    specialEnergyTakeDamage: 30, // %
    specialEnergyDealDamage: 30, // %
    timeSelectMaster: 30,
    timeSelectOutfitAndEmote: 20,
    timePauseGame: 60, //seconds
  };
  const configSaved = await gameConfigModel.find().lean();
  const configSavedMap = transformArrayObjectToMap(
    configSaved,
    'key',
    true,
    true,
  );

  const insertConfig = Object.keys(initValues)
    .filter((key) => !configSavedMap[key])
    .map((key) => new gameConfigModel({ key, value: initValues[key] }));
  const removeConfig = configSaved.filter(
    (item) => initValues[item.key] === undefined,
  );

  const bulkWrite = [];
  if (insertConfig.length) {
    bulkWrite.push(
      ...insertConfig.map((item) => ({
        insertOne: {
          document: item,
        },
      })),
    );
  }

  if (removeConfig.length) {
    bulkWrite.push({
      deleteMany: {
        filter: { key: { $in: removeConfig.map((item) => item.key) } },
      },
    });
  }

  bulkWrite.length && (await gameConfigModel.bulkWrite(bulkWrite));
};
