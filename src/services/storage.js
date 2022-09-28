// Credit to:
// Guilherme - https://github.com/Guilherme-j10/amon-andromeda

const knex = require("knex")
const fs = require('fs')
const path = require('path')
const pkg = require('@adiwajshing/baileys')
const { getDevice } = pkg;


class AndromedaStorage {

    Connection
    CounterInsters
    LimitMemoryStorage
    basePath
    dbName = 'skynet_storage'

    constructor(ConnectionProps, settings) {

        this.LimitMemoryStorage = 10;
        this.basePath = settings.pathStorage;

        if (fs.existsSync(this.basePath)) {

            if (fs.existsSync(path.resolve(this.basePath, `MessageStorage.json`))) {

                this.CounterInsters = (
                    JSON.parse(
                        fs.readFileSync(
                            path.resolve(this.basePath, `MessageStorage.json`)
                        )
                    )
                ).length;

            } else {

                fs.writeFileSync(path.resolve(this.basePath, `MessageStorage.json`), '[]');
                this.CounterInsters = 0;

            }

        } else {

            fs.mkdirSync(this.basePath);
            fs.writeFileSync(path.resolve(this.basePath, `MessageStorage.json`), '[]');
            this.CounterInsters = 0;

        }

        this.Connection = knex({
            client: ConnectionProps.client,
            connection: {
                host: ConnectionProps.host,
                port : ConnectionProps.port,
                password: ConnectionProps.pass,
                database: ConnectionProps.dbname,
                user: ConnectionProps.user
            }
        });

        this.Connection.schema.hasTable(this.dbName).then((exists) => {

            if (!exists) {
                console.log("Creating table skynet_storage");
                return this.Connection.schema.createTable(this.dbName, (table) => {
                    table.increments('id').primary();
                    table.string('message_id', 255).notNullable();
                    table.string('remoteJid', 255).notNullable();
                    table.text('MessageStructure', 'longtext').notNullable();
                })

            }

        })

    }

    async getTypeDevice(numberId) {

        const dataMessages = JSON.parse(
            fs.readFileSync(
                path.resolve(this.basePath, `MessageStorage.json`)
            )
        )

        let MessageFound = '';

        let TypeDeviceOcorrence = { web: 0, android: 0, ios: 0 };

        for (let content of dataMessages) {

            if (content.message.key.remoteJid === numberId) {

                const typefound = getDevice(content.message.key.id);
                TypeDeviceOcorrence[typefound]++;

            }

        }

        if (TypeDeviceOcorrence.android > 0 || TypeDeviceOcorrence.ios > 0) {

            MessageFound = TypeDeviceOcorrence.android > TypeDeviceOcorrence.ios ? 'android' : TypeDeviceOcorrence.ios > TypeDeviceOcorrence.android ? 'ios' : 'web';

            return MessageFound;

        }

        const result = await this.Connection(this.dbName).select('MessageStructure').where({ remoteJid: numberId })

        if (!result.length) {

            if (MessageFound === 'web') MessageFound = 'android';

            return !Array.from(MessageFound).length ? 'android' : MessageFound;

        };

        for (let msg of result) {

            let message = JSON.parse(msg);

            const device = getDevice(message.key.id);
            TypeDeviceOcorrence[device]++;

        }

        if (!TypeDeviceOcorrence.android || !TypeDeviceOcorrence.ios) {

            MessageFound = 'android';

            return MessageFound;

        }

        if (TypeDeviceOcorrence.android > 0 || TypeDeviceOcorrence.ios > 0) {

            MessageFound = TypeDeviceOcorrence.android > TypeDeviceOcorrence.ios ? 'android' : TypeDeviceOcorrence.ios > TypeDeviceOcorrence.android ? 'ios' : 'web';

        }

        return MessageFound;

    }

    async SaveDataInDataBase() {

        this.CounterInsters = 0;

        const dataMessages = JSON.parse(
            fs.readFileSync(
                path.resolve(this.basePath, `MessageStorage.json`)
            )
        )

        fs.writeFileSync(path.resolve(this.basePath, `MessageStorage.json`), '[]');

        let dataRows = [];

        for (let message of dataMessages) {

            dataRows.push({
                message_id: message.id,
                remoteJid: message.message.key.remoteJid,
                MessageStructure: JSON.stringify(message.message)
            });

        }

        await this.Connection.batchInsert(this.dbName, dataRows);

    }

    saveMessageInStorage(data) {

        let structure = []

        structure = JSON.parse(
            fs.readFileSync(
                path.resolve(this.basePath, `MessageStorage.json`)
            )
        )

        for (let msg of data.messages) {

            structure.push({
                id: msg.key.id,
                message: msg
            })

        }

        this.CounterInsters++;

        fs.writeFileSync(path.resolve(this.basePath, `MessageStorage.json`), JSON.stringify(structure));

        structure = [];

        if (this.CounterInsters >= this.LimitMemoryStorage) {

            this.SaveDataInDataBase();

        }

    }

    async getMessageFromFakestorage(id) {

        let structure = []

        structure = JSON.parse(
            fs.readFileSync(path.resolve(this.basePath, `MessageStorage.json`)
            )
        )

        let Message = structure.filter(val => val.id === id);

        if (!Message.length) {
            const messageFounded = await this.Connection(this.dbName).select('MessageStructure').where({ message_id: id });
            if (!messageFounded.length) throw { message: 'Not was possible found the message.' };
            Message = [{ id: '', message: JSON.parse(messageFounded[0].MessageStructure) }];

        }

        return Message[0].message;

    }

}

module.exports = AndromedaStorage;