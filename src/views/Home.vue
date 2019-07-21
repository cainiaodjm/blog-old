<template>
  <div>
    <div class="posts" ref="posts">
      <div class="post" v-for="(item,index) in posts" :key="`post_${index}`">
        <h2 class="post-title">
          <router-link :to="`/post/${item.id}`">{{item.title}}</router-link>
        </h2>
        <p class="post-date">
          <small>{{item.summary}}</small>
        </p>
        <div class="post-detail">
           <span class="post-date">
          {{item.created_at.split(' ')[0]}}
          </span>

          <div class="post-tag" v-for="(tag,index) in item.tag ">
            <a href="#" class="tag">{{tag.name}}</a>
          </div>
        </div>


      </div>
    </div>
    <div class="page">
      <div>
        Older
      </div>
      <div>
        Newer
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '@/api/post';

  export default {
    name: 'home',
    data() {
      return {
        posts: [],
        loadingInstance: null,
      };
    },
    components: {},
    mounted() {
      this.loadingInstance = this.$loading({
        target: this.$refs.posts,
        fullscreen: false,
        text: 'Loading',
        customClass: 'loading-Class',
      });
      Post.getPostList()
        .then((res) => {
          if (res.err_code === 0) {
            this.loadingInstance.close();
            this.posts = res.result.postList;
          }
        });
    },
  };
</script>
<style lang="less">
  .posts {
    height: 100%;
  }

  .post {
    margin-bottom: 2.5em;

    h2 {
      font-size: 1.25rem;
    }

    .post-title {
      margin-top: 0;

      a {
        color: #303030;
      }
    }

    .post-title:hover {
      a {
        color: #ac4142;
      }
    }

    .post-date {
      display: block;
      margin-top: 0;
      margin-bottom: 0rem;
      color: #9a9a9a;
      margin-right: .4em;
    }

    .post-detail {
      display: flex;

      .post-tag {
        color: #909090;

        .tag{
          color: inherit;
          margin-right: .4em;
        }

      }

    }
  }
</style>
