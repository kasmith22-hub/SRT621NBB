exports.paramsAImage = (req, res) => {
    let mario = req.params.images;
    res.render(`image${mario}`);
  };