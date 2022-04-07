const { Router } = require("express");
const { listarUsuarios, guardarNuevoUsuario, actualizarUsuarioC, actualizaPassword, login } = require("../controller/usuariosController");
const { validateToken } = require ('../middleware/validateTokenMiddleware')
const router = Router();
const validator = require("../validators/userValidator");

router.get("/", validateToken, listarUsuarios);
router.post("/", validator.userCreateValidator, guardarNuevoUsuario);
router.post("/actualizar",validateToken, actualizarUsuarioC);
router.post("/actpassword", validateToken, actualizaPassword);
router.post("/login", login);


module.exports = router;
