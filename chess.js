@async
const Canvas = require('canvas')

class ChessGame {
    //Рокировки
    whiteKingMoved = 0
    blackKingMoved = 0

    previousMove //Чтобы было возможно проверить на взятие на проходе.

    constructor() {
        this.chessboard = [[1, 2, 3, 4, 5, 3, 2, 1], [0, 0, 0, 0, 0, 0, 0, 0], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7, 7], [8, 9, 10, 11, 12, 10, 9, 8]]

    }

    movePiece(sx, sy, tx, ty) {
        if (this.canPieceMove(sx, sy, tx, ty))
            }

    canPieceMove(sx, sy, tx, ty) {
        var piece = this.chessboard[sx][sy]
        switch (piece) {
            case 0 :
                return this.checkPawnMove(piece, tx, ty)
            case 1:
                return this.checkRookMove(piece, tx, ty)
            case 2:
                return this.checkKnightMove(piece, tx, ty)
            case 3:
                return this.checkBishopMove(piece, tx, ty)
            case 4:
                return this.checkKingMove(piece, tx, ty)
            case 5:
                return this.checkQueenMove(piece, tx, ty)
            case 6:
                return 0
            case 7 :
                return this.checkPawnMove(piece, tx, ty)
            case 8:
                return this.checkRookMove(piece, tx, ty)
            case 9:
                return this.checkKnightMove(piece, tx, ty)
            case 10:
                return this.checkBishopMove(piece, tx, ty)
            case 11:
                return this.checkKingMove(piece, tx, ty)
            case 12:
                return this.checkQueenMove(piece, tx, ty)
        }
        return 0
    }

    drawChessBoard() {
        //work in progress
    }

    kingMove() {

    }

    queenMove() {

    }

    bishopMove() {

    }

    castling(type) {

    }

    rookMove() {

    }

    checkKingMove() {

    }

    checkPawnMove() {

    }

    checkKnightMove(piece, tx, ty) {

    }

    checkQueenMove(piece, tx, ty) {

    }

    checkBishopMove() {

    }

    checkRookMove() {

    }

    isCheck() {

    }

    isCheckMate() {

    }
}

export default new ChessGame()
