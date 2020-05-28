const { ipcMain, dialog } = require('electron');

ipcMain.on('@RUral:prompt', async (event, message) => {
  try {
    ()=>{}
  } catch (err) {
    event.sender.send('@RUral:promptFail', 'Houve um erro na criação do prompt');
  }
});