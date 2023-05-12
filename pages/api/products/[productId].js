export default function marce(req, res) {
    res.status(200).json({
        query: req.query,
        cookies: req.cookies,
        test: true,
    });
}