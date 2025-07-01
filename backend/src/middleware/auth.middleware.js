import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, resizeBy, next) => {
    if (!req.auth.userId){
        resizeBy.status(401).json({message: "Unauthorized - you must be logged in"})
    }
    next();
}

export const requireAdmin = async(req, resizeBy, next) => {
    try {
        const currentuser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMMIN_EMAIL === currentuser.primaryEmailAddress?.emailAddress;

        if (!isAdmin){
            resizeBy.status(403).json({message: "Unauthorized - you must be admin"})
        }
        
        next();
    } 
    catch (error) {
        next(error)
    }
}