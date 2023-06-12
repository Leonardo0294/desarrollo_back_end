
const mensajeGet = async(req,res)=>{
    res.send('mensaje get')
}
const mensajePut = async(req,res)=>{
    res.send('mensaje put')
}
const mensajePost = async(req,res)=>{
    res.send('mensaje post')
}
const mensajeDelete = async(req,res)=>{
    res.send('mensaje delete')
}


module.exports = {mensajeDelete, mensajeGet, mensajePost, mensajePut};