"use strict";
exports.__esModule = true;
exports.Notification = void 0;
var Notification = /** @class */ (function () {
    function Notification(props) {
        this.props = props;
    }
    Object.defineProperty(Notification.prototype, "recipientId", {
        get: function () {
            return this.props.recipientId;
        },
        set: function (recipientId) {
            this.props.content = recipientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        set: function (content) {
            this.props.content = content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "category", {
        get: function () {
            return this.props.category;
        },
        set: function (category) {
            this.props.content = category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "readAt", {
        get: function () {
            return this.props.readAt;
        },
        set: function (readAt) {
            this.props.readAt = readAt;
        },
        enumerable: false,
        configurable: true
    });
    return Notification;
}());
exports.Notification = Notification;
