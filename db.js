import fs from 'fs-extra'

const FILE = './db.json'

export async function loadDB() {
    if (!(await fs.pathExists(FILE))) {
        await fs.writeJSON(FILE, { users: {} })
    }
    return fs.readJSON(FILE)
}

export async function saveDB(db) {
    await fs.writeJSON(FILE, db, { spaces: 2 })
}
