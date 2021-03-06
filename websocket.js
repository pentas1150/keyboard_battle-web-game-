const SocketIO = require("socket.io");
const sharedSession = require("express-socket.io-session");
const { randWord } = require("./modules/rand_word");

module.exports = (server, app, sessionMiddleware) => {
    const io = SocketIO(server, { path: "/socket.io" });
    let usrCount = 0;

    app.set("io", io);

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    let answerString = randWord(5);
    let rank = [];

    io.on("connection", socket => {
        socket.request.session.nickname = `user${usrCount++}`;
        const nickname = socket.request.session.nickname;

        app.get("memberList").push(nickname);
        io.emit("newMember", nickname);

        console.log(`${nickname} is connected`);
        io.emit("recvChat", `${nickname}님이 입장하셨습니다.`);

        socket.emit("newWord", answerString);

        socket.on("disconnect", () => {
            console.log(`${nickname} is disconnected`);
            const removeIdx = app.get("memberList").indexOf(nickname);
            app.get("memberList").splice(removeIdx, 1);

            socket.broadcast.emit("recvChat", `${nickname}님이 나가셨습니다.`);
            socket.broadcast.emit("exitMember", nickname);
        });

        socket.on("sendChat", data => {
            if (typeof rank[0] === "undefined") {
                if (data === answerString) {
                    rank.push(nickname);
                    io.emit("winAlarm", `${nickname} 승리!`);
                    setTimeout(() => {
                        rank = [];
                        answerString = randWord(5);
                        io.emit("resetGame", answerString);
                    }, 2000);
                }
            }
        });
    });
};
