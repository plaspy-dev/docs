---
slug: /xirgo/xt24/features
id: xt24-features
sidebar_label: Features
title: Xirgo - XT24 Features
sidebar_class_name: menu_item_tracker
description: Overview of Xirgo XT24 GPS tracker features and Plaspy compatibility for vehicle tracking and OBD telemetry
keywords:
  - Xirgo XT24
  - XT24 features
  - Xirgo GPS tracker
  - XT24 OBD tracker
  - XT24 Plaspy compatibility
  - vehicle tracking
  - OBD telemetry
  - LTE Cat M1 tracker
  - fleet management tracker
  - motion detection
---

# Xirgo - XT24 Features

This page describes the public feature context for using the Xirgo XT24 with Plaspy. It summarizes the practical capabilities you can expect when the XT24 is connected to Plaspy, including its plug-and-play OBD installation, integrated GNSS receiver, LTE Cat M1 cellular connectivity, support for standard OBD-II parameters and many OEM proprietary PIDs, and a 3-axis accelerometer for motion events. The content focuses on how these features translate into visibility and telemetry inside Plaspy rather than low level configuration details.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation location, and manufacturer implementation. Depending on vehicle make and model some OBD PIDs may not be available, and certain functions may change with firmware updates or regional variants. For device specific configuration and the latest capabilities consult the manufacturer documentation and release notes.

## Feature Overview

The XT24 is a compact, plug-in OBD tracker designed for rapid deployment in passenger and light-duty vehicles while delivering GNSS position, vehicle-bus telemetry and motion data into Plaspy. It is intended to provide reliable location, speed and selected OBD parameters to support real-time tracking, fleet reporting and event-driven alerts.

- Plug-and-play OBD installation for fast self-install on compatible vehicles
- Real-time GNSS position and speed reporting for live tracking and route history
- OBD-II parameter reading plus many OEM proprietary PIDs to surface vehicle-bus telemetry
- LTE Cat M1 cellular connection to transmit telemetry efficiently to Plaspy
- 3-axis accelerometer for motion, impact and tamper awareness and related alerts

## Core Features of Xirgo - XT24

- Plug-and-play OBD interface for quick installation in passenger and light-duty vehicles
- Integrated GPS receiver and antenna for dependable position and speed reporting
- LTE Cat M1 cellular connectivity for low power wide area communication to Plaspy
- Reads standard OBD-II parameters and many OEM proprietary PIDs when available
- 3-axis accelerometer and motion detector for movement and impact events
- LED indicators for GPS lock, GSM registration and OBD communication to aid commissioning
- Reports ignition status and other vehicle-bus telemetry to Plaspy when the vehicle exposes those signals
- Powered from the vehicle OBD port with optional internal backup battery on select variants

## How These Features Work with Plaspy

Plaspy ingests location, OBD telemetry and motion events from the XT24 to provide real-time visibility, historical reporting and alerting. Once the XT24 is installed in a vehicle and communicating, Plaspy maps GNSS position to vehicle records and associates available OBD parameters with that location and time.

- Live location and speed updates displayed on Plaspy maps and dashboards
- Vehicle-bus telemetry such as ignition status and supported OBD PIDs shown in telemetry panels
- Fuel related PIDs and diagnostic parameters displayed where the vehicle supports those OBD readings
- Motion, impact and tamper events from the accelerometer used for alerts and workflows
- Historical route history and telemetry that combine GNSS and OBD data for reporting and analysis

## Typical Use Cases

- Fleet management and dispatch with live vehicle location and trip history
- Anti-theft monitoring and rapid recovery using real-time position and movement alerts
- Vehicle diagnostics and fuel monitoring where OBD PIDs are available from the vehicle
- Driver behavior and safety programs using motion events for harsh driving detection
- Rapid rollouts and large scale deployments enabled by plug-and-play OBD installation
- Maintenance planning and utilization analysis using combined GNSS and OBD telemetry

## Feature Availability Notes

- OBD PID availability depends on vehicle make, model and ECU implementation; not all vehicles expose every parameter
- Firmware version and hardware revision can affect supported features, telemetry frequency and event behavior
- Installation type and port access can influence which signals are readable from the vehicle bus
- Regional variants or certifications may change supported cellular bands or backup battery options
- For advanced functions such as immobilization workflows or integration with external peripherals, compatible hardware and integration effort may be required

## Why Use Plaspy with These Features

Using the XT24 with Plaspy gives operations teams a straightforward way to combine GNSS position, vehicle-bus telemetry and motion events into a unified fleet view. The plug-and-play OBD form factor reduces installation time while the device feeds Plaspy the inputs commonly used for tracking, reporting and event-driven workflows that support fleet optimization, theft response and basic diagnostic visibility.

Learn more about how Plaspy can use XT24 data to provide operational oversight and reporting by visiting https://www.plaspy.com. For the most current device specific details, firmware notes and manufacturer guidance, verify feature lists and technical specifications on the Xirgo website https://xirgo.com/.
