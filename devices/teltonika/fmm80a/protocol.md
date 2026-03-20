---
slug: /teltonika/fmm80a/protocol
id: fmm80a-protocol
sidebar_label: Protocol
title: Teltonika - FMM80A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for using the Teltonika FMM80A with Plaspy including connection context and practical compatibility notes
keywords:
  - Teltonika FMM80A protocol
  - Teltonika FMM80A GPS protocol
  - FMM80A Plaspy compatibility
  - Teltonika OBDII tracker protocol
  - FMM80A communication protocol
  - Teltonika FMM80A tracking protocol
  - Plaspy device protocol
  - vehicle tracking FMM80A
  - fleet management Teltonika FMM80A
  - BLE sensor integration FMM80A
---

# Teltonika - FMM80A Protocol

This page describes the public protocol context for using the Teltonika FMM80A with the Plaspy platform. It focuses on how the device reports telemetry and position data to Plaspy and what role the device communication protocol plays in reliable, day to day tracking and fleet operations. The FMM80A is a plug and play OBD II tracker with LTE Cat M1 and NB IoT connectivity, BLE sensor support, and a configurable accelerometer, all of which feed telematics data that Plaspy ingests.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact packet behavior and device features can vary by firmware, hardware revision, or manufacturer configuration, so this page provides high level protocol context and practical guidance rather than firmware specific internals.

## Protocol Overview

The tracker communication protocol is the mechanism by which the FMM80A delivers position, telemetry, and event information to Plaspy. At a high level the protocol allows the device to identify itself, send time stamped location and sensor data, and trigger event messages (for example accelerometer based incidents or BLE sensor alerts) that Plaspy can display or act on.

- Enables authenticated reporting of GPS location and basic vehicle telemetry from the OBD II interface to Plaspy.
- Carries sensor and event data such as accelerometer traces and BLE sensor readings for condition monitoring and incident review.
- Includes device identification and session context so Plaspy can associate incoming reports with the correct asset record.
- Supports periodic and event driven reporting so live tracking and historical replay are both possible.
- Works together with device configuration and firmware settings to control reporting frequency, event thresholds, and sensor integration.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and telemetry on a shared endpoint and automatically detects the tracker protocol based on the data the device sends. In most deployments you do not need to tell Plaspy which protocol the device uses as long as the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens for device connections on the shared domain d.plaspy.com and the public IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy processes reports from different models on that port.
- The standard Plaspy port for device reporting is 8888 and devices may be set to use that port.
- Plaspy automatically detects the tracker protocol when a properly configured device begins reporting to the Plaspy endpoint.
- Users typically only need to configure the device to point to the Plaspy endpoint and select TCP or UDP as supported by the device.

## Transport and Connection Context

Connection transport covers how the FMM80A sends its protocol payload to Plaspy. The FMM80A supports cellular transports and can be configured to use either UDP or TCP depending on firmware and provisioning choices. Correct transport and endpoint configuration are key to ensuring reliable delivery of telemetry and events.

- Devices may be configured to send data to d.plaspy.com or to the numeric address 54.85.159.138 depending on deployment preferences.
- The port used for all devices in Plaspy is 8888 and the FMM80A can be set to use TCP or UDP on that port.
- TCP may be chosen where guaranteed delivery and session state are required, while UDP can be used where lower overhead is preferred and the device supports it.
- Ensure the device APN and transport settings are provisioned so the tracker can reach the Plaspy endpoint over the carrier network.
- Network level allowances such as firewall rules should permit outbound traffic to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change available telemetry fields, event behaviors, and transport support. Confirm the firmware level when validating compatibility.
- Hardware variants or regional models may enable or disable specific radios or BLE features that affect data reported to Plaspy.
- Manufacturer tools and remote management may be used to update configuration to match Plaspy reporting requirements.
- Choosing TCP versus UDP can impact delivery characteristics; verify the device is configured for the expected transport.
- Always validate key reporting scenarios such as ignition state, crash events, and BLE sensor messages during initial testing.
- When in doubt, compare live device reports with Plaspy ingestion to confirm that expected fields and events arrive correctly.

## Why Protocol Understanding Matters

Understanding how the FMM80A communicates helps streamline deployment, troubleshoot issues faster, and maintain long term reliability for fleet operations on Plaspy. A clear view of transport, reporting cadence, and event handling reduces configuration errors and assists in operational monitoring.

- Shortens setup time by ensuring devices are pointed to the correct Plaspy endpoint and port.
- Helps pinpoint connectivity versus device configuration issues during diagnostics.
- Ensures expected events such as crash detections and BLE alerts are captured and processed.
- Guides decisions on reporting frequency and transport selection for battery and data optimization.
- Supports smoother firmware rollouts and configuration changes through Teltonika management tools.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM80A with Plaspy provides organizations with rapid time to value for vehicle tracking, fleet monitoring, and condition sensing. The plug and play OBD II form factor simplifies installation while cellular and BLE capabilities expand the telemetry you can collect. Plaspy ingests location, event, and sensor data to provide live maps, alerts, and historical reporting that support operations, safety, and fleet analytics.

To learn more about Plaspy please visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer documentation verify information on the Teltonika official site https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
