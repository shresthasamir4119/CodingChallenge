"use strict";
String.prototype.alice = function (opinion) {
    const name = 'alice';
    const formattedOpinion = opinion === 'like' ? 'likes' : 'dislikes';
    return `${name} ${formattedOpinion} '${this}'`;
};
console.log("chocolate".alice("like")); // Output: "alice likes 'chocolate'"
console.log("chocolate".alice("dislike")); // Output: "alice dislikes 'chocolate'"
