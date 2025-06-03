import db from "../db/client.js";
import { createArchitect } from "./queries/architects.js";
import { createBuilding } from "./queries/buildings.js";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {

  // seed architects
  await createArchitect({name: "Antoni Gaudi", style: "Baroque", nationality: "Spanish", born: "06/25/1852", died: "06/10/1926"});
  await createArchitect({name: "Frank Lloyd Wright", style: "Premodern", nationality: "American", born: "06/08/1867", died: "04/09/1959"});
  await createArchitect({name: "Eero Saarinen", style: "Pluralistic", nationality: "Finnish-American", born: "8/20/1910", died: "9/1/1961"});
  await createArchitect({name: "Frank Gehry", style: "PostModern", nationality: "Candian-American", born: "2/28/1929"});
  await createArchitect({name: "Santiago Calatrava", style: "Baroque", nationality: "Spanish", born: "7/28/1951"});
  await createArchitect({name: "Zaha Hadid", style: "Baroque", nationality: "Spanish", born: "10/31/1950", died: "3/31/2016"});
  await createArchitect({name: "Oscar Niemeyer", style: "Baroque", nationality: "Spanish", born: "12/15/1907", died: "12/5/2012"});
  await createArchitect({name: "Daniel Burnham", style: "Baroque", nationality: "Spanish", born: "09/04/1907", died: "6/1/1912"});
  await createArchitect({name: "Shigeru Ban", style: "Baroque", nationality: "Spanish", born: "08/05/1957"});
  await createArchitect({name: "Le Corbusier", style: "Baroque", nationality: "Spanish", born: "10/26/1887", died: "8/27/1965"});

  // seed buildings
  await createBuilding({name: "Sagrada Família",location: "Barcelona, Spain", construction_started: "3/19/1882", completed: null, architect_id: 1 });
  await createBuilding({name: "Meyer May House",location: "Grand Rapids, MI, USA", construction_started: "1/1/1908", completed: "12/12/1909",architect_id: 2 });
  await createBuilding({name: "General Motors Technical Center",location: "Warren, MI, USA", construction_started: "1/1/1949", completed: "12/12/1956",architect_id: 3 });
  await createBuilding({name: "Gehry Residence",location: "Santa Monica, CA, USA", construction_started: "1/1/1920", completed: "12/12/1978",architect_id: 4 });
  await createBuilding({name: "Gare do Oriente",location: "Lisbon, Portugal", construction_started: "1/1/1995", completed: "12/12/1998",architect_id: 5 });
  await createBuilding({name: "Guangzhou Opera House",location: "Guangzho, China", construction_started: "1/1/2005", completed: " 5/9/2010",architect_id: 6 });
  await createBuilding({name: "Church of Saint Francis of Assisi",location: "Minas Gerais, Brazil", construction_started: "1/1/1940", completed: "6/1/1943",architect_id: 7 });
  await createBuilding({name: "Church of Saint Francis of Assisi",location: "New York City, NY, USA", construction_started: "1/1/1901", completed: "12/12/1902",architect_id: 8 });
  await createBuilding({name: "Cardboard Cathedral",location: "Christchurch, New Zealand", construction_started: "7/24/2012", completed: "8/2/2013",architect_id: 9 });
  await createBuilding({name: "Church of Saint-Pierre",location: "Loire, France", construction_started: "1/1/1971", completed: "12/12/2006",architect_id: 10 });


}
