---
slug: /wanway/gs900/protocol
id: gs900-protocol
sidebar_label: Protocol
title: WanWay - GS900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for WanWay GS900 GPS tracker and how it communicates with Plaspy for tracking and event reporting
keywords:
  - WanWay GS900 protocol
  - WanWay GS900 GPS protocol
  - WanWay GS900 communication protocol
  - GS900 Plaspy compatibility
  - WanWay tracker protocol
  - GS900 vehicle tracking
  - GS900 telemetry protocol
  - Plaspy device integration
  - fleet tracking WanWay
  - vehicle GPS Plaspy
---

# WanWay - GS900 Protocol

This page describes the public protocol context for using the WanWay GS900 tracker with Plaspy. It focuses on how the device reports position and event information to the Plaspy platform and what to consider when configuring connectivity. The GS900 is an intelligent vehicle GPS tracker built for professional monitoring and security, with 4G connectivity, GPS and BDS positioning, ACC detection, tamper alarms, overspeed alerts, mileage statistics, and remote immobilization features that feed telemetry and events into Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior can vary depending on GS900 firmware version, regional hardware variants, and manufacturer implementation, so the guidance here focuses on public, non sensitive protocol context and practical connection considerations rather than device internals.

## Protocol Overview

The tracker protocol defines the messages and signaling the GS900 uses to report location, status, and events to a remote server such as Plaspy. For Plaspy users the important aspects are reliable delivery of position and alarm data, a means for the tracker to identify itself to the platform, and consistent event reporting so Plaspy can generate live map updates, alerts, and historical records.

- Enables periodic and event driven transmission of GPS and vehicle status to the server
- Carries identity information so Plaspy can associate incoming telemetry with the correct device
- Conveys vehicle inputs and alerts such as ACC state, tamper alarm, overspeed notifications, and mileage updates
- Supports remote control commands where device and deployment policies allow actions such as immobilizer control
- Provides the observable data Plaspy uses to populate live maps, playback, alerts, and telemetry reports

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared server endpoint and port and automatically determines the tracker protocol based on the data the device sends. In most cases users do not need to manually select a protocol inside Plaspy if the GS900 is configured to report to the Plaspy endpoint with the correct network settings.

- Plaspy listens on a common port for all supported devices so the same port is used regardless of tracker model
- Plaspy automatically detects the tracker protocol when telemetry arrives at the endpoint
- If the GS900 is pointed to the Plaspy server and configured correctly, protocol selection at the platform is typically unnecessary
- Proper device identity and configuration ensure telemetry is attributed to the right asset in Plaspy
- When issues arise, reviewing device configuration and confirming the device is reporting to the Plaspy endpoint is a first troubleshooting step

## Transport and Connection Context

Connection setup is a transport level concern separate from the message protocol. The GS900 may be set to use either UDP or TCP transport depending on device support and configuration, and it can be directed to Plaspy by hostname or IP. These connection details determine how the device reaches Plaspy but do not describe the internal message format.

- Devices may be configured to report to d.plaspy.com or to the Plaspy server IP 54.85.159.138
- Plaspy receives device traffic on port 8888 and the same port is used for all supported devices
- The GS900 can use UDP or TCP on port 8888 depending on device configuration and network requirements
- Use the transport mode that matches your network environment and the GS900 firmware capabilities
- Confirm any required APN and cellular configuration so the tracker can establish a data connection to the Plaspy endpoint

## Protocol Compatibility Notes

- Compatibility can vary with GS900 firmware revisions and regional hardware variants; verify device firmware level when confirming behavior
- Manufacturer defaults for transport mode or server address may differ by batch or distributor; update settings to point to the Plaspy endpoint if required
- When choosing UDP versus TCP consider network reliability and operator NAT behavior in your deployment area
- Remote control features such as immobilizer activation depend on device wiring, configuration, and operational policies
- Plaspy detects the incoming protocol automatically but correct device identity and reporting setup are required for successful integration
- Always consult the manufacturer documentation for model specific command availability and firmware release notes

## Why Protocol Understanding Matters

Understanding how the GS900 communicates with the platform helps with initial setup, diagnosing connectivity and data issues, and ensuring consistent long term operation in Plaspy. Clear knowledge of transport choices and how the device reports events reduces setup time and helps fleet administrators maintain reliable telemetry.

- Speeds up onboarding by confirming device reporting settings match Plaspy connection details
- Makes troubleshooting more efficient when telemetry or events are missing
- Clarifies which vehicle inputs and alarms will appear in Plaspy reports and alerts
- Helps choose the appropriate transport mode for your network environment
- Aids planning for firmware updates or regional device variants that may impact behavior

## Why Use Plaspy with This Protocol

Using the WanWay GS900 with Plaspy provides centralized visibility into vehicle location, status, and security events. The GS900 supplies the telemetry Plaspy needs for live monitoring, alarm routing, and historical playback while Plaspy organizes that data into dashboards, alerts, and reports for operational use. This combination is well suited to fleet operations, rental vehicle oversight, and security focused deployments that require remote immobilization and tamper detection.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and regional variant information please verify current information on the manufacturer site https://www.wanwaytech.net/ as protocol support and device behavior can change over time.
