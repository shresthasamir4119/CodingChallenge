    interface String {
        alice(opinion: 'like' | 'dislike'): string;
    }
  
  String.prototype.alice = function (this: string, opinion: 'like' | 'dislike'): string {
    const name = 'alice';
    const formattedOpinion = opinion === 'like' ? 'likes' : 'dislikes';
    return `${name} ${formattedOpinion} '${this}'`;
  };
  
  console.log("chocolate".alice("like"));    // Output: "alice likes 'chocolate'"
  console.log("chocolate".alice("dislike")); // Output: "alice dislikes 'chocolate'"
  