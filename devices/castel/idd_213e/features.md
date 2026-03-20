---
slug: /castel/idd_213e/features
id: idd_213e-features
sidebar_label: Features
title: Castel - IDD-213E Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Castel IDD-213E and how it integrates with Plaspy for vehicle tracking and remote diagnostics
keywords:
  - Castel IDD-213E
  - Castel IDD-213E features
  - Castel GPS tracker
  - IDD-213E OBD
  - OBD II tracker
  - J1939 compatible tracker
  - vehicle diagnostics tracker
  - fleet tracking Plaspy
  - IDD-213E 3G tracker
  - Castel diagnostic tracker
---

# Castel - IDD-213E Features

This page describes the public feature context for using the Castel IDD-213E with Plaspy. It summarizes the device capabilities that are relevant to location tracking, vehicle diagnostics, and fleet monitoring when the IDD-213E is connected to a backend platform such as Plaspy. The content focuses on practical, user-facing functions and how those functions typically appear in a fleet management workflow.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer's implementation. Where appropriate, Plaspy presents device data and events that the IDD-213E reports, but customers should verify device specifics with the manufacturer and review firmware notes before deployment.

## Feature Overview

The Castel IDD-213E is an all-in-one on-board diagnostic and tracking device designed for passenger and commercial vehicles. It combines plug-and-play installation with diagnostic data capture and real-time location reporting to support remote diagnostics and operational monitoring.

- Plug-and-play OBD style connection that simplifies installation for compatible vehicles
- Reads ECU diagnostic information including vehicle speed, RPM, and ECT for visibility into vehicle state
- Captures diagnostic trouble codes and freeze frame data to support troubleshooting and maintenance planning
- Provides mileage and fuel consumption statistics useful for fleet performance and cost analysis
- Monitors driving behavior such as speeding, hard acceleration or deceleration, and extended idle engine time
- 3G network connectivity for continuous data transmission and SMS alarm capability for immediate alerts

## Core Features of Castel - IDD-213E

- Compatible with OBD II EOBD protocols and industry standards J1939 and J1708 for broad vehicle support
- Onboard capture of ECU parameters including speed, RPM, engine coolant temperature, and diagnostic trouble codes
- Freeze frame data collection to preserve snapshot information when a fault is detected
- Mileage tracking and fuel consumption reporting for operational metrics and reporting
- Driving behavior monitoring covering speeding, rapid acceleration or braking events, and idle time
- Plug-and-play installation designed for quick connection to the vehicle's diagnostic port
- 3G cellular connectivity for reliable data uplink and SMS alarm messages
- Ability to connect to backend servers using domain or IP based addressing for integration with fleet systems

## How These Features Work with Plaspy

Plaspy ingests and presents the IDD-213E data to give fleet managers actionable visibility and remote oversight. Plaspy automatically detects supported tracker protocols and surfaces the device's reports in the platform so teams can monitor vehicles without manual protocol mapping.

- Real-time location tracking and historical route playback based on the device's position reports
- Display of reported diagnostic parameters and trouble codes in vehicle detail views and event logs
- Aggregated mileage and fuel consumption records for reporting and trend analysis
- Event detection and alerts for speeding, hard acceleration or deceleration, and extended idle time
- Notifications or alarms forwarded into Plaspy when the device issues SMS alarm notifications or fault reports
- Centralized device connectivity and health indicators to confirm the IDD-213E is reporting to the backend

## Typical Use Cases

- Fleet management for commercial vehicles requiring combined location and diagnostic visibility
- Remote diagnostics to reduce time to repair by surfacing DTCs and freeze frame data to service teams
- Car rental operations for mileage tracking, usage monitoring, and behavior reporting
- Vehicle insurance workflows that use diagnostic and behavior data to inform risk assessments
- Driving schools and training programs to monitor driver performance patterns
- Car service shops that want prediagnostic data before a vehicle arrives for repair

## Feature Availability Notes

- Feature set and parameter names can change with firmware updates; confirm capabilities for the firmware version in use
- Hardware revisions and regional variants may affect supported protocols or available telemetry
- Installation method and vehicle diagnostics port access can influence which ECU parameters the device can read
- SMS alarm behavior depends on mobile network availability and the SIM configuration used in the device
- Integration behavior in Plaspy depends on the device reporting those fields to the backend; Plaspy presents the data the tracker sends

## Why Use Plaspy with These Features

Using the Castel IDD-213E with Plaspy combines in-vehicle diagnostic insight and location awareness into a single operational view. Plaspy organizes location, diagnostic parameters, travel metrics, and event alerts so operations teams can prioritize maintenance, monitor driver safety, and understand vehicle utilization from a central platform.

If you want to explore how Plaspy can present and act on IDD-213E data, learn more about Plaspy at https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and manufacturer guidance please verify information on the official Castel site http://www.castelecom.com/ .
