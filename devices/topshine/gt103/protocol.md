---
slug: /topshine/gt103/protocol
id: gt103-protocol
sidebar_label: Protocol
title: TopShine - GT103 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine GT103 and how this tracker communicates with Plaspy for reliable fleet telemetry
keywords:
  - TopShine GT103 protocol
  - GT103 GPS tracker
  - TopShine GT103 GPS protocol
  - GT103 communication protocol
  - GT103 tracking protocol
  - Plaspy compatibility
  - Plaspy tracker integration
  - vehicle tracker protocol
  - fleet management tracker
  - GT103 anti theft tracker
---

# TopShine - GT103 Protocol

This page describes the public protocol context for using the TopShine GT103 GPS tracker with the Plaspy platform. It explains how the device reports position and telemetry to Plaspy in general, what role the tracker reporting protocol plays, and what to expect during setup and troubleshooting when integrating GT103 devices into fleet workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so use this document for high level guidance and consult the device manufacturer for firmware specific details.

## Protocol Overview

The GT103 tracker communicates telemetry, alarms, and basic command acknowledgements to a server using its cellular data link. The protocol is the means by which the device identifies itself, reports GPS coordinates and sensor state, and provides alarm events that Plaspy ingests for mapping, notifications, and reporting.

- Enables periodic location reporting and status updates from GT103 to Plaspy for real time tracking.
- Supplies event notifications such as SOS alarms, ignition ACC changes, geo fence triggers and over speed alerts for platform alerts.
- Carries telemetry used by Plaspy for historical playback, trip analysis and device status monitoring.
- Supports command and control flows over GPRS or SMS when the device and manufacturer firmware expose remote control features.
- Provides the device identity used by Plaspy to associate incoming data with the correct vehicle and account.

## How Plaspy Detects the Protocol

Plaspy automatically examines incoming connections to determine the tracker reporting protocol so most users do not need to pick a protocol manually. When a GT103 is configured to send data to Plaspy, the platform matches the incoming messages to supported device behaviors and routes telemetry to your account.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 which the tracker can use as its reporting endpoint.
- The port is 8888 and Plaspy uses the same port for all supported devices so you do not need multiple port entries.
- Plaspy automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint.
- In typical setups the device is simply pointed to the Plaspy endpoint and Plaspy ingests the data without requiring a manual protocol selection.
- If a device supports both data and SMS, Plaspy can ingest GPRS reports while SMS can be used as a fallback in manufacturer supported configurations.

## Transport and Connection Context

GT103 devices send data over the cellular network and can be configured to use different transport methods to reach Plaspy. Understanding the connection context helps ensure the device is directed to the correct Plaspy endpoint and port for reliable delivery.

- The device may be configured using UDP or TCP on port 8888 depending on device support and installer preference.
- Devices can point to the hostname d.plaspy.com or the server address 54.85.159.138 when configuring the reporting target.
- All devices in Plaspy use the same port which simplifies provisioning and firewall rules for fleets and integrators.
- GT103 primarily uses 2G GPRS for data reporting with SMS as a fallback where the manufacturer enables that path.
- Ensure the device SIM APN and mobile network availability for 2G are validated in the deployment area to maintain consistent connectivity.

## Protocol Compatibility Notes

- Firmware revisions can add or remove features and may change how certain events are reported, so confirm the device firmware level when validating compatibility.
- Hardware revisions or regional variants can affect supported cellular bands and transport options; verify band compatibility for your region.
- Transport selection between UDP and TCP is device dependent and should match the GT103 configuration to ensure messages reach Plaspy on port 8888.
- SMS fallback behaviors vary by manufacturer firmware and deployment settings; do not assume identical SMS command sets across firmware versions.
- APN, SIM provisioning, and operator network restrictions can interfere with GPRS reporting even when the protocol is supported.
- Always validate critical features such as remote immobilizer control, two way voice, and RFID workflows against the manufacturer documentation before large scale rollouts.

## Why Protocol Understanding Matters

A practical understanding of how the GT103 communicates with Plaspy makes setup smoother, reduces downtime during troubleshooting, and helps you manage expectations for remote features and alarms.

- Faster deployment by ensuring device reporting is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and using the correct transport.
- Quicker troubleshooting for connectivity issues by checking transport mode UDP or TCP, SIM APN, and network coverage.
- Better alarm handling by knowing which events the device reports and how those map to Plaspy alerting rules.
- Safer remote control operations by confirming manufacturer supported command channels and any required firmware behavior.
- Improved lifecycle planning by tracking firmware versions and hardware revisions that may affect long term compatibility.

## Why Use Plaspy with This Protocol

Using the TopShine GT103 together with Plaspy provides organizations a consistent way to collect vehicle location, status, and alarm data into a single fleet management view. Plaspy ingests the GT103 telemetry for mapping, notifications, historical reporting, and incident workflows that help fleets monitor safety, reduce theft risk, and improve operational oversight.

If you are evaluating or deploying GT103 units, point devices to Plaspy using the shared endpoint and port, and Plaspy will automatically detect the tracker protocol and begin ingesting data. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions check the manufacturer website at https://www.gztopshine.com/ since protocol support and firmware behavior can change over time.
