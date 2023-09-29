// middlewares to upload files
const multer = require("multer");
const re = new RegExp("\\s+", "g");

// the function below is to eliminate white spaces from the file name
function eliminateWhitespace(imageName) {
  return imageName.replace(re, "-");
}

// now we will create a function to upload the file
const filename = (req, file, next) => {
  let lastIndexof = file.originalname.lastIndexOf(".");
  let originalname = file.originalname.substring(0, lastIndexof);
  let ext = file.originalname.substring(lastIndexof);
  next(null, `${eliminateWhitespace(originalname)}-${Date.now()}${ext}`);
};

// const filename = (req, file, next) => {
//   let lastIndexof = file.originalname.lastIndexOf(".");
//   let originalname = file.originalname.substring(0, lastIndexof);
//   let ext = file.originalname.substring(lastIndexof);
//   next(null, `${originalname}-${Date.now()}${ext}`);
// };

const filter = (req, file, next) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/gif" ||
    file.mimetype === "video/avi" ||
    file.mimetype === "video/webm" ||
    file.mimetype === "video/mkv"
  ) {
    next(null, true);
  } else {
    next(null, false);
    return next(
      new Error("Only .jpeg, .jpg, .png, .mp4 and .gif format allowed!")
    );
  }
};

const productImageDestination = (req, file, next) => {
  next(null, `${__dirname}/../public/product`);
};

const ProfileImageDestination = (req, file, next) => {
  next(null, `${__dirname}/../public/profiles`);
};

const productImage = multer({
  storage: multer.diskStorage({
    destination: productImageDestination,
    filename,
  }),
  fileFilter: filter,
});

const profileImage = multer({
  storage: multer.diskStorage({
    destination: ProfileImageDestination,
    filename,
  }),
  fileFilter: filter,
});

// const uploadCompanyVideo = multer({
//   storage: multer.diskStorage({
//     destination: companyVideoDestination,
//     filename,
//   }),
//   fileFilter: filter,
// });

module.exports = {
  productImage,
  profileImage,
};