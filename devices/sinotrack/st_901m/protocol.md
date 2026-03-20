---
slug: /sinotrack/st_901m/protocol
id: st_901m-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the SinoTrack ST 901M and how it communicates with Plaspy for live tracking and telemetry
keywords:
  - SinoTrack ST 901M protocol
  - SinoTrack ST 901M GPS protocol
  - ST 901M communication protocol
  - ST 901M tracking protocol
  - SinoTrack Plaspy compatibility
  - GPS tracker protocol guide
  - vehicle tracking protocol
  - GPRS SMS tracker integration
  - ST 901M APN configuration
  - Plaspy device compatibility
---

# SinoTrack - ST-901M Protocol

This page provides public protocol context for using the SinoTrack ST-901M wired GPS tracker with Plaspy. It focuses on how the tracker communicates general telemetry and events to a third party monitoring server and what to consider when directing ST-901M data to Plaspy for live tracking, alarms, and basic remote control features.

The ST-901M reports GNSS position, ignition status and alarm events over GPRS or SMS and can be configured via SMS commands to point at a monitoring endpoint. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact report formatting and behavior can vary by firmware version, hardware revision and manufacturer implementation. Always verify device specific instructions in the official manufacturer documentation when making configuration changes.

## Protocol Overview

The ST-901M uses the device reporting protocol implemented by SinoTrack to deliver location and status data to a remote server. In practical terms that protocol defines how the tracker identifies itself, when it sends updates, and how alarms and telemetry are encoded for ingestion by a platform like Plaspy.

- Enables GNSS coordinates, timestamp and movement state to be sent from the tracker to a monitoring server.
- Carries event notifications such as ignition on off, overspeed alerts and alarm triggers so platforms can present alerts and history.
- Allows the device to be associated with a user account through identification fields such as IMEI so servers can route telemetry to the correct vehicle record.
- Supports configuration of reporting intervals and event driven reports to balance data use and timeliness.
- Provides the mechanism for platform to device command forwarding when supported by the deployment, enabling features like remote immobilizer control.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports on a shared network endpoint and automatically detects the tracker protocol used by reporting devices. That means when an ST-901M is correctly configured to send to the Plaspy endpoint, the platform will identify and process its telemetry without manual protocol selection in most cases.

- Plaspy listens on the shared server domain d.plaspy.com and the public IP 54.85.159.138 using port 8888.
- Devices can be configured to use either UDP or TCP transport to send reports to Plaspy on port 8888.
- All devices supported by Plaspy use the same port which simplifies device configuration and server routing.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol inside the platform when the device is pointed to the Plaspy endpoint.
- Correct APN and platform IP or domain configuration on the device side is required for reliable detection and reporting.

## Transport and Connection Context

Connection context covers the transport and addressing choices used by the ST-901M when sending data to a monitoring server. The ST-901M supports GPRS data forwarding and can use SMS as a fallback, and the transport method chosen affects how reports arrive at Plaspy.

- The ST-901M may be configured to use UDP or TCP on port 8888 depending on device support and your chosen setup.
- Devices can point to the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138 as permitted by device configuration.
- Port 8888 is the standard port Plaspy uses for all compatible devices so consistent settings simplify deployments.
- GPRS is the primary real time data channel while SMS may be used for configuration or as an emergency fallback when data is unavailable.
- Make sure the SIM and APN settings are correct and that the device has network access to reach the Plaspy endpoint for reliable telemetry.

## Protocol Compatibility Notes

- Firmware version differences can change report timing, available events and exact field formatting even for the same model.
- Hardware revisions or regional variants of the ST-901M may implement slightly different reporting behaviors or supported features.
- Manufacturer side configuration options such as SMS command sets determine how to update APN and platform address values that point the device to Plaspy.
- Choosing UDP versus TCP affects delivery guarantees and behavior under poor network conditions.
- Validate compatibility by testing a device end to end with Plaspy and by confirming settings in the official SinoTrack documentation.
- Platform to device command forwarding depends on operator network support, SIM plan and whether the deployment is configured to accept commands.

## Why Protocol Understanding Matters

Understanding how the ST-901M communicates helps ensure a smooth setup, reliable telemetry, and effective troubleshooting when integrating with Plaspy. Clear knowledge of the communication context reduces time to deploy and improves operational confidence for fleet managers and integrators.

- Helps confirm correct APN and platform address settings so data reaches Plaspy reliably.
- Aids in diagnosing missed reports by separating network transport issues from device level problems.
- Supports planning for event handling such as overspeed or ignition events to match reporting intervals with operational needs.
- Clarifies whether platform to device commands like remote immobilizer control are available in your deployment.
- Reduces ambiguity when validating that Plaspy has automatically detected the device protocol and is ingesting telemetry correctly.

## Why Use Plaspy with This Protocol

Using the SinoTrack ST-901M with Plaspy gives organizations a straightforward path to real time vehicle visibility and basic remote control capabilities. The ST-901M’s wired installation, ignition sensing and GPRS reporting make it a practical option for fleets, personal vehicles and asset monitoring where durable, always connected telemetry is required.

Plaspy’s unified endpoint approach means you can configure the ST-901M to report to d.plaspy.com or 54.85.159.138 on port 8888 and rely on the platform to automatically detect the tracker protocol and begin ingesting location and event data. To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and SMS configuration commands consult the manufacturer at https://www.sinotrackgps.com/ since protocol support and firmware behavior can change over time and should be verified against official sources.
