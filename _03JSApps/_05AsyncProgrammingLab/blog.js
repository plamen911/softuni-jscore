function attachEvents() {
    let appKey = `kid_ryiL8x5LW`;
    let appSecret = `3dbc84e916904e5cb0c1f5d9f46f848a`;
    let hostUrl = `https://baas.kinvey.com/appdata/${appKey}`;

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    let request = {
        url: hostUrl + '/posts',
        type: 'GET',
        headers: {
            'Authorization': 'Basic a2lkX3J5aUw4eDVMVzpjMzA4MmI1ZmQ1MDA0YTAxODdiZWJjMTQ1NGRiY2ZmZQ==',
            'X-Kinvey-API-Version': 3
        }
    };

    function loadPosts() {
        // make a GET request to "/posts"
        // https://baas.kinvey.com/appdata/kid_ryiL8x5LW/posts

        $.ajax(request)
            .then(displayPosts)
            .catch(displayError);

        function displayPosts(posts) {
            $('#posts').empty();
            for (let post of posts) {
                $('#posts')
                    .append($('<option>')
                        .attr('value', post._id)
                        .text(post.title));
            }
        }
    }

    function viewPost() {
        // 1. make a GET request to "/posts/{postId}"
        // https://baas.kinvey.com/appdata/kid_ryiL8x5LW/posts/597c779b0068fddd6312f36e
        let postId = $('#posts').val();
        if (!postId) return;

        request.url = hostUrl + '/posts/' + postId;
        $.ajax(request)
            .then(displayPost)
            .catch(displayError);

        function displayPost(post) {
            $('#post-title').html(post.title);
            $('#post-body').html(post.body);

            loadComments(post._id);
        }


        // 2. make another request to "/comments/?query={"post_id":"{postId}"}"
        // https://baas.kinvey.com/appdata/kid_ryiL8x5LW/comments
        function loadComments(postId) {
            request.url = hostUrl + '/comments/?query={"post_id":"' + postId + '"}';
            $.ajax(request)
                .then(displayComments)
                .catch(displayError);

            function displayComments(comments) {
                $('#post-comments').empty();
                for (let comment of comments) {
                    $('#post-comments').append($('<li>').text(comment.text));
                }
            }
        }
    }

    function displayError(err) {
        console.log(err.message);
    }
}