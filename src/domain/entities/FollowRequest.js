export class FollowRequest {
  constructor({ id, requesterId, recipientId, timestamp, status = "pending" }) {
    this.id = id;
    this.requesterId = requesterId;
    this.recipientId = recipientId;
    this.timestamp = timestamp;
    this.status = status;
  }

  accept() {
    this.status = "accepted";
  }

  reject() {
    this.status = "rejected";
  }
}
