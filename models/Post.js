const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 28]
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [24, 255]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;