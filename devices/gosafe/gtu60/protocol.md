---
slug: /gosafe/gtu60/protocol
id: gtu60-protocol
sidebar_label: Protocol
title: Gosafe - GTU60 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Gosafe GTU60 with Plaspy for tracking and telemetry
keywords:
  - Gosafe GTU60 protocol
  - Gosafe GTU60 GPS
  - GTU60 Plaspy compatibility
  - GTU60 communication protocol
  - GTU60 tracking protocol
  - Gosafe vehicle tracker Plaspy
  - fleet tracking GTU60
  - stolen vehicle recovery GTU60
  - LTE tracker GTU60
  - GNSS telemetry GTU60
---

# Gosafe - GTU60 Protocol

This page describes the public protocol context for using the Gosafe GTU60 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, what to expect from the reporting behavior, and which connection settings are used for Plaspy ingestion. The goal is to help integrators and fleet managers understand how the GTU60 exchanges location and telemetry with a Plaspy server without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is pointed to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information below is intended as public guidance rather than a firmware specific instruction set.

## Protocol Overview

The GTU60 communicates vehicle position, motion events, and I O status to a central server using its cellular modem and GNSS receiver. The device reports location and telemetry so Plaspy can present real time tracking, alarms, and historical records. The communication protocol is the device level format and rules used to transfer that data from the tracker to Plaspy.

- Enables delivery of GNSS position, accelerometer events, and simple I O telemetry to Plaspy for mapping and alerts
- Allows the tracker to identify itself and include device identifiers needed for record association in Plaspy
- Supports periodic position updates and event driven messages such as ignition changes or crash events
- Provides a transport agnostic reporting layer that can run over TCP or UDP for connectivity flexibility
- Makes it possible for Plaspy to interpret incoming data into live location, geofence alerts, trip history, and telemetry dashboards

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common endpoint and port and applies internal detection to match the incoming stream to a known tracker type. When the GTU60 is configured to report to Plaspy, the platform listens for the device and automatically associates reports with the correct parser and device record. This means most users do not need to manually select a protocol in Plaspy when the device is correctly pointed at the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP for device reporting is 54.85.159.138
- Plaspy uses port 8888 for device reporting and ingestion
- Devices may be configured to use either UDP or TCP when reporting to Plaspy on port 8888
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol
- In typical setups the device is configured to report to the Plaspy endpoint and no manual protocol selection is required inside Plaspy

## Transport and Connection Context

The GTU60 can send its reports over the cellular network using either TCP or UDP depending on its configuration and the chosen transport for reliability or latency. Pointing the device to the Plaspy reporting endpoint is a core step for successful integration. This section outlines the public connection context you should expect when integrating the GTU60 with Plaspy.

- Devices may point to the domain d.plaspy.com or to the numeric server address 54.85.159.138
- The reporting port used by Plaspy is 8888 and is shared across all supported devices
- The GTU60 supports reporting over TCP and may also be configured to use UDP where supported by the firmware
- Choose the transport based on device configuration and network requirements; Plaspy accepts both transports on the same port
- Keep the device configured to the Plaspy endpoint to allow automatic protocol detection and ingestion

## Protocol Compatibility Notes

- Firmware variations between GTU60 units can change message timing, available fields, and optional telemetry behavior
- Hardware revisions or region specific SKUs may alter available cellular bands or default transport settings
- Manufacturer configuration defaults may use TCP or UDP and may include SMS fallback for redundancy depending on deployment
- Transport selection between TCP and UDP can affect delivery guarantees and should be matched to your operational needs
- Validate that the device is sending reports to d.plaspy.com or 54.85.159.138 on port 8888 to enable Plaspy ingestion
- Confirm any optional sensor or third party accessory integrations with the manufacturer documentation for exact wiring and reporting behavior
- When in doubt, consult the latest manufacturer resources for firmware specific instructions

## Why Protocol Understanding Matters

Understanding the GTU60 communication protocol and the transport context helps ensure reliable device onboarding, accurate telemetry, and efficient troubleshooting when devices do not report as expected. A clear view of the protocol role reduces guesswork during installation and allows you to align device configuration with Plaspy ingestion expectations.

- Ensures devices are pointed to the correct Plaspy endpoint and port for automatic detection
- Helps diagnose connectivity issues related to transport selection TCP versus UDP
- Clarifies which telemetry and events the tracker can send so Plaspy dashboards and alerts are configured correctly
- Aids in planning firmware updates and hardware rollouts by anticipating protocol behavior changes
- Supports reliable alarm routing for anti theft and crash response workflows when event mapping is known

## Why Use Plaspy with This Protocol

Using the GTU60 with Plaspy provides a practical combination for organizations that need economical but capable vehicle tracking. The GTU60 supplies GNSS position, crash capable accelerometer data, ignition sensing, and simple I O status, and Plaspy converts those inputs into live maps, alerting, trip reports, and operational dashboards that support fleet management, rental oversight, and theft recovery workflows.

Plaspy accepts GTU60 reports on a shared ingestion endpoint and port, and the platform automatically detects the tracker protocol once the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 using TCP or UDP. Learn more about Plaspy and how it can support your fleet on https://www.plaspy.com. Please note that protocol support and firmware behavior can change over time and you should verify the latest device specific protocol and implementation details with the manufacturer at https://gosafesystem.com/.
