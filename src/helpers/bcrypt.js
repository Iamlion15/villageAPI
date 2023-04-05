import bcrypt from "bcrypt";


async function hashedPassword(password){
    const salt = 12;  // it will take 12 rounds of salting to decrypt this password
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

async function compareHashedPassword(candidatePassword, userPassword){
    const isCorrect = await bcrypt.compare(candidatePassword, userPassword);
    return isCorrect;
}
export  {hashedPassword,compareHashedPassword};