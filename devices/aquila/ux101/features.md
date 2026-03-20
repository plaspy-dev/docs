---
slug: /aquila/ux101/features
id: ux101-features
sidebar_label: Features
title: Aquila - UX101 Features
sidebar_class_name: menu_item_tracker
description: Overview of Aquila UX101 GPS tracker features and how it integrates with Plaspy for vehicle tracking and fleet management
keywords:
  - Aquila UX101
  - Aquila UX101 features
  - Aquila UX101 GPS tracker
  - Aquila UX101 capabilities
  - UX101 fleet tracking
  - Aquila GPS tracker Plaspy
  - UX101 vehicle tracker
  - Plaspy compatible trackers
  - Aquila tracker features
  - UX101 data logging
---

# Aquila - UX101 Features

This page provides public feature context for the Aquila UX101 tracker and describes how those capabilities can be used with Plaspy. It focuses on practical, non sensitive information to help fleet managers and technical evaluators understand what the UX101 can report and how it appears in a Plaspy deployment.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation method, and manufacturer implementation. Where applicable, this page notes which capabilities are described by the manufacturer and encourages checking current firmware and documentation for final details.

## Feature Overview

The UX101 is a compact vehicle tracker built for fleet and asset monitoring, with rugged IP67 housing and design choices that support concealed installation. Its mix of inputs, outputs, and onboard features makes it suitable for common vehicle tracking workflows and integration with server platforms such as Plaspy.

- Rugged IP67 casing for protection in demanding vehicle environments and hidden installations
- Automotive ECU type connector for a secure installation and stable vehicle connections
- Internal GPS and GSM antennas suitable for stealth or tucked installations
- Multiple serial and USB interfaces for integration with vehicle electronics and third party accessories
- Onboard I O and accelerometer for motion detection and basic event monitoring

## Core Features of Aquila - UX101

- IP67 rated compact enclosure for durable field use
- Automotive ECU type connector to improve mechanical stability and ease of installation
- Internal GPS and GSM antennas for reliable signal in hidden placements
- Configurable connectivity options including 1 RS232 + 1 CAN or 2 RS232 ports, plus 1 USB Type port
- 2 analog inputs, 5 digital inputs, and 3 digital outputs for external sensor and event connections
- Motion sensor accelerometer for movement detection and wake logic
- Built in battery backup with reported 700mAh cell and up to 8 hours of tracking as specified by the manufacturer
- Data storage and forward architecture with onboard storage to buffer data during temporary network loss

## How These Features Work with Plaspy

Plaspy can receive and present the UX101 telemetry and event data so operators have continuous visibility into vehicle location and status. Plaspy automatically detects many tracker protocols and can accept reporting from devices configured to send data to the Plaspy ingestion endpoint.

- Location, time, speed, distance, and ignition status reported by the device are visible in Plaspy for live tracking and playback
- Digital and analog input events can appear as discrete status signals or alerts inside Plaspy dashboards and event lists
- Motion and mains battery removal alerts from the device map to visibility features that help detect tampering and unauthorised movements
- Onboard storage and forward buffering help ensure data integrity in Plaspy when the vehicle temporarily loses network connectivity
- Plaspy supports common transport setup and will detect compatible UX101 protocol implementations for reporting into the platform

## Typical Use Cases

- Commercial fleet tracking for scheduled route visibility and odometry monitoring
- Logistics and delivery oversight where concealed installation and reliable signal are important
- Asset monitoring that requires rugged casing and temporary battery backup for short power interruptions
- Security tracking that benefits from motion detection and mains battery removal alerts
- Integration scenarios where serial or USB connections forward vehicle subsystem data into a tracking workflow

## Feature Availability Notes

- Manufacturer firmware versions can enable or disable specific features and affect parameter naming or behavior
- Hardware revisions and regional variants may change available interfaces or certifications
- Installation choices such as wiring and mounting can affect sensor readings and ignition detection
- Voice communication, SDK availability, and exact storage capacity are vendor supplied features that should be validated against current device documentation
- For platform integration, Plaspy automatically detects many device protocols but final configuration details should be coordinated with your integrator or installer

## Why Use Plaspy with These Features

Using the Aquila UX101 with Plaspy provides a practical path to turn raw tracker signals into operational insights. Plaspy collects location and status data, displays vehicle histories, and surfaces input events so fleet supervisors can monitor movement, react to alerts, and maintain oversight across a mixed device fleet.

To learn more about how Plaspy works with compatible trackers and to review integration options, visit https://www.plaspy.com. For the latest device specific details including firmware behavior and hardware revisions, verify information with the manufacturer at https://www.itriangle.in/
