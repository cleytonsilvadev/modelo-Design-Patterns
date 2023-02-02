import Client from "./client";
import Notify from "./notify";

const cliente = new Client();
const notificacao= new Notify(cliente);


notificacao.sendEmail();