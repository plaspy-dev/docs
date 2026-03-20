---
slug: /globalsat/tr_300/protocol
id: tr_300-protocol
sidebar_label: Protocol
title: GlobalSat - TR-300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the GlobalSat TR 300 personal tracker with Plaspy for reliable remote monitoring
keywords:
  - GlobalSat TR 300 protocol
  - GlobalSat TR 300 GPS protocol
  - TR 300 tracking protocol
  - GlobalSat tracker protocol
  - TR 300 Plaspy compatibility
  - Plaspy device protocol
  - GPS tracker communication
  - personal tracker integration
  - TR 300 configuration
  - real time tracking protocol
---

# GlobalSat - TR-300 Protocol

This page describes the public protocol context for using the GlobalSat TR-300 personal tracker with Plaspy. It explains how the tracker communicates in general terms, what connection endpoints are used by Plaspy, and how protocol considerations affect setup and operation without exposing private or sensitive implementation details.

The TR-300 is a compact 3G personal tracker designed for safety monitoring and two way communication and supports remote configuration and tracking. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical compatibility guidance.

## Protocol Overview

The TR-300 communicates location, status, and alert information to a remote server using its reporting protocol. That protocol defines how the device identifies itself, transmits position and event data, and supports remote commands that the monitoring system can use for configuration or alerts.

- The protocol carries essential telemetry such as GPS coordinates, timestamps, battery and signal status, and SOS events for Plaspy to process.
- Identification fields in device reports allow Plaspy to associate messages with the correct TR-300 device record.
- The protocol enables remote configuration and periodic reporting so the device can be managed from a monitoring platform.
- Reporting intervals and event triggers determine how frequently Plaspy receives updates from the TR-300.
- The protocol works together with transport selection so reports can be delivered reliably to Plaspy for real time monitoring.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and to match incoming messages to the appropriate handler automatically. When a TR-300 is configured to report to Plaspy, the platform identifies the device type from the incoming connection and payload characteristics so manual protocol selection is often unnecessary.

- Plaspy listens on a single shared endpoint for device reports and uses the incoming traffic to determine the tracker type.
- If the TR-300 is pointed to the Plaspy server and sending its standard reports, Plaspy will automatically detect the tracker protocol.
- Users typically do not need to set a protocol option inside Plaspy if the device is configured to report to Plaspy correctly.
- Proper device identification depends on the device sending its usual identification fields and following its firmware behavior when reporting to a server.
- For troubleshooting, check that the device is configured to report to the Plaspy endpoint and that any carrier or firewall allows outbound device traffic.

## Transport and Connection Context

The TR-300 can deliver reports over packet data networks to a Plaspy endpoint. Plaspy provides a single public server address and listens on a single port for all supported devices, and the TR-300 may be configured to use either common transport protocols depending on its firmware and settings.

- Plaspy server domain is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 and can be used if DNS is not available.
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and carrier configuration.
- Ensure the device APN and data plan allow outbound connections to the Plaspy endpoint and that any network translation preserves the device outbound transport.

## Protocol Compatibility Notes

- Firmware differences can change how the TR-300 encodes identifiers or which reporting modes are available, so behavior may vary between firmware versions.
- Hardware revisions and regional variants sometimes alter supported transport or available features such as two way voice or specific alert fields.
- Some TR-300 units support remote configuration via GPRS or SMS; when using IP reporting, verify the device is pointed to the Plaspy endpoint.
- Choosing UDP versus TCP can affect delivery characteristics; select the transport the device firmware supports and that works best on your network.
- Validate compatibility by confirming the device can successfully establish a session to d.plaspy.com or 54.85.159.138 on the shared port.
- Always consult manufacturer release notes for firmware or feature changes that may affect reporting behavior.

## Why Protocol Understanding Matters

Understanding the TR-300 reporting protocol helps ensure reliable setup, faster troubleshooting, and consistent monitoring results in Plaspy. Even when Plaspy automatically detects the protocol, knowing the high level communication context reduces configuration errors and speeds resolution of connectivity issues.

- Correct transport and server settings prevent common connectivity failures during initial setup.
- Knowing which events the device reports helps configure alerting and geofence behavior in Plaspy.
- Awareness of firmware and hardware differences reduces time spent debugging inconsistent telemetry.
- Understanding reporting intervals and power modes aids in balancing update frequency against battery life.
- Clear expectations about two way communication and SOS reporting help ensure emergency workflows operate as intended.

## Why Use Plaspy with This Protocol

Using the GlobalSat TR-300 with Plaspy provides a practical way to centralize position, status, and emergency alerts from personal trackers into a single monitoring platform. Plaspy’s automatic protocol detection and shared endpoint approach make it straightforward to receive TR-300 reports once the device is pointed to the Plaspy server.

If you need to learn more about how Plaspy handles device integrations, or to confirm specific behavior for your deployment, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://www.globalsat.com.tw/ as device behavior and firmware features can change over time.
