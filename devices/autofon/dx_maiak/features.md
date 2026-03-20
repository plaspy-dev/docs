---
slug: /autofon/dx_maiak/features
id: dx_maiak-features
sidebar_label: Features
title: AutoFon - DX Маяк Features
sidebar_class_name: menu_item_tracker
description: Explore AutoFon DX Маяк GPS tracker capabilities and how it works with Plaspy for reliable location and event reporting
keywords:
  - AutoFon DX Маяк features
  - AutoFon DX Mayak GPS tracker
  - AutoFon DX Маяк Plaspy compatibility
  - GPS tracker features
  - GLONASS GPS tracking
  - BLE presence detection
  - GPRS SMS tracking
  - anti theft tracking
  - black box memory
  - long battery life modes
---

# AutoFon - DX Маяк Features

This page provides a public, practical overview of AutoFon DX Маяк features as they relate to monitoring with Plaspy. It describes the device capabilities you can expect to surface in a monitoring platform and explains how those capabilities are typically used in Plaspy for location awareness and event reporting.

Exact feature availability and behavior depend on the device firmware, hardware revision, installation method, and manufacturer implementation. Where useful, this page calls out general differences, but users should verify device-specific details with the manufacturer documentation and the device configuration available in Plaspy.

## Feature Overview

The AutoFon DX Маяк is a compact GPS/GLONASS tracker that reports location and events over 2G networks and provides motion sensing and BLE based presence and direction tools. It balances continuous monitoring and long-term standby operation to fit a range of tracking tasks from anti theft protection to asset and personal location monitoring.

- Accurate satellite based positioning using GLONASS and GPS for primary location data
- Cellular base station positioning when satellite signals are unavailable or restricted
- Data and events transmitted via 2G GPRS to monitoring servers or via SMS to selected numbers
- Built-in accelerometer for movement detection and impact (shock) events
- Bluetooth BLE for smartphone presence detection and BLE direction finding to assist local recovery
- Configurable operating modes to trade off responsiveness and battery life for short term tracking or long term standby

## Core Features of AutoFon - DX Маяк

- GLONASS and GPS satellite positioning for precise coordinates where available
- GSM/GPRS communication to send coordinates and recorded events to a monitoring service
- SMS reporting option for selected alerts or configurations
- Integrated accelerometer for detecting movement and shocks and for configurable motion alerts
- Bluetooth BLE module supporting smartphone presence detection and BLE-based direction finding
- Non volatile black box memory that stores unsent GPRS packets for later delivery
- Energy consumption meter to help estimate remaining battery capacity
- Multiple operating modes including continuous online and interval sleep to optimize battery life

## How These Features Work with Plaspy

Plaspy can receive and display the location, movement events, and status reports sent by AutoFon DX Маяк, providing a single view for monitoring and historical review. Plaspy automatically detects common tracker protocols and presents incoming data in the platform without requiring manual packet format handling by the end user.

- Real time or near real time location plotting based on satellite or cell tower positions reported by the device
- Event visibility for motion and shock alerts detected by the accelerometer, shown in Plaspy event logs and timelines
- Battery and device status indicators surfaced in Plaspy from the device reports so operators can schedule maintenance or replacement
- Historical location traces and stored packet delivery after connection interruptions using the device black box memory
- BLE presence or direction finding remains a local recovery aid; Plaspy reflects presence and connection state when the device reports those events
- SMS-sourced events and duplicated notifications can be routed into monitoring workflows if configured by the user and supported by the device setup

## Typical Use Cases

- Anti theft monitoring for vehicles and valuable assets using motion detection and real time location reporting
- Fleet visibility for occasional or permanent tracking where discreet installation and long battery standby are required
- Asset recovery support using BLE direction finding combined with platform reports to narrow search areas
- Personal or family tracking for children, elderly people, or pets where satellite and cellular positioning provide safety awareness
- Monitoring of seasonal or intermittently used equipment that benefits from long interval sleep battery modes
- Situations where ephemeral satellite reception exists and cell tower fallback gives continued approximate location

## Feature Availability Notes

- Feature availability and exact behavior can vary by firmware version and hardware revision from the manufacturer
- Installation type and antenna placement influence GPS/GLONASS accuracy and cellular based positioning performance
- BLE functions such as presence tagging and direction finding require the companion smartphone app and supported mobile devices
- Battery life figures depend on reporting frequency, operating mode, and environmental conditions and will vary in real use
- Some notifications and message duplication options depend on device configuration and what the manufacturer enables in firmware

## Why Use Plaspy with These Features

Using AutoFon DX Маяк with Plaspy provides a unified monitoring experience where satellite and cellular location reports, motion events, battery status, and stored packet recovery are visible in one platform. Plaspy's monitoring tools help turn device reports into operational insights, improving response times for recoveries and enabling more informed maintenance planning.

To learn more about Plaspy and how it supports trackers like the AutoFon DX Маяк visit https://www.plaspy.com. For the most current device specific feature descriptions, firmware notes, and installation guidance please consult the manufacturer site https://www.autofon.ru/ since device behavior and capabilities can change over time.
