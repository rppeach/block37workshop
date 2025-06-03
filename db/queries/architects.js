 import db from "../client.js";
 

 // import { getArchitects, getArchitect, createArchitect, updateArchitect, deleteArchitect } from "../db/queries/architects.js";

 /** @returns the entry created according to the provided details */
  export async function createArchitect({ name, style, nationality, born, died }) {
    const sql = `
      INSERT INTO architects (name, style, nationality, born, died)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const { rows: architectName } = await db.query(sql, [name, style, nationality, born, died]);
    return architectName[0];
  }

  export async function getArchitects() {
    const sql = `
      SELECT * FROM architects;
    `;
    const { rows: architectName } = await db.query(sql);
    return architectName[0];
  }

export async function getArchitect(id){
    const sql = `
    SELECT *
    FROM architects
    WHERE id = $1;
    `;
    const {rows: [folder]} = await db.query(sql, [id]);
    return folder;
}

export async function updateArchitect(id, name, style, nationality, born, died){
    const sql = `
    DELETE *
    FROM architects
    WHERE id = $1;
    INSERT INTO architects (name, style, nationality, born, died)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const {rows: [folder]} = await db.query(sql, [id], name, style, nationality, born, died);
    return folder;
}

export async function deleteArchitect(id){
    const sql = `
    DELETE *
    FROM architects
    WHERE id = $1;
    `;
    const {rows: [folder]} = await db.query(sql, [id]);
    return folder;
}