export const validateAssignmentData = (req, res, next) => {
  const assignmentCategories = req.body.categories;
  const assignmentBody = req.body;
  const assignmentTitle = req.body.title;
  const assignmentDescription = req.body.description;

  if (typeof assignmentTitle !== "undefined" && assignmentTitle.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (
    typeof assignmentTitle !== "undefined" &&
    assignmentDescription.length > 150
  ) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }

  if (!Array.isArray(assignmentCategories) || !assignmentCategories) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
};
