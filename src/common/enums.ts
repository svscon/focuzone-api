enum OrderCategory {
    SEAT = 0,
    ROOM = 1,
    PRINT = 3,
    LOCKER = 4,
}
enum OrderType {
    TIME = 0,
    DURATION = 1,
    DAY = 2,
}
enum SeatStatus {
    AVAILABLE = 0,
    RESERVED = 1,
    IN_USE = 2,
    MAINTENANCE = 3
}
enum SeatType {
    NORMAL = 0,
    VIP = 1,
    SVIP = 2,
    ROOM = 3
}

enum OrderStatus {
    PENDING = 0,
    COMPLETED = 1,
    CANCELLED = 2
}

enum UserType {
    MEMBER = 0,
    KEEPER = 1,
    ADMIN = 2
}