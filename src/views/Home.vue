<template>
  <div class="posts">
    <div class="post" v-for="(item,index) in posts" :key="`post_${index}`">
      <h2 class="post-title">
       <router-link :to="`/post/${item.id}`">
       {{item.title}}
       </router-link>
      </h2>
      <p class="post-date">
        <small>{{item.summary}}</small>
      </p>
      <span class="post-date">{{item.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      posts: [
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
        {
          id: 'db31fce0-a3c2-11e9-b958-8bd10efefcfa',
          title: 'Rails, React, & GraphQL (Part 2)',
          summary:
            'Building a React & Apollo Frontend With a Graphql Rails API Backend',
          date: '23 Jun 2019',
        },
      ],
    };
  },
  components: {},
};
</script>
<style lang="less">
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
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
  }
}
</style>
