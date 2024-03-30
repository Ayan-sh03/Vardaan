import { CreateLogdb, getLogs, getUnitByPlantIddb, logSql } from "./query.js";

export const getUnitByPlantId = async (req, res) => {
  const { id: ID, plant_id: PlantId } = req.body;
  const results = await getUnitByPlantIddb(ID, PlantId);

  res.json(results);
};

export const CreateLog = async (req, res) => {
  const results = await CreateLogdb(req);

  res.json(results);
};


export const getUnitLogsLast12 = async(req,res)=>{
  const results = await getLogs()

  

  res.json(results);
}


export const getlogSql = async(req,res)=>{
  const results = await logSql()
  res.json(results)
}