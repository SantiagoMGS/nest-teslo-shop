export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  // console.log(file);
  if (!file) return callback(new Error('File is empty'), false);

  const validExtension = ['jpg', 'jpeg', 'png', 'gif'];
  const fileExtension = file.mimetype.split('/')[1];

  if (validExtension.includes(fileExtension)) {
    return callback(null, true);
  }
  callback(null, true);
};
