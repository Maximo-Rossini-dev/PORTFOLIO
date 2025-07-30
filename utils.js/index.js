async function getCardItems() {
  const imagesIdMap = {};
  const cardsContent = [];
  let newObj = {};

  return fetch(
    "https://cdn.contentful.com/spaces/v0f7iosuzuih/environments/master/entries?access_token=T2PVVChs2n_wc8GRrjSFj8FZyxNBvMmqKWk6qXI5_sg"
  )
    .then((res) => res.json())
    .then((data) => {
      return data.includes.Asset.map((asset) => {
        imagesIdMap[asset.sys.id] = asset.fields.file.url;
        return data;
      });
    })
    .then((data) => {
      // console.log("DATA:", data);
      data.forEach((item, index) => {
        let match = imagesIdMap[item.items[index].fields.image.sys.id];
        newObj.title = item.items[index].fields.title;
        newObj.description = item.items[index].fields.description;
        newObj.url = item.items[index].fields.url;
        newObj.image = match;
        cardsContent.push(newObj);
        newObj = {};
        // Aca reseteo los valores de newObj para evitar que mantenga siempre el mismo valor.
      });
      return cardsContent;
    });
}
module.exports.getCardItems = getCardItems;
