import { getTasks, createTask } from "../../../repo/tasks-repo";

export default function handler(req, res) {
    switch (req.method) {
      case "GET":
        return get();
      case "POST":
        return create();
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  
     function get() {
      const tasks =  getTasks();
      return res.status(200).json(tasks);
    }
  
    function create() {
      try {
        createTask(req.body);
        return res.status(200).json({ message: "success"});
      } catch (error) {
        return res.status(400).json({ message: error });
      }
    }
  }