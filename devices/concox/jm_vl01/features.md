---
slug: /concox/jm_vl01/features
id: jm_vl01-features
sidebar_label: Features
title: Concox - JM-VL01 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Concox JM-VL01 GPS tracker and how its location tracking, alerts, ignition detection and optional sensors integrate with Plaspy
keywords:
  - Concox JM-VL01
  - Concox JM-VL01 features
  - JM-VL01 GPS tracker
  - JM-VL01 Plaspy
  - Concox GPS tracker features
  - fleet tracking JM-VL01
  - JM-VL01 ignition detection
  - JM-VL01 geo-fence
  - JM-VL01 remote cut off
  - JM-VL01 RS485 sensors
---

# Concox - JM-VL01 Features

This page presents the public feature context for using the Concox JM-VL01 GPS tracker with Plaspy. It summarizes the device capabilities you can expect to see surfaced in Plaspy for operational monitoring, alerts, and remote oversight without delving into private or sensitive configuration specifics.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation choices, and manufacturer implementation. Use this guide to understand typical capabilities and how they map to Plaspy, and consult manufacturer documentation for the most current technical details.

## Feature Overview

The Concox JM-VL01 is a compact, field-oriented 4G tracker that provides location updates, event alerts, and optional sensor inputs suitable for fleet monitoring. It combines cellular connectivity across multiple network generations with vehicle-focused inputs to help fleets maintain visibility and respond to incidents.

- Real-time GPS location tracking for vehicle position awareness.
- Geo-fence alerts to notify on entry and exit of defined areas.
- Event-triggered alerts for driving behavior, vibration, speeding, and power loss.
- Ignition detection to report ACC status and vehicle operational state.
- Remote cut-off capability to immobilize a vehicle when a relay is installed.
- Optional RS485 fuel and temperature sensor support for fuel level change and cargo temperature monitoring.

## Core Features of Concox - JM-VL01

- Multi generation cellular support including LTE, UMTS, and GSM for data transmission.
- GPS based location tracking for live position and historical route data.
- Configurable geo-fence alerts for perimeter monitoring and automated notifications.
- Event alerts including dangerous driving behavior detection, abnormal vibration detection, speeding alerts, and power supply disconnection alerts.
- Ignition (ACC) status detection to track vehicle on/off state.
- Remote cut-off function to immobilize the vehicle when supported by the installed relay hardware.
- Optional RS485 sensor interfaces for fuel level and temperature monitoring when fitted.
- Driver panic or SOS button for discreet in-cabin emergency notification.

## How These Features Work with Plaspy

When a JM-VL01 device is registered and reporting to Plaspy, its supported telemetry and events are translated into platform objects and alerts that help operators maintain situational awareness across a fleet. Plaspy displays location, status, and event records in the platform interface and can be configured to notify teams when important conditions occur.

- Location updates appear on Plaspy maps and in trip histories for route analysis.
- Geo-fence events are surfaced as enter and exit alerts that can trigger notifications or workflows.
- Driving behavior and vibration alerts are presented as events, enabling review and follow up in Plaspy.
- Ignition status is shown in vehicle state summaries, aiding operational planning and fuel management.
- Where remote cut-off is enabled and the device is configured accordingly, Plaspy can present immobilization controls or status indicators to authorized users.
- Optional sensor data from RS485 fuel and temperature sensors can be reported into Plaspy when the device and installation support those inputs.

## Typical Use Cases

- Real-time fleet tracking and route oversight for delivery and service vehicles.
- Geofence-based site entry and exit monitoring for route compliance and scheduling.
- Driver behavior monitoring to identify risky driving and improve safety.
- Rapid response to vehicle theft or unauthorized use using ignition and remote cut-off features.
- Fuel consumption change detection and cargo temperature monitoring when RS485 sensors are installed.
- Emergency alerting for drivers using the onboard panic button.

## Feature Availability Notes

- Feature sets can differ by firmware version; some alerts or inputs may require specific firmware to be enabled.
- Hardware revisions and optional accessories determine whether RS485 sensor support or relay-based cut-off is present.
- Proper installation and wiring are required for ignition detection, remote cut-off, and external sensors to function.
- Regional product variants and cellular band support may affect network performance and availability.
- Always confirm the precise capabilities of a specific unit and its firmware by consulting the manufacturer documentation.

## Why Use Plaspy with These Features

Using the Concox JM-VL01 with Plaspy provides a straightforward path to convert device telemetry into actionable operational insight. Plaspy consolidates location data, alerts, and sensor inputs into a centralized view so operators can monitor fleet status, investigate events, and coordinate responses without managing raw device output.

Learn more about how Plaspy supports fleet visibility and alerting at https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer guidance for the JM-VL01, please verify details at the Concox website https://www.iconcox.com/ as features and behavior can change over time.
