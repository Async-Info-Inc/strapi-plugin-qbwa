export default {
    log: (msg, indentMsg) => {
        const msgA = msg || '';
        const indentMsgA = indentMsg || [];
        console.log(">> 🗑", msg);
        console.group(">> 🗑", "details:");
        indentMsgA.forEach(msg => {console.log(msg)});
        console.groupEnd();
    },
    arrayToString: (array) => {
        return JSON.stringify(array, null, 2)
    }
};