import { Sequelize, DataTypes } from "sequelize"

const db = {
    NAME: "kanban",
    USERNAME: "kanban",
    PASSWORD: "kanban",

    options: {
        dialect: "mysql",
        timezone: "+00:00",
        host: "mysql.kanban",
        port: 3306,
        logging: function (str) {
            console.log(str)
        }
    }
}

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options);

export const List = sequelize.define(
    "List",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
    }
);

export const Task = sequelize.define(
    "Task",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
    }
);

List.hasMany(Task);
Task.belongsTo(List);
