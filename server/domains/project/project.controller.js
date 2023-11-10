// GET '/user/login'
const projects = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET '/project/projects' 🚧");
};
// GET '/user/logout'
const add = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET '/project/add  ' 🚧");
};
// POST "/project/add"
const addPost = (req, res) => {
  res.status(200).json(req.body);
};

export default {
  projects,
  add,
  addPost,
};
