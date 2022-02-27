function solve(input) {
    let users = [];
    let articles = [];
    let comments = {};

    for (const line of input) {
        if (line.includes('user')) {
            let currUser = line.split(' ');
            currUser.shift();
            users.push(currUser[0]);

        } else if (line.includes('article')) {
            let currArticle = line.split(' ');
            currArticle.shift();
            articles.push(currArticle[0]);

        } else {
            let [user, obj] = line.split(' posts on ');
            let currArticle = obj.split(': ')[0];
            let [title, content] = obj.split(': ')[1].split(', ');

            if (users.includes(user) && articles.includes(currArticle)) {
                if (!comments.hasOwnProperty(currArticle)) {
                    comments[currArticle] = [];
                }

                comments[currArticle].push({ user, 'title': title, 'content': content });

            }
        }
    }
console.log(comments);

    let sortedCategories = Object.keys(comments).sort((a, b) => Object.values(comments[b]).length - Object.values(comments[a]).length);

    for (let currCategory of sortedCategories) {
        let currComments = comments[currCategory];
        console.log(`Comments on ${currCategory}`);

        let sortedUsers = currComments.sort((a, b) => a.user.localeCompare(b.user));

        for (const currComment of sortedUsers) {
            console.log(`--- From user ${currComment['user']}: ${currComment['title']} - ${currComment['content']}`);
        }
    }
}
solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Books: I like boobs, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])