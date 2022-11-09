using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class POST_DETAIL
    {
        public POST_DETAIL(
                string post_id,
                string user_id,
                string user_name,
                string title,
                string description,
                string image,
                dynamic comments){
            this.post_id = post_id;
            this.user_id = user_id;
            this.user_name = user_name;
            this.title = title;
            this.description = description;
            this.image = image;
            this.comments_id = comments;
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string post_id { get; set; } = null!;

        [BsonElement]
        [BsonRepresentation(BsonType.ObjectId)]
        public string user_id { get; set; } = null!;

        [BsonElement]
        public string user_name { get; set; } = null!;

        [BsonElement]
        public string title { get; set; } = null!;

        [BsonElement]
        public string description { get; set; } = null!;

        [BsonElement]
        public string image { get; set; } = null!;

        [BsonElement]
        public List<Object>? comments_id{ get; set; }
    }
}