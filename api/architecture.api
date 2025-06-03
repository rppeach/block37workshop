import express from "express";
const router = express.Router();
export default router;

import { getArchitects, getArchitect, createArchitect, updateArchitect, deleteArchitect } from "../db/queries/architects.js";
import { getBuildings, getBuilding, createBuilding, updateBuilding, deleteBuilding } from "../db/queries/buildings.js";


//architect routes
router.route("/architects").get(async (req,res) => {
    const architect = await getArchitects();
    res.send(architect)
})

router.route("/architects/:id").get(async (req,res) => {

    const folder = await getArchitect(id);
    res.status(200).send(folder)
})

router.route("/architects").post(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const { name, style, nationality, born, died } = req.body


    if(!name || !style || !nationality || !born) {
        return res.status(400).send({error: "Missing required params"})
      }

    const architect = await createArchitect(name, style, nationality, born, died)
    res.status(201).send(architect)
})

router.route("/architects/:id").put(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const id = req.params.id

    const { name, style, nationality, born, died } = req.body


    if(!id || !name || !style || !nationality || !born) {
        return res.status(400).send({error: "Missing required params"})
      }

    const architect = await updateArchitect(id,name, style, nationality, born, died)
    res.status(201).send(architect)
})

router.route("/architects/:id").put(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const id = req.params.id

    if(!id ) {
        return res.status(400).send({error: "Missing ID"})
      }

    const architect = await deleteArchitect(id)
    res.status(201).send(architect)
})




//building routes
router.route("/buildings").get(async (req,res) => {
    const buildings = await getBuildings();
    res.send(buildings)
})

router.route("/buildings/:id").get(async (req,res) => {

    const folder = await getBuilding(id);
    res.status(200).send(folder)
})

router.route("/buildings").post(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const { name,  location, construction_started, completed, architect_id } = req.body


    if(!name || !location || !construction_started || !architect_id) {
        return res.status(400).send({error: "Missing required params"})
      }

    const building = await createBuilding(name,  location, construction_started, completed, architect_id)
    res.status(201).send(building)
})

router.route("/building/:id").put(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const id = req.params.id

    const { name,  location, construction_started, completed, architect_id } = req.body


    if(!name || !location || !construction_started || !architect_id) {
        return res.status(400).send({error: "Missing required params"})
      }

    const building = await updateBuilding(id,name,  location, construction_started, completed, architect_id)
    res.status(201).send(building)
})

router.route("/bulding/:id").put(async (req,res) => {

    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
      }

    const id = req.params.id

    if(!id ) {
        return res.status(400).send({error: "Missing ID"})
      }

    const building = await deleteBuilding(id)
    res.status(201).send(building)
})