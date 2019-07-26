<template>
  <div>
    <div class="post-header">

    </div>
    <div class="post-detail" v-html="content"></div>
    <div class="comment-wrapper">
      <div class="title">评论</div>
      <div class="comment-form"  :class="{focused:focused===true || otherFocused===true}">
        <div class="avatar-box">
          <div class="avatar"></div>

        </div>
        <div class="form-box" @click="handleOtherFocus">
          <div class="input-box">
            <div class="auth-card">
              <div class="rich-input"
                   :class="{empty:commentContent.length>0 ? true:false}"
                   @input="handleInput" ref="commentInput"
                   @click="handleFocus"

                   contenteditable="true" spellcheck="false"
                   placeholder="输入评论...">

              </div>

            </div>
          </div>
          <div class="action-box" >
           <div class="emoji emoji-button">
             <div class="emoji-box">
               <div class="icon"></div>
               <span>表情</span>
             </div>
             <div class="emoji-selector"></div>
           </div>
            <div class="submit">
              <span>Enter</span>
              <button @click="handleSubmit" class="submit-button">评论</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        focused: false,
        otherFocused:false,
        commentContent:""
      };
    },

    methods:{
      handleFocus(){
        if(this.focused){
          return
        }
        this.focused=true
      },
      handleBlur(){
        this.focused=false
      },
      handleSubmit(){
        // console.log(this.$refs.commentInput)
        console.log(this.commentContent);
      },
      handleInput(e){
        this.commentContent=e.target.innerText
      },
      handleOtherFocus(){
        this.otherFocused=true
        this.$refs.commentInput.focus()
      },

    },
    computed:{
      isEmpty(){
        return this.commentContent.length>0 ? true :false
      }
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
  .comment-wrapper{
    position: relative;
    background-color: #ffffff;
    .title{
      color: #8a9aa9;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      padding: 1.67rem 0 5px;
    }
    .comment-form{
      display: flex;
      position: relative;
      padding: 1rem 1.333rem;
      background-color: #fafbfc;
      border-radius: 3px;
      .avatar-box{
        flex: 0 0  auto;
        .avatar{
          margin: 0 1rem 0 0;
          width: 2.667rem;
          height: 2.667rem;
          border-radius: 50%;
          background-color: #ac4142;
        }
      }
      .form-box{
        flex: 1 1 auto;
        position: relative;
        .input-box{
          border-color: #007fff;
          font-size: 0;
          background-color: #fff;
          border: 1px solid #f1f1f1;
          border-radius: 3px;
          .auth-card{
            .rich-input{
              position: relative;
              padding: .6rem 1rem;
              font-size: 1.083rem;
              line-height: 1.7;
              color: #17181a;
              outline: none;
              min-height: 1.3em;
            }
            .rich-input:before{
              content: attr(placeholder);
              position: absolute;
              opacity: .4;
              pointer-events: none;
              user-select: none;
            }
            .rich-input.empty:before{
              display: none;
            }
          }
        }
        .action-box{
          display: flex;
          align-items: center;
          margin: .65rem 0 0;
          .emoji{
            position: relative;
            .emoji-box{
              display: flex;
              align-items: center;
              position: relative;
              color: #027fff;
              cursor: pointer;
              font-size: 1.2rem;
              .icon{
                width: 18px;
                height: 18px;
                background-color: #ac4142;
              }
              span{
                padding: .166rem;
                font-size: 13px;
              }
            }
          }
          .submit{
            flex: 0 0 auto;
            margin-left: auto;
            span{
              color: #c2c2c2;
              margin-right: 8px;
              font-size: 13px
            }
            .submit-button{
             padding: .25rem 1rem;
              font-size: .75rem;
              color: #fff;
              background-color: #027fff;
              border-radius: 2px;
              outline: none;
              border: none;
              transition: background-color .3s,color .3s;
              cursor: pointer;
            }
          }
        }
      }
    }
    .comment-form.focused{
      .form-box{
        .input-box{
          border-color: #007fff;
        }
      }
    }
  }
</style>
