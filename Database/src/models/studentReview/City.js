const city = (sequelize, DataTypes)=> {
    const city = sequelize.define(
        'city',
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING, 
                unique: true
            }

        }, 
        {
            timestamps: true, 
            freezeTableName: true
        }
    );

    city.sync();
    return City
};

export default city;