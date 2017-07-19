// https://judge.softuni.bg/Contests/Compete/Index/341#2
'use strict';

function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + '\n' +
                'Rating: ' + (this.likes - this.dislikes);
            if (this.comments.length > 0) {
                result +='\nComments:\n';
                let ary = [];
                for(let i = 0; i < this.comments.length; i++) {
                    ary.push(' * ' + this.comments[i]);
                }
                result += ary.join('\n');
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + '\nViews: ' + this.views;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let result = solve();
// let p = new result.Post('the title', 'the content');
// console.log(p.toString());