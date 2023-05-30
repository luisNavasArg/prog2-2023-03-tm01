module.exports=function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
            id:{
                autoIncrement:true,
                primaryKey:true,
                type:dataTypes.INTEGER
            },
            name:{
                type:dataTypes.STRING
            },
            email:{
                type:dataTypes.STRING
            },
            password:{
                type:dataTypes.STRING
            },
            remember_token:{
                type:dataTypes.STRING
            },
            created_at:{
                type:dataTypes.DATE,
                allowNull:true
            },
            updated_at:{
                type:dataTypes.DATE,
                allowNull:true
            },
            img:{
                type:dataTypes.STRING
            }
    }
    let config={
        tableName:"users",
        timestamps:false,
        underscored:true
    }
    let User = sequelize.define(alias,cols,config);
    return User;
}