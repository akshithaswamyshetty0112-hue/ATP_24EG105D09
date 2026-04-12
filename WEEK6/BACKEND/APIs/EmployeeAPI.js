import exp from 'express'
import { EmployeeModel } from '../models/EmployeeModel.js'
export const empRoute=exp.Router();
//create emp
empRoute.post("/employees", async (req, res,next) => {
  try{
  const newEmp = req.body;
  const empDoc = new EmployeeModel(newEmp);
  await empDoc.save();
  res.status(201).json({ message: "Emp created" });
  }catch(err){
    next(err)
  }
});
//Read all emps
empRoute.get("/employees", async (req, res,next) => {
  try{
  let empList = await EmployeeModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
  }catch(err){
    next(err)
  }
});
//Update emp id
empRoute.put("/employees/:id", async (req, res,next) => {
  try{
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await EmployeeModel.findByIdAndUpdate(
    req.params.id,
    
     { $set: modifiedEmp },
     {new:true}
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });

}catch(err){
  next(err);
}
})
//Delete emp by id
empRoute.delete("/employees/:id", async (req, res,next) => {
  try{
  let deletedEmp = await EmployeeModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });

}catch(err){
  next(err);
}
})