---
slug: /zilogic/rtu/features
id: rtu-features
sidebar_label: Features
title: Zilogic - RTU Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Zilogic RTU tracker and how it integrates with Plaspy for remote monitoring
keywords:
  - Zilogic RTU
  - Zilogic RTU features
  - RTU GPS tracker
  - RTU features Plaspy
  - Zilogic BlackKite RTU
  - RTU M2M monitoring
  - HTTP MQTT tracker
  - RTU IO expansion
  - RTU ModBus support
  - RTU data buffering
---

# Zilogic - RTU Features

This page provides a public feature overview for the Zilogic RTU and explains how its documented capabilities relate to use with the Plaspy fleet and device management platform. It summarizes the practical functions a user can expect when integrating the RTU into Plaspy, based on the manufacturer description and common deployment patterns.

Exact feature availability and behavior can vary by firmware version, hardware revision, optional modules, and installation choices. Where the RTU offers optional interfaces or configurable modes, those options determine the specific functions visible in Plaspy and the way data and events are reported.

## Feature Overview

The Zilogic RTU is a cloud friendly remote telemetry unit designed for M2M applications. It supports HTTP and MQTT device protocols for cloud integration, provides IO expansion options, and includes local buffering and authentication features that help maintain reliable reporting and secure access.

- Cloud ready with HTTP and MQTT support for sending telemetry and receiving commands.
- Optional ModBus IO expansion to connect additional field sensors and controllers.
- Configurable data transmission interval with reporting frequencies starting at 30 seconds.
- Internal FLASH memory capable of storing up to 24 hours of data during cellular outages.
- Configurable device generated SMS alerts for IO state changes to notify operators.
- Optional GPS support for location reporting when the GPS option is fitted.

## Core Features of Zilogic - RTU

- HTTP and MQTT protocol support for direct integration with cloud platforms.
- Optional ModBus interface for IO expansion and connecting serial field devices.
- Configurable reporting interval from 30 seconds upwards to balance timeliness and data usage.
- Internal FLASH data buffering to retain up to 24 hours of data during GPRS outages.
- Two level authentication for remote device access and management.
- Optional GPS capability for asset or vehicle location tracking.
- Digital and analog inputs for monitoring sensors plus digital outputs for remote control.
- Status LEDs and a serial interface to assist with installation and troubleshooting.

## How These Features Work with Plaspy

When the RTU is connected to Plaspy, its cloud protocols and configurable reporting allow Plaspy to receive device telemetry, present events, and persist historical data for operational use. Plaspy detects compatible tracker protocols automatically and maps incoming data into device and event views for monitoring.

- Reporting intervals translate into the frequency of updates visible in Plaspy dashboards and maps.
- Buffered data stored during cellular outages is uploaded when connectivity resumes, preserving continuity of recorded telemetry.
- IO changes and device generated alerts can be surfaced as events or notifications in Plaspy when the device reports those state changes.
- Data from optional ModBus connected sensors or serial devices is available in Plaspy if the RTU is configured to forward that telemetry.
- Optional GPS position reports appear on Plaspy maps for location awareness when the GPS option is installed.

## Typical Use Cases

- Remote monitoring of field equipment and sensor networks with centralized cloud reporting.
- M2M telemetry collection for asset status, operational metrics, and event logging.
- Simple remote control of peripheral devices using digital outputs reported through the RTU.
- Location tracking of assets or vehicles when the optional GPS module is present.
- Maintaining data continuity through internal buffering during cellular connectivity interruptions.
- Integrating remote site IO into enterprise monitoring systems via ModBus expansion.

## Feature Availability Notes

- Some capabilities such as ModBus IO expansion and GPS are optional and depend on the specific hardware variant and ordering configuration.
- Firmware version affects supported protocol features, message formats, and configurable options like reporting intervals and alert behavior.
- Installation choices and wiring determine which inputs and outputs are available and how they function in a deployment.
- SMS alert behavior relies on cellular modem support and regional SMS service availability.
- Always confirm the exact hardware revision and firmware release for device specific limits and behaviors.

## Why Use Plaspy with These Features

Using Plaspy with the Zilogic RTU brings a standardized view of telemetry, events, and device health across deployments. Plaspy's device handling and visualization make it easier to correlate IO states, buffered telemetry, and optional GPS positions into operational dashboards and historical reports that support field operations and decision making.

To learn more about how Plaspy can work with the Zilogic RTU and other trackers, visit https://www.plaspy.com. For the latest and most detailed device-specific feature descriptions, firmware notes, and hardware options consult the manufacturer at https://zilogic.com/ since features and firmware behavior can change over time.
