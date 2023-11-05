<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS } from './event-utils'
import arLocale from '@fullcalendar/core/locales/ar'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {

  components: {
    FullCalendar
  },

  data: function () {
    return {
      calendarOptions: {
        locale: arLocale,
        direction: 'rtl',

        slotDuration: '00:15:00',
        slotEventOverlap: false,
        slotLabelFormat: "HH:mm",
        allDaySlot: false,

        themeSystem: 'bootstrap5',
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        initialView: 'dayGridMonth',
        events: [],
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventDidMount: this.handleEventMount,
        eventMouseEnter: this.handleEventMouseEnter,
        datesSet: this.onDateSet
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    }
  },

  methods: {

    onDateSet(newDates) {
      const newMonth = newDates.view.currentStart;
      console.log('User navigated to month:', newMonth);
    },

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },

    handleDateSelect(selectInfo) {
      console.log(selectInfo)
      // let title = prompt('Please enter a new title for your event')
      // let calendarApi = selectInfo.view.calendar

      // calendarApi.unselect() // clear date selection

      // if (title) {
      //   calendarApi.addEvent({
      //     id: createEventId(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   })
      // }
    },

    handleEventClick(clickInfo) {
      // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      //   clickInfo.event.remove()
      // }

      console.log(clickInfo.event)
    },

    handleEvents(events) {
      this.currentEvents = events
    },

    handleEventMouseEnter(args) {
      const dateString = args.event.startStr;
      const date = new Date(dateString);
      const timeString = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      tippy(args.el, {
        placement: 'top',
        arrow: true,
        content: '<strong>(' + timeString + ') <span style="color: aqua;">' + args.event.title + '</span></strong>',
        allowHTML: true,
      });
    },
  },

  created() {
    setTimeout(() => {
      this.calendarOptions.events = INITIAL_EVENTS
    }, 2000);
  }
}
</script>

<template>
  <div class='demo-app' id="app">
    <div class='demo-app-main'>
      <FullCalendar class='demo-app-calendar' :options="calendarOptions">
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>
h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.classone {
  background-color: coral !important;
  color: #eaf9ff !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
