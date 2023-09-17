import { AccessoryType } from "enums/accessory.enum";
import { Types } from "mongoose";
import { Accessory, Color } from "schemas/accessory.schema";

export class AccessoryDto implements Accessory {
    name: string;
    code: string;
    description?: string;
    type: AccessoryType;
    masterId?: Types.ObjectId;
    colors: Color[];
    isDeleted: boolean;
    createdBy: string;
    updatedBy: string;

}