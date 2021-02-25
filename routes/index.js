module.exports = app =>{
    app.get('/', (res, req) => {
        req.json({
            response: "Hola ke ace"
        })
    });
};