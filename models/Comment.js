const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post')

class Comment extends Model {}

Comment.init(
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
        postId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Post,
                key: 'id'
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
        modelName: 'comment'
    }
);

module.exports = Comment;