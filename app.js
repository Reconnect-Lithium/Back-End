


// npx sequelize-cli model:generate --name User --attributes email:string,password:string,bio:text,avatar:text,role:string
// npx sequelize-cli model:generate --name Cafe --attributes description:string,photo:text,location:geometry,name:string,address:text,UserId:number
// npx sequelize-cli model:generate --name Gallery --attributes imgUrl:text,cafeId:number
// npx sequelize-cli model:generate --name Occasion --attributes startTime:date,endTime:date,description:text,photo:text,eventName:string,CategoryId:number,CafeId:number
// npx sequelize-cli model:generate --name Category --attributes name:string,thumbnail:text
// npx sequelize-cli model:generate --name Room --attributes OccasionId:number,UserId:number
// npx sequelize-cli model:generate --name Message --attributes time:date,message:text,RoomId:number,UserId:number