import sampleUsers from '../../../resources/users.json' assert { type: "json" };

// fetching stored data
export const checkUserSigned = (credentials)=> {
    const user = sampleUsers.sampleUsers;
    const username = Object.values(credentials.username).length > 0 ? credentials.username : null;
    const password = Object.values(credentials.password).length > 0 ? credentials.password : null;
    
    if(username !== null && password !== null) {
        // if(username !== user[0].username) return { status:'failed', message:'User does not Exist!',valid:false }
        if(username === user[0].username && password === user[0].password)
            return {status: 'success', message:"Login Succesfull", valid:true }
        return { status:'failed', message:'Invalid username or password',valid:false }
    }

    return null;
}
