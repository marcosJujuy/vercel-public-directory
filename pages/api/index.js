export default function marce(req, res) {
    res.status(200).json({
        query: req.query,
        cookies: req.cookies,
        index: true,
    });
}
export function test(){
    return "soy la funcion test";
}