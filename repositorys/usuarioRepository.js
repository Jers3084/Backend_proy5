const Usuario = require('../models/usuariosModel')

const listarUsuarios = async () => {
  return await Usuario.find().select({
    nombre: true,
    email: true,
    username: true,
  })
}

const buscarPorUsuario = async (username) => {
  return await Usuario.findOne({ username })
}

const guardarUsuarioRepository = async (model) => {
  const usuario = new Usuario(model)
  const resultado = await usuario.save()
  return resultado
}

const actualizarUsuarioRep = async (id, nombre, email) => {
  return  await Usuario.findByIdAndUpdate(
    { _id: id },
    { nombre: nombre, email: email },
    { new: true },
  )
}

const actualizarPasswordRep = async (id, password) => {
  return await Usuario.findByIdAndUpdate(
    { _id: id },
    { password: password },
    { new: true },
  )
}

module.exports = {
  listarUsuarios,
  buscarPorUsuario,
  guardarUsuarioRepository,
  actualizarUsuarioRep,
  actualizarPasswordRep
}
