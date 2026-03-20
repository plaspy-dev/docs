---
slug: /navtelekom/signal_s_2653/protocol
id: signal_s_2653-protocol
sidebar_label: Protocol
title: Navtelekom - SIGNAL S-2653 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom SIGNAL S-2653 and how the device communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Navtelekom SIGNAL S-2653 protocol
  - SIGNAL S-2653 Plaspy
  - Navtelekom GPS protocol
  - SIGNAL S-2653 communication
  - vehicle telemetry protocol
  - GLONASS GPS tracker protocol
  - Plaspy device integration
  - fleet tracking SIGNAL S-2653
  - Navtelekom tracker compatibility
  - Plaspy protocol support
---

# Navtelekom - SIGNAL S-2653 Protocol

This page provides a public overview of the communication protocol context for using the Navtelekom SIGNAL S-2653 tracker with Plaspy. It focuses on the publicly available integration details that matter for sending location, telemetry and event data to the Plaspy platform without exposing manufacturer private implementation specifics.

The SIGNAL S-2653 is a professional GLONASS GPS tracker built for heavy duty and commercial vehicles, with features such as dual SIM 2G cellular connectivity, external GNSS and GSM antennas, SD card logging, CAN and RS-485 interfaces, Bluetooth 4.0 and an integrated backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware, hardware revision and manufacturer implementation.

## Protocol Overview

At a high level the tracker reporting protocol is the method the device uses to identify itself and transmit position, telemetry and event messages to a remote server. For Plaspy compatibility the protocol's public role is to make those messages usable by the Plaspy platform while preserving device features such as logging, CAN telemetry and input driven events.

- Enables periodic and event driven position reports from the SIGNAL S-2653 to a remote tracking endpoint.
- Carries vehicle telemetry including inputs, CAN and RS-485 derived data that Plaspy can map into dashboards and alerts.
- Allows the tracker to indicate device identity and status so Plaspy can associate incoming messages with the correct asset.
- Supports fallback behaviors such as onboard SD logging that Plaspy can ingest when connectivity is restored.
- Works alongside local interfaces like Bluetooth for field configuration while keeping network reporting separate and platform focused.

## How Plaspy Detects the Protocol

Plaspy accepts incoming messages on a common endpoint and automatically detects the tracker protocol for devices that are configured to report to the Plaspy endpoint. In most cases users do not need to select a protocol inside Plaspy when the SIGNAL S-2653 is correctly pointed at the Plaspy server.

- Plaspy server domain is d.plaspy.com which the device can target for reporting.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative target where DNS is not available.
- The port is 8888 and all devices in Plaspy use the same port for connectivity.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network preference.
- Plaspy automatically detects the tracker protocol so manual selection in the platform is typically unnecessary when the device reports to the Plaspy endpoint.

## Transport and Connection Context

Connection context describes how the SIGNAL S-2653 reaches the Plaspy servers over the mobile network and which addressing and transport options are commonly used. This is about network endpoints and transport modes rather than protocol internals.

- The device may use either UDP or TCP to transmit messages to the server depending on tracker configuration and firmware capability.
- Devices can be pointed to the domain d.plaspy.com or to the IP address 54.85.159.138 as the Plaspy endpoint.
- The shared port for all Plaspy supported devices is 8888 which simplifies device provisioning in the field.
- Dual SIM 2G connectivity on the S-2653 provides redundancy for cellular transport and helps maintain reporting continuity.
- Onboard SD logging and the backup battery allow the device to preserve data locally while cellular connectivity is unavailable and sync later to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available features and configuration options; verify firmware level when validating compatibility.
- Hardware revisions and regional variants may alter supported cellular bands or interface behavior and can affect integration details.
- Manufacturer configuration tools and settings may present different naming conventions for server address and transport options; follow Navtelekom guidance for correct fields.
- Choosing UDP or TCP can affect delivery characteristics in certain networks; validate transport selection against your carrier and device documentation.
- Onboard logging behavior and how cached messages are resent may vary by firmware and should be tested for your expected workflows.
- Always confirm critical integration steps against the official Navtelekom documentation to account for model specific details and updates.

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps ensure a smooth initial setup, effective troubleshooting and long term reliability for fleet deployments in Plaspy. Basic protocol awareness reduces configuration errors and helps match device capabilities to operational requirements.

- Speeds initial provisioning by ensuring the device reports to d.plaspy.com or 54.85.159.138 on the correct port.
- Helps diagnose connectivity issues such as whether a device is using UDP versus TCP or if cellular handover is affecting reports.
- Clarifies expectations for features like SD logging, CAN telemetry and event reporting so alerts and rules in Plaspy behave as intended.
- Informs decisions about firmware updates and hardware variants when certain protocol behaviors or message fields change.
- Supports planning for redundancy and resilience by understanding how dual SIM and backup logging interact with Plaspy ingestion.

## Why Use Plaspy with This Protocol

Integrating the Navtelekom SIGNAL S-2653 with Plaspy gives fleet operators access to real time location, event driven alerts and rich vehicle telemetry from CAN and RS-485 interfaces. For heavy duty and commercial vehicle deployments the S-2653's durable hardware, dual SIM connectivity and local logging complement Plaspy's tracking, reporting and alerting capabilities to improve operational visibility and incident response.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time and you should verify the latest device specific protocol information on the manufacturer website https://www.navtelecom.ru/.
