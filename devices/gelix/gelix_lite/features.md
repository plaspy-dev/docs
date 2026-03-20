---
slug: /gelix/gelix_lite/features
id: gelix_lite-features
sidebar_label: Features
title: Gelix - Gelix Lite Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Gelix Lite GPS telematics device and how it can be used with Plaspy
keywords:
  - Gelix Lite features
  - Gelix Lite GPS tracker
  - Gelix GPS tracker features
  - Gelix Lite Plaspy compatibility
  - GPS telematics device Gelix
  - GPRS and SMS reporting
  - remote firmware upgrade Gelix
  - digital input pulse counting
  - serial interface sensors
  - vehicle tracking with Plaspy
---

# Gelix - Gelix Lite Features

This page summarizes the public feature context for using the Gelix Lite telematics device with Plaspy. It focuses on the practical capabilities exposed by the device and explains how those capabilities can be used in Plaspy for location awareness, event visibility, and basic remote management. The content is intended for customers, integrators, and technical evaluators who want a concise overview of what Gelix Lite can do when integrated into a fleet or asset tracking deployment.

Exact feature availability and behavior may vary by firmware version, hardware revision, installation method, regional model, and how the manufacturer implements specific functions. For that reason this page presents feature-level context rather than device internals, and users should verify device specifics against the latest manufacturer documentation.

## Feature Overview

The Gelix Lite is a GLONASS and GPS capable telematics controller designed to track moving objects and transmit data over cellular networks. It provides configurable reporting and supports multiple server endpoints, making it suitable for integration into cloud platforms like Plaspy. Key practical capabilities include flexible data reporting options and the ability to connect external sensors and pulse counters to capture a wider range of operational signals.

- GNSS based position reporting for moving assets using GPS and GLONASS satellites
- Data transmission over cellular networks using GPRS IP reporting and SMS as a fallback
- Configurable data format and event registration to tailor what is reported and when
- Support for two receiver servers to provide primary and secondary reporting endpoints
- Remote management features including operating mode commands and remote firmware upgrade capability
- Integration options for external devices such as pulse sensors, dry contact sensors, and serial sensors

## Core Features of Gelix - Gelix Lite

- Dual GNSS support for satellite based location tracking
- GPRS IP data transmission and SMS reporting options for flexible connectivity
- Configurable reporting formats and event-driven message generation
- Support for two receiver servers to enable redundancy or split reporting flows
- Remote command support to change operating mode from a central server
- Remote firmware upgrade capability enabling updates over the air
- Digital input counting mode designed for pulse sensors and usage metering
- Serial interface data collection for external adapters and sensors

## How These Features Work with Plaspy

Gelix Lite is compatible with Plaspy and can be integrated so that its position and event data are visible within the Plaspy platform. Plaspy can receive the device's reports and present them alongside other fleet telematics data, allowing operators to correlate location, input events, and sensor readings in one place.

- Real time and historical location plotting on Plaspy maps when the device sends GNSS reports
- Event and input logging in Plaspy for digital pulse counts and dry contact changes reported by the device
- Serial sensor data forwarded to Plaspy fields when the device is configured to include that data in reports
- Use of the device's two server endpoints to configure primary reporting to Plaspy with a secondary backup server if desired
- Visibility into firmware and operating mode changes when the device reports status; remote mode commands and upgrade coordination are possible where the deployment and integration support them

## Typical Use Cases

- Fleet vehicle location tracking and routing visibility for logistics operations
- Monitoring usage counters or pulse-based meters on equipment and assets
- Remote sensor integration such as external level sensors or serial adapters for telemetry collection
- Redundant reporting setups using the device double server support to improve data reliability
- Centralized visibility of device operating mode and update status across a mixed fleet in Plaspy

## Feature Availability Notes

- Features and exact message content can depend on the device firmware version and manufacturer firmware features
- Hardware revisions and optional accessory modules may affect which external sensors and interfaces are available
- Installation choices such as wiring and sensor selection influence what inputs and pulse counting are available
- Regional cellular support and operator availability will affect GPRS and SMS reliability
- For precise commands, configuration strings, and firmware upgrade procedures consult the manufacturer documentation

## Why Use Plaspy with These Features

Using Gelix Lite together with Plaspy gives organizations a unified way to view GNSS based position data, pulse counting, and external sensor telemetry alongside other assets. Plaspy consolidates device reports into dashboards, maps, and event streams so that operations teams can monitor movement, count-based usage, and reported sensor values from a single interface. Where Gelix Lite provides remote commands and firmware upgrade capability, Plaspy can help coordinate those activities as part of a managed device estate.

To learn more about Plaspy and how it can work with Gelix devices visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so please verify the latest Gelix Lite specifications and firmware notes on the official Gelix site http://www.gelix.com/.
