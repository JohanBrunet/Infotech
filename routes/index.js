/* GET home page */
exports.index = function(req, res){
  res.render('layout', {body: 'index' title: 'Infotech' });
};
