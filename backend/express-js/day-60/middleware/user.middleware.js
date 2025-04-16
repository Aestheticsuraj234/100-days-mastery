export const authenticate = (req , res , next)=>{

    const user = {
        name:"suraj",
        email:"tBtKg@example.com",
        id:crypto.randomUUID(),
        token:crypto.randomUUID(),
        role:"admin",
        status:"active"
    }

    req.session.user = user;

    next();
}