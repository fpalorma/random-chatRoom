const errorHandler = (error, req, res, next)=>{
    console.error(error);
    return res.status(error.statusCode).json({
        
        message: `${error.message}`
    })
}

export default errorHandler