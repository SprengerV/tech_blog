const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const moment = require('moment')

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
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
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