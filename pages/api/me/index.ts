export default function(req,res) {
    const miNombre:string = "Marcos";
    console.log("soy la api ", miNombre);
    res.send(miNombre);
}