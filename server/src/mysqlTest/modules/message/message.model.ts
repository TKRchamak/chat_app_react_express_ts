import { Model, Table, Column, DataType } from 'sequelize-typescript';

// const messageSchema = new Schema<IMessage>({
//     content: { type: String, required: true, unique: true },
//     authorId: { type: String, required: true, unique: true },
//     timestamp: { type: String, required: true, unique: true }
// });

// const Message = model<IMessage>("message", messageSchema);

@Table({
    timestamps: false,
    tableName: "messages"
})

class Message extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    content: String;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    authorId: String;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    "timestamp": String;

}

export default Message;