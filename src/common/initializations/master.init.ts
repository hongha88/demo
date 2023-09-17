import { AccessoryType } from 'enums/accessory.enum';
import { EmoteType } from 'enums/emote.enum';
import { GenderType, MasterCode } from 'enums/master.enum';
import { PlatformType } from 'enums/platform.enum';
import { SkillType } from 'enums/skill.enum';
import { Model } from 'mongoose';
import { AccessoryDocument } from 'schemas/accessory.schema';
import { EmoteDocument } from 'schemas/emote.schema';
import { MasterDocument } from 'schemas/master.schema';
import { SkillDocument } from 'schemas/skill.schema';

export const initMaster = async (
  masterModel: Model<MasterDocument>,
  skillModel: Model<SkillDocument>,
  accessoryModel: Model<AccessoryDocument>,
  emoteModel: Model<EmoteDocument>,
) => {
  const existed = await masterModel.find();
  if (existed.length) {
    return;
  }

  const MAG_001 = await new masterModel({
    name: 'Sheikh',
    code: MasterCode.MAG_001,
    slogan: 'The power of the wind',
    description: 'The Desert Fury',
    age: 33,
    gender: GenderType.Male,
    identity: 'UAE',
    hates: 'Fight with women',
    likes: 'Eagles, Travel',
    weight: 176.37,
    height: 6.07,
    specialEnergy: 3000,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_002 = await new masterModel({
    name: 'Larissa',
    code: MasterCode.MAG_002,
    slogan: 'Agile and Skillful',
    description: 'Acrobatics and Wrestling',
    age: 30,
    gender: GenderType.Male,
    identity: 'BR',
    hates: 'Fight with women',
    likes: 'Dacing',
    weight: 312.1,
    height: 5.12,
    specialEnergy: 3000,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Nor_001 = await new skillModel({
    name: 'Low Slap',
    code: 'MAG_001_Cmd_Nor_001',
    description:
      'The character sits down and performs a low slash at the opponent s knee with the left hand',
    type: SkillType.NormalAttack,
    masterId: MAG_001._id,
    command: 'S + I (50% Trigger)',
    damage: 300,
    lostMana: 0,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Nor_002 = await new skillModel({
    name: 'Slap',
    code: 'MAG_001_Cmd_Nor_002',
    description:
      'The character slash at the opponent s knee with the left hand',
    type: SkillType.NormalAttack,
    masterId: MAG_001._id,
    command: 'I (50% Trigger)',
    damage: 300,
    lostMana: 0,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Combo_001 = await new skillModel({
    name: 'Sprint',
    code: 'MAG_001_Cmd_Combo_001',
    description: 'Punch forward 1 attack then jump up and rotate in the air',
    type: SkillType.ComboAttack,
    masterId: MAG_001._id,
    command: 'S + D + I or O',
    damage: 700,
    lostMana: 20,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Combo_002 = await new skillModel({
    name: 'Flapping Sprint',
    code: 'MAG_001_Cmd_Combo_002',
    description: 'The character performs 2 consecutive hand attacks',
    type: SkillType.ComboAttack,
    masterId: MAG_001._id,
    command: 'D + I',
    damage: 600,
    lostMana: 0,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Mix_001 = await new skillModel({
    name: 'Rising Kick',
    code: 'MAG_001_Cmd_Mix_001',
    description: 'The character performs 2 combos: Hand and Foot',
    type: SkillType.ComboMix,
    masterId: MAG_001._id,
    command: 'I + L',
    damage: 500,
    lostMana: 0,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Mix_002 = await new skillModel({
    name: 'Riding Glider',
    code: 'MAG_001_Cmd_Mix_002',
    description: 'The character performs 3 consecutive kicks',
    type: SkillType.ComboMix,
    masterId: MAG_001._id,
    command: 'D + I +  L',
    damage: 1200,
    lostMana: 0,
    lostSpecialEnergy: 0,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Skill_001 = await new skillModel({
    name: 'Super Kick',
    code: 'MAG_001_Cmd_Skill_001',
    description:
      'The character swings to gain momentum and gathers force in his legs, then kicks forward and flies into the air',
    type: SkillType.ComboMix,
    masterId: MAG_001._id,
    command: 'S + D + S + D + J',
    damage: 2100,
    lostMana: 0,
    lostSpecialEnergy: 1000,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Cmd_Skill_002 = await new skillModel({
    name: 'Hasaki',
    code: 'MAG_001_Cmd_Skill_002',
    description:
      'The character encodes extremely strong internal force, quietly placing his left hand on the ground as a pillar and kicking his legs up into the air, creating a whirlwind moving forward in the direction of the character s kicking leg',
    type: SkillType.ComboMix,
    masterId: MAG_001._id,
    command: 'S + A + S + A + J',
    damage: 1000,
    lostMana: 0,
    lostSpecialEnergy: 2000,
    blockByDefense: false,
    percentDecreaseAttackDamage: 0,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Outfit_1 = await new accessoryModel({
    name: 'Outfit 1',
    code: 'Outfit_1',
    description: 'Outfit default',
    type: AccessoryType.Outfit,
    masterId: MAG_001._id,
    colors: [
      {
        code: '001',
        name: 'White',
      },
      {
        code: '002',
        name: 'Yellow',
      },
      {
        code: '003',
        name: 'Blue',
      },
      {
        code: '004',
        name: 'Red',
      },
      {
        code: '005',
        name: 'Orange',
      },
      {
        code: '006',
        name: 'Black',
      },
      {
        code: '007',
        name: 'Pink',
      },
      {
        code: '008',
        name: 'Green',
      },
    ],
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Outfit_2 = await new accessoryModel({
    name: 'Outfit 2',
    code: 'Outfit_2',
    description: 'Outfit default',
    type: AccessoryType.Outfit,
    masterId: MAG_001._id,
    colors: [
      {
        code: '001',
        name: 'White',
      },
      {
        code: '002',
        name: 'Blue',
      },
      {
        code: '003',
        name: 'Red',
      },
      {
        code: '004',
        name: 'Orange',
      },
      {
        code: '005',
        name: 'Green',
      },
      {
        code: '006',
        name: 'Yellow',
      },
      {
        code: '007',
        name: 'Black',
      },
      {
        code: '008',
        name: 'Dark Green',
      },
    ],
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Emote_Ready_001 = await new emoteModel({
    name: 'Ready',
    code: 'MAG_001_Emote_Ready_001',
    description:
      'The character appears and turns around in place and raises his left hand to greet the audience',
    type: EmoteType.Master,
    masterId: MAG_001._id,
    price: 100,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  const MAG_001_Emote_Win_001 = await new emoteModel({
    name: 'Win',
    code: 'MAG_001_Emote_Win_001',
    description:
      'The character strikes a confident pose, perhaps flexing his muscles or raising his fist in the air',
    type: EmoteType.Master,
    masterId: MAG_001._id,
    price: 100,
    createdBy: 'init',
    updatedBy: 'init',
  }).save();

  MAG_001.skills.push(
    MAG_001_Cmd_Nor_001.toObject(),
    MAG_001_Cmd_Nor_002.toObject(),
    MAG_001_Cmd_Combo_001.toObject(),
    MAG_001_Cmd_Combo_002.toObject(),
    MAG_001_Cmd_Mix_001.toObject(),
    MAG_001_Cmd_Mix_002.toObject(),
    MAG_001_Cmd_Skill_001.toObject(),
    MAG_001_Cmd_Skill_002.toObject(),
  );
  MAG_001.emotes.push(
    MAG_001_Emote_Ready_001.toObject(),
    MAG_001_Emote_Win_001.toObject(),
  );
  MAG_001.outfits.push(
    MAG_001_Outfit_1.toObject(),
    MAG_001_Outfit_2.toObject(),
  );
  MAG_001.save();
};
