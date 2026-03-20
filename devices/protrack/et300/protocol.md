---
slug: /protrack/et300/protocol
id: et300-protocol
sidebar_label: Protocol
title: Protrack - ET300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for connecting the Protrack ET300 to Plaspy for real time tracking and event reporting
keywords:
  - Protrack ET300 protocol
  - Protrack ET300 GPS protocol
  - ET300 tracking protocol
  - Protrack ET300 Plaspy compatibility
  - ET300 communication protocol
  - Protrack GPS tracker protocol
  - ET300 fleet tracking compatibility
  - Protrack ET300 integration
  - Protrack ET300 device protocol
  - ET300 telemetry
---

# Protrack - ET300 Protocol

This page summarizes the public protocol context for using the Protrack ET300 GPS Vehicle Tracker with the Plaspy platform. It highlights how the ET300 communicates usable telemetry and event data to Plaspy, and what factors influence successful integration without exposing device internals or sensitive implementation details.

The ET300 is Plaspy compatible out of the box and designed for reliable vehicle monitoring in rugged environments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always consult the manufacturer for firmware specific details.

## Protocol Overview

The tracker reporting protocol is the mechanism the ET300 uses to deliver position fixes, events, and status updates to a remote server. In general terms, this protocol defines how the device identifies itself, reports telemetry such as location and speed, and signals events like geofence breaches, power loss, or immobilizer actions.

- Enables the device to transmit location updates and event notifications to Plaspy for real time monitoring.
- Carries identity and session information so Plaspy can associate messages with a specific ET300 device.
- Conveys event types used by fleet workflows such as geofence alerts, over speed warnings, and power outage notices.
- Supports periodic reporting and event driven messages so historical trips and incident logs are usable in Plaspy.
- Operates over standard network transports so devices can report from mobile networks to Plaspy endpoints.

## How Plaspy Detects the Protocol

Plaspy’s ingestion platform accepts connections from many tracker models and determines the appropriate protocol for each device automatically when data arrives at the shared endpoint. This means most ET300 units only need to be pointed to the Plaspy endpoint to begin sending usable telemetry without manual protocol selection inside the platform.

- Plaspy listens on a single common endpoint and port for tracker connections.
- When an ET300 reports to the Plaspy endpoint, the platform inspects incoming messages and maps them to known device behaviors.
- Users typically do not need to select a specific protocol in Plaspy if the device is configured to report to the Plaspy server.
- Automatic detection helps streamline onboarding for mixed fleets that include ET300 units and other compatible trackers.
- If a device does not appear, verify device configuration, firmware version, and network reachability to the Plaspy endpoint.

## Transport and Connection Context

Connection details determine how the ET300 reaches Plaspy but do not expose protocol internals. The ET300 may be configured to use either UDP or TCP on a single Plaspy port depending on device capability and installer preferences. Devices should be able to reach the Plaspy server using the public domain or its IP address.

- Plaspy server domain is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 and can be used where a numeric host is required.
- The port used for all devices in Plaspy is 8888 and is common across supported trackers.
- The device may be configured using UDP or TCP on port 8888 according to device settings and network conditions.
- Using the Plaspy domain eases DNS based routing while the IP address provides an alternative for network environments that require it.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available events, or optional fields; confirm firmware level when troubleshooting.
- Hardware variants and factory configurations sometimes ship with different default transports or reporting intervals.
- Some features such as immobilizer control or fuel sensor telemetry may require specific wiring or firmware options to be enabled.
- Switching between UDP and TCP can affect reliability in certain mobile network conditions; choose the transport that matches device capability and carrier behavior.
- Validate the device reporting address and port are set to Plaspy’s endpoint when commissioning units.
- When in doubt, consult the manufacturer’s documentation for device specific commands and configuration instructions.

## Why Protocol Understanding Matters

A basic understanding of the ET300 communication protocol and connection context helps installers, integrators, and operations staff set up devices correctly and troubleshoot common issues that affect visibility and alerts in Plaspy.

- Confirms that devices are reporting to the correct Plaspy endpoint and port for immediate data ingestion.
- Helps diagnose why a unit may not appear in Plaspy when firmware or transport settings differ from expectations.
- Clarifies which reported events and telemetry fields can be used in automated alerts and fleet rules.
- Supports planning for reliable transport selection and network configuration for mobile deployments.
- Enables informed conversations with the device manufacturer when expected behaviors differ from deployed results.

## Why Use Plaspy with This Protocol

Using the ET300 with Plaspy provides straightforward real time tracking and event reporting for small fleets and individual vehicles. The ET300’s rugged IP65 enclosure and core telemetry features make it a practical choice for anti theft workflows, driver behavior monitoring, and basic fleet oversight, while Plaspy turns device messages into map views, alerts, and historical reports.

If you want to learn more about Plaspy’s capabilities and how the ET300 fits into a fleet tracking workflow, visit https://www.plaspy.com. For the most current device specific protocol references, firmware notes, and configuration instructions consult the manufacturer at http://www.protrackgps.in/ as implementations and firmware behavior can change over time.
