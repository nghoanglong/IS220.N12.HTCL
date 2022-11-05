using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class USERS
    {
        public USERS(string fullname, string phone_number, string address, string account_email, string account_pwd, string image){
            this.fullname = fullname;
            this.phone_number = phone_number;
            this.address = address;
            this.account_email = account_email;
            this.account_pwd = account_pwd;
            this.avatar = image;
            this.about = "";
            this.users_followed_id = new String[] {};
            this.users_following_id = new String[] {};
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string user_id { get; set; } = null!;

        [BsonElement]
        public string? fullname { get; set; }

        [BsonElement]
        public String[]? users_followed_id { get; set; }

        [BsonElement]
        public String[]? users_following_id { get; set; }

        [BsonElement]
        public string? about { get; set; }

        [BsonElement]
        public string? phone_number { get; set; }

        [BsonElement]
        public string? address { get; set; }

        [BsonElement]
        public string? avatar { get; set; }

        [BsonElement]
        public string account_email { get; set; } = null!;

        [BsonElement]
        public string account_pwd { get; set; } = null!;
    }
}