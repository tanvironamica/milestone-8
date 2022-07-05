try{
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");
    const user = {name: 'mohona nodi', email: 'nodi@gmail.com'};
    const result = await userCollection.insertOne(user);
    console.log(`User inserted with id: ${result.insertedId}`)
}
finally{
//    await client.close(); 
}