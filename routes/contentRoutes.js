const express = require("express");
const {
  createProject,
  getProjects,
  createExperience,
  getExperiences,
  createContact,
  getContact,
  createAbout,
  getAboutContent,
  createProfession,
  getProfessionContent,
} = require("../controllers/contentController");

const router = express.Router();

// Projects routes
router.post("/projects", createProject); // Add new project
router.get("/projects", getProjects); // Get all projects

// Experiences routes
router.post("/experiences", createExperience); // Add new experience
router.get("/experiences", getExperiences); // Get all experiences

// Contact routes
router.post("/contact", createContact); // Add contact info
router.get("/contact", getContact); // Get contact info

// About section routes
router.post("/about", createAbout); // Add about content
router.get("/about", getAboutContent); // Get about content

// Profession section routes
router.post("/profession-info", createProfession); // Add profession content
router.get("/profession-info", getProfessionContent); // Get profession content

module.exports = router;
