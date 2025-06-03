 import db from "../client.js";
 

 // import { getBuildingfs, getBuilding, createBuilding, updateBuilding, deleteBuilding } from "../db/queries/buildings.js";

 /** @returns the entry created according to the provided details */
  export async function createBuilding({ name, style, nationality, born, died }) {
    const sql = `
      INSERT INTO buildings (name, style, nationality, born, died)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const { rows: buildingName } = await db.query(sql, [name, style, nationality, born, died]);
    return buildingName[0];
  }

  export async function getBuildings() {
    const sql = `
      SELECT * FROM buildings;
    `;
    const { rows: buildingName } = await db.query(sql);
    return buildingName[0];
  }

export async function getBuilding(id){
    const sql = `
    SELECT *
    FROM buildings
    WHERE id = $1;
    `;
    const {rows: [folder]} = await db.query(sql, [id]);
    return folder;
}

export async function updateBuilding(id, name, style, nationality, born, died){
    const sql = `
    DELETE *
    FROM buildings
    WHERE id = $1;
    INSERT INTO buildings (name, style, nationality, born, died)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const {rows: [folder]} = await db.query(sql, [id], name, style, nationality, born, died);
    return folder;
}

export async function deleteBuilding(id){
    const sql = `
    DELETE *
    FROM buildings
    WHERE id = $1;
    `;
    const {rows: [folder]} = await db.query(sql, [id]);
    return folder;
}