import fs from 'node:fs/promises';
const fetchFiles = async () => {
  try {
    console.clear();
    let i = 0;
    const ans = [];
    const directoryDetails = await fs.readdir('./');
    directoryDetails.forEach(async (dir) => {
      const isDir = (await fs.stat(`./${dir}`)).isDirectory();
      if (isDir) {
        const directoryDetails2 = await fs.readdir(`./${dir}`);
        directoryDetails2.forEach((dir2) => {
          if (dir2.includes('Color')) {
            ans.push({
              id: ++i,
              name: `Texture-${i}`,
              url: `${dir}/${dir2}`,
            });
          }
        });
        console.log(ans);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

fetchFiles();
