const moongose =require('mongoose');
const Schema=moongose.Schema;

const wordSchema =Schema(
    {
        word:String
    }
);

module.exports=moongose.model('word',wordSchema);