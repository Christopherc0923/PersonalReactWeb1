import React, { Component } from "react";

export default function Timeline() {
  return (
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fas fa-circle"></i>
        </div>
        <div class="timeline-content">
          <h3 class="timeline-title">Event Title 1</h3>
          <p class="timeline-description">Event description goes here.</p>
          <span class="timeline-date">Date 1</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fas fa-circle"></i>
        </div>
        <div class="timeline-content">
          <h3 class="timeline-title">Event Title 2</h3>
          <p class="timeline-description">Event description goes here.</p>
          <span class="timeline-date">Date 2</span>
        </div>
      </div>
    </div>
  );
}
