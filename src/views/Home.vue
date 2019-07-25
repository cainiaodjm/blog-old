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
      <div :class="olderClass">
        <a href="javascript:void(0)" v-if="isOlder" @click="handleOlder">Older</a>
        <span v-else>Older</span>
      </div>
      <div :class="newerClass">
        <a href="javascript:void(0)" v-if="isNewer" @click="handleNewer">Newer</a>
        <span v-else>Newer</span>
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
        offset: 0,
        count: 5,
        allCount: 0
        // isOlder:false,
        // isNewer:true
      };
    },
    components: {},
    computed: {
      isOlder() {
        return this.offset + this.count < this.allCount ? true : false;
      },
      isNewer() {
        return this.offset === 0 ? false : true;
      },
      olderClass() {
        return [
          'older',
          'page-item',

        ];
      },
      newerClass() {
        return [
          'newer',
          'page-item',
          this.isNewer ? 'active' : ''
        ];
      }
    },
    methods: {
      handleOlder() {
        this.offset = this.offset + this.count;

        Post.getPostList(this.offset, this.count)
          .then((res) => {
            if (res.err_code === 0) {
              this.loadingInstance.close();
              this.posts = res.result.postList;
              this.allCount = res.result.count;
            }
          });
      },
      handleNewer() {
        this.offset=this.offset-this.count
        Post.getPostList(this.offset, this.count)
          .then((res) => {
            if (res.err_code === 0) {
              this.loadingInstance.close();
              this.posts = res.result.postList;
              this.allCount = res.result.count;
            }
          });
      }
    },
    mounted() {
      this.loadingInstance = this.$loading({
        target: this.$refs.posts,
        fullscreen: false,
        text: 'Loading',
        customClass: 'loading-Class',
      });
      Post.getPostList(this.offset, this.count)
        .then((res) => {
          if (res.err_code === 0) {
            this.loadingInstance.close();
            this.posts = res.result.postList;
            this.allCount = res.result.count;
          }
        });
    },
  };
</script>
<style lang="less">
  .posts {
    height: 100%;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;

    .page-item {
      display: flex;
      justify-content: center;
      height: 3rem;
      align-items: center;
      border: 1px solid #eee;

      a {
        color: inherit;
      }

      &:hover {
        a {
          text-decoration: underline;
          color: #ac4142;
        }

        background-color: #f5f5f5;
      }

      &:last-child {
        margin-right: -1px;
      }

    }

    .older {

      order: 1;
      width: 50%;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .newer {
      order: 0;
      width: 50%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

    }
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

        .tag {
          color: inherit;
          margin-right: .4em;

          &:hover {
            color: #ac4142;
          }
        }


      }

    }
  }
</style>
