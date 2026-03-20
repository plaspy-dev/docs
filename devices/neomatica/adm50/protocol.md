---
slug: /neomatica/adm50/protocol
id: adm50-protocol
sidebar_label: Protocol
title: Neomatica - ADM50 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Neomatica ADM50 and how the tracker communicates with Plaspy for real time tracking
keywords:
  - Neomatica ADM50 protocol
  - ADM50 GPS protocol
  - Neomatica ADM50 communication protocol
  - ADM50 tracking protocol
  - Neomatica GPS tracker Plaspy
  - ADM50 Plaspy compatibility
  - personal GPS tracker protocol
  - asset tracker protocol integration
  - vehicle tracking protocol
  - GNSS tracker compatibility
---

# Neomatica - ADM50 Protocol

This page provides the public protocol context for using the Neomatica ADM50 personal GPS tracker with Plaspy. It explains, at a high level, how the ADM50 communicates positioning and event telemetry to Plaspy for live mapping, alerts, and historical reporting without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this guide focuses on the observable connection context and practical compatibility considerations for ADM50 deployments on Plaspy.

## Protocol Overview

The communication protocol for the ADM50 defines how the device reports GNSS coordinates, motion and alarm events, battery and status information, and stored track history to a remote server such as Plaspy. In practice, the protocol enables the tracker to establish a data session with Plaspy and deliver telemetry that the platform can present on maps, feeds, and alert rules.

- Enables the ADM50 to send location fixes and event notifications to Plaspy for real time tracking.
- Allows device identity and basic status information to be associated with reported telemetry so Plaspy can map reports to the correct asset.
- Supports configurable reporting intervals and event driven reports such as panic button presses and motion alerts.
- Carries auxiliary information that Plaspy uses for battery monitoring, movement detection, and route reconstruction.
- Operates over GSM GPRS transport to deliver data to Plaspy when network coverage is available.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and uses that entry point to identify the tracker protocol being used. Most ADM50 units listed as Plaspy compatible simply need to be pointed at the Plaspy endpoint and port to begin reporting; Plaspy will detect the tracker protocol automatically and process incoming telemetry accordingly.

- Plaspy listens on the shared endpoint d.plaspy.com and accepts connections sent to 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port, simplifying device configuration and reducing per device setup steps.
- Plaspy automatically detects the tracker protocol when a properly configured device reports to the endpoint, so manual protocol selection in Plaspy is generally not required.
- If a device is configured to report to the Plaspy endpoint and uses supported transport, it typically starts sending usable telemetry without additional platform configuration.
- Users should ensure device reporting settings match the chosen transport and endpoint to let Plaspy detect and handle the device protocol.

## Transport and Connection Context

The ADM50 sends telemetry over cellular GPRS to an external server and can be configured to use UDP or TCP transport depending on device settings and firmware. For Plaspy integration, point the ADM50 to the Plaspy endpoint and the common Plaspy port so the device can establish a session and deliver reports.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- The common Plaspy port for device reporting is 8888 and Plaspy accepts both UDP and TCP on that port where device firmware supports it.
- The ADM50 can be set to use either UDP or TCP on port 8888 depending on configuration and desired tradeoffs between reliability and simplicity.
- Using the shared domain name d.plaspy.com allows devices to follow DNS changes without reconfiguration if Plaspy updates endpoints.
- Confirm the ADM50 firmware allows selecting UDP or TCP and that the reporting interval or event triggers are configured to match your monitoring needs.

## Protocol Compatibility Notes

- Firmware version differences can change available features, reporting fields, and transport options. Verify the device firmware level when confirming compatibility.
- Hardware revisions or discontinued status may affect availability of specific functions or configuration methods for the ADM50.
- Manufacturer configuration parameters such as APN settings, transport selection, and reporting server fields must be set correctly for Plaspy to receive telemetry.
- Because the ADM50 supports multiple operating modes, ensure the device is in the correct mode for your use case so that expected telemetry is reported.
- Network conditions and SIM provisioning can affect telemetry delivery even when protocol settings are correct.
- Always validate expected behavior in a controlled test before deploying multiple units in production.

## Why Protocol Understanding Matters

A practical understanding of the ADM50 communication protocol and connection context helps ensure reliable setup, faster troubleshooting, and consistent long term operation with Plaspy. Knowing what the device is expected to send and how it reaches the platform reduces surprises during integration and when diagnosing reporting gaps.

- Confirms the device is pointed at the correct Plaspy endpoint and port so telemetry is delivered.
- Helps identify whether transport selection or APN configuration is the root cause of missing or delayed reports.
- Aids in interpreting device behavior differences that stem from firmware or hardware revisions.
- Enables planning for battery and reporting tradeoffs when configuring update intervals and operating modes.
- Supports effective verification of alarm and event reporting such as panic button pushes and motion alerts.

## Why Use Plaspy with This Protocol

Using the ADM50 with Plaspy provides an efficient path for personal and asset monitoring projects that need a compact tracker with long standby life and event driven reporting. Plaspy ingests the ADM50 telemetry for real time mapping, alerting, and historical route reconstruction, making it suitable for use cases ranging from personal safety to remote asset protection.

If you want to learn more about Plaspy and how the platform handles device integration, visit https://www.plaspy.com to explore features and deployment options. For the most current and device specific protocol, firmware, and availability details for the ADM50, consult the manufacturer documentation at https://neomatica.com/ which remains the authoritative source for device behavior and firmware updates.
