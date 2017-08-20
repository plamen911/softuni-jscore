let catalogService = (() => {
    function loadPosts() {
        // Request posts from db
        return requester.get('appdata', 'posts', 'kinvey');
    }

    function loadMyPosts() {
        return requester.get('appdata', 'posts?query={"author":"' + auth.getUsername() + '"}&sort={"_kmd.ect": -1}', 'kinvey');
    }

    function loadPostDetails(postId) {
        return requester.get('appdata', 'posts/' + postId, 'kinvey');
    }

    function loadPostComments(postId) {
        return requester.get('appdata', 'comments?query={"postId":"' + postId + '"}', 'kinvey');
    }

    function editPost(postId, url, title, imageUrl, description) {
        let postData = {
            author: auth.getUsername(),
            title,
            url,
            imageUrl,
            description
        };

        return requester.update('appdata', 'posts/' + postId, 'kinvey', postData);
    }

    function createPost(url, title, imageUrl, description) {
        let postData = {
            author: auth.getUsername(),
            title,
            url,
            imageUrl,
            description
        };

        return requester.post('appdata', 'posts', 'kinvey', postData);
    }

    function createComment(postId, content) {
        let commentData = {
            author: auth.getUsername(),
            content,
            postId
        };

        return requester.post('appdata', 'comments', 'kinvey', commentData);
    }

    function deletePost(postId) {
        return requester.remove('appdata', 'posts/' + postId, 'kinvey');
    }

    function deleteComment(commentId) {
        return requester.remove('appdata', 'comments/' + commentId, 'kinvey');
    }

    return {
        loadPosts,
        loadMyPosts,
        loadPostDetails,
        loadPostComments,
        editPost,
        createPost,
        deletePost,
        createComment,
        deleteComment,
    }
})();