<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <nav>
        <ul class="list-inline">
          <li><a v-link="{ name: 'Home' }">List</a></li>
          <li><a v-link="{ name: 'AddNote' }">Add</a></li>
          <!--<li class="">Hi, Danny!</li>-->
        </ul>
      </nav>
    </div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>

