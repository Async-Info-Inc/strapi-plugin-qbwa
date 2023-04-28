export default {
    log: (msg, indentMsg) => {
        const msgA = msg || '';
        const indentMsgA = indentMsg || [];
        console.log(">> 🗑", msg);
        console.group("details:");
        indentMsgA.forEach(msg => {console.log(msg)});
        console.groupEnd();
    }
};