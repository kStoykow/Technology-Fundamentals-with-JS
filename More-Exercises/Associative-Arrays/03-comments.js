function solve(input) {
    let users = [];
    let articles = [];
    let comments = {};

    for (const e of input) {
        if (e.includes('user') == true) {
            let [_, nick] = e.split('user ');
            users.push(nick);

        } else if (e.includes('article') == true) {
            let [_, article] = e.split('article ');
            articles.push(article)

        } else if (e.includes('posts on')) {
            let [nick, categoryComments] = e.split(' posts on ');
            let [article, comment] = categoryComments.split(': ');
            let [title, content] = comment.split(', ');

            if (users.includes(nick) == true && articles.includes(article) == true) {
                if (comments.hasOwnProperty(article) == false) {
                    comments[article] = [];
                }
                comments[article].push({ nick, 'title': title, 'content': content });
            }
        }
    }


    function output(obj) {
        let result = '';
        let sortedByUsers = Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
        for (const [article, comments] of sortedByUsers) {
            let sortedUsers = comments.sort((a, b) => Object.values(a)[0].localeCompare(Object.values(b)[0]))
            result += `Comments on ${article}\n`;
            for (const user of sortedUsers) {
                let [name, title, comment] = Object.values(user);
                result += `--- From user ${name}: ${title} - ${comment}\n`;
            }
        }
        return result;
    }

    return output(comments);
}
console.log(solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user aomeUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I, like them',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'aomeUser posts on Shopping: title, I go shopping every day',
    'aomeUser posts on Movies: Like, I also like movies very much']));