module.exports = app => {
    app.get('/', (res, req) => {
        req.json({
            response: "response"
        })
    });
};