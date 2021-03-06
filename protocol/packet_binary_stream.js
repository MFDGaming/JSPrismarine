const BinaryStream = require('jsbinaryutils')

'use strict'

// Class containing packet binary functions 
// for example writeItem()
class PacketBinaryStream extends BinaryStream {

    readString() {
        return this.read(this.readUnsignedVarInt()).toString()
    }

    writeString(v) {
        this.writeUnsignedVarInt(Buffer.byteLength(v))
        this.append(Buffer.from(v, 'utf8'))
    }

}   
module.exports = PacketBinaryStream