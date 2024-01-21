// ++++++++++++++++++++1st method using promises(GOOD METHOD)+++++++++++++++++++++

const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }

// ++++++++++++++++++++2nd method using try...catch +++++++++++++++++++++

/*
const asyncHandler =  (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        }) 
    }
}
*/