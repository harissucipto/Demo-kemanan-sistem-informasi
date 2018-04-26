export const caiserChiperEnkrip = plainText => {
  const database =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  const indexPlainText = plainText.split('').map(huruf => {
    const indexHuruf = database.indexOf(huruf);
    return indexHuruf;
  });

  const lebihDariDatabase = index => {
    return index - database.length;
  };

  const tambah3 = index => {
    const tempIndex = index + 3;
    return tempIndex > database.length
      ? lebihDariDatabase(tempIndex)
      : tempIndex;
  };

  const indexChipperText = indexPlainText.map(huruf => {
    return tambah3(huruf);
  });

  const chiperText = indexChipperText.map(index => {
    return database[index];
  });

  return chiperText.join('');
};

export const caiserChiperDekrip = plainText => {
  const database =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  const indexPlainText = plainText.split('').map(huruf => {
    const indexHuruf = database.indexOf(huruf);
    return indexHuruf;
  });

  const lebihDariDatabase = index => {
    return index - database.length;
  };

  const kurang3 = index => {
    const tempIndex = index - 3;
    return tempIndex > database.length
      ? lebihDariDatabase(tempIndex)
      : tempIndex;
  };

  const indexChipperText = indexPlainText.map(huruf => {
    return kurang3(huruf);
  });

  const chiperText = indexChipperText.map(index => {
    return database[index];
  });

  return chiperText.join('');
};


