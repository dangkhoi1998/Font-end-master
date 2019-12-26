<template>
  <v-app-bar id="core-app-bar" absolute app color="#f5f5f5" flat height="" >
    <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
      <v-btn v-if="responsive" dark icon @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-chip color="red">{{ title }}</v-chip>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center" class="mx-0" >
        <v-btn icon :to="to.to1">
          <v-icon color="tertiary">
            mdi-view-dashboard
          </v-icon>
        </v-btn>
        
        <v-menu bottom left offset-y transition="slide-y-transition">
          <template v-slot:activator="{ attrs, on }">
            <v-btn :class="classObject" class="toolbar-items animated infinite" icon :to="to.to2" v-bind="attrs"
              v-on="on"
            >
            
              <v-badge
                color="error"
                overlap
              >
                <template slot="badge" v-if="notifications.length>=1">
                  {{ notifications.length }}
                </template>
                <v-icon color="tertiary">
                  mdi-bell
                </v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-responsive class="overflow-y-auto" max-height="200">
            <v-card>
              <v-list dense>
                <v-list-item
                  v-for="(notification, i) in notifications"
                  :key="i"
                  @click="onClick"
                >
                  <v-list-item-title
                    style="width:100px"
                    :single-line="singleLine"
                  >
                    {{i+=1}}. {{notification}}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-responsive>
        </v-menu>
        
        <v-menu bottom center offset-y transition="slide-y-transition" >
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="toolbar-items " icon to="" v-bind="attrs"
              v-on="on"
            >
              <v-badge
                color="error"
                overlap
              >
                <v-icon color="tertiary">
                  mdi-account
                </v-icon>
              </v-badge>
            </v-btn>
          </template>
         
          <v-card>
            <v-list dense>
              <v-list-item v-for="(link, i) in links" :key="i" :to="link.to" style="text-decoration:none">
                <v-list-item-action>
                  <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>

                <v-list-item-title >{{link.text}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      singleLine: true,
      notifications: [],
      title: null,
      responsive: false,
    }),
    
    props: {
      getNotificationsApi: {
        require: true,
        type: Function
      },
      links: {
        require: true,
        type: [ Object, Array ]
      },
      to: {
        require: true,
        type: [ Object, Array ]
      }
    },

    watch: {
      '$route' (val) {
        this.title = val.name
      },
    },

    computed: {
      classObject () {
        if (this.notifications.length > 1) {
          return {
            heartBeat: 'heartBeat',
            delay1s: 'delay-1s',
            display: 'display: none'
          }
        } else {
          return {
          }
        }
      }
    },
    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },
    created () {
      this.getNotifications()
    },
    methods: {
      getNotifications () {
        this.getNotificationsApi()
        .then(response => {
          for (const i in response.data) {
            this.notifications.push(response.data[i]['work_name'])
          }
        })
      },
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClick () {
        this.setDrawer(!this.$store.state.app.drawer)
      },
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      },
    },
  }
</script>

<style>
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>
