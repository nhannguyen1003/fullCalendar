import { Calendar } from "@fullcalendar/core";
import adaptivePlugin from "@fullcalendar/adaptive";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import jquerySumoselect from "sumoselect";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  let calendarEl: HTMLElement = document.getElementById('calendar')!;

  var calendar = new Calendar(calendarEl, {
    initialView: "dayGridMonth",
    initialDate: "2023-05-07",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: [
      {
        title: "All Day Event",
        start: "2023-05-01",
        type: "3",
      },
      {
        title: "Long Event",
        start: "2023-05-07",
        end: "2023-05-10",
        type: "1",
      },
      {
        groupId: "999",
        title: "Repeating Event",
        start: "2023-05-09T16:00:00",
        type: "2",
      },
      {
        groupId: "999",
        title: "Repeating Event",
        start: "2023-05-16T16:00:00",
        type: "2",
      },
      {
        title: "Conference",
        start: "2023-05-11",
        end: "2023-05-13",
        type: "1",
      },
      {
        title: "Meeting",
        start: "2023-05-12T10:30:00",
        end: "2023-05-12T12:30:00",
        type: "1",
      },
      {
        title: "Lunch",
        start: "2023-05-12T12:00:00",
        type: "3",
      },
      {
        title: "Meeting",
        start: "2023-05-12T14:30:00",
        type: "2",
      },
      {
        title: "Birthday Party",
        start: "2023-05-13T07:00:00",
        type: "1",
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2023-05-28",
        type: "3",
      },
    ],
  });

  calendar.render();

  $(document).ready(function () {
    $("#selector").SumoSelect({
      placeholder: "Enter here.",
    });
  });

  $(document).ready(function () {
    $("#selector").on("change", function () {
      var events = calendar.getEvents();
      console.log($("#selector").val());
      for (var i = events.length - 1; i >= 0; i--) {
        if ($("#selector").val().includes(events[i].extendedProps.type)) {
          events[i].setProp("display", "block");
        } else {
          events[i].setProp("display", "none");
        }
      }
    });
  });
});
