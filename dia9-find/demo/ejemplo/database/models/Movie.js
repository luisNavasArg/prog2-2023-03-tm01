module.exports=function (sequelize,dataTypes) {
    let alias="Movie";
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        title:{
            type:dataTypes.STRING
        },
        rating:{
            type:dataTypes.DECIMAL
        },
        awards:{
            type:dataTypes.INTEGER
        },
        release_date:{
            type:dataTypes.DATE
        },
        length:{
            type:dataTypes.INTEGER
        },
        genre_id:{
            type:dataTypes.INTEGER
        }
    }
    let config={
        tableName:'movies',
        timestamps:false,
        underscored:true
    }
    const Movie =sequelize.define(alias,cols,config);
    return Movie;
}
