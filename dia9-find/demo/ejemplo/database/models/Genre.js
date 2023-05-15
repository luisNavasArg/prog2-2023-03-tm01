module.exports=function (sequelize, dataTypes) {
    let alias='Genre';
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        created_at:{
            type:dataTypes.DATE,
            allowNull:true
        },
        updated_at:{
            type:dataTypes.DATE,
            allowNull:true
        },
        name:{
            type:dataTypes.STRING
        },
        ranking:{
            type:dataTypes.INTEGER
        },
        active:{
            type:dataTypes.INTEGER
        }
    }
    let config={
        tableName:"genres",
        timestamps:false,
        underscored:true
    }

    let Genre = sequelize.define(alias,cols,config);
    Genre.associate=function (models) {
        Genre.hasMany(models.Movie,{
            as:'movies',
            foreignKey:'genre_id',
        });
    }
    return Genre;

}