<template>
  <div>
    <div class="post-header">

    </div>
    <div class="post-detail" v-html="content"></div>
  </div>
</template>
<script>
  import marked from 'marked';
  import highlight from 'highlight.js';
  import 'highlight.js/styles/dark.css';
  import Post from '@/api/post';

  export default {
    data() {
      return {
        id: '',
        content: '',
      };
    },
    mounted() {
      this.id = this.$route.params.id;
      Post.getPostById(this.id)
        .then((res) => {
          if (res.err_code === 0) {
            this.content = res.result.content;

            marked.setOptions({
              renderer: new marked.Renderer(),
              highlight(code, lang) {
                console.log(lang);
                return highlight.highlightAuto(code).value;
              },
              pedantic: false,
              gfm: true,
              breaks: false,
              sanitize: false,
              smartLists: true,
              smartypants: false,
              xhtml: false,
            });
            this.content = marked(this.content);
          }
        });
    },
  };
</script>
<style lang="less">
  // * {
  //   white-space: pre-line;
  // }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 0.8rem;
    line-height: 1.4;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f9f9f9;
  }

  .post-detail {
    ul {
      padding-inline-start: 40px;

      li {
        // display: flex;
      }
    }

    img {
      max-width: 100%;
    }

    pre {
      background: #282c34;
      color: #abb2bf;

      code {
        padding: 0;
        font-size: 100%;
        color: inherit;
        background-color: transparent;
      }
    }

    p {
      code {
        color: #ac4142;
      }

      a {
        color: #ac4142;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    ul {
      li {
        a {
          color: #ac4142;
        }
      }
    }
  }
</style>
