---
slug: /neomatica/adm007_ble/protocol
id: adm007_ble-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 BLE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Neomatica ADM007 BLE GPS tracker with Plaspy for tracking and BLE sensor telemetry
keywords:
  - Neomatica ADM007 BLE
  - Neomatica ADM007 BLE protocol
  - ADM007 BLE GPS protocol
  - ADM007 BLE Plaspy
  - Neomatica GPS tracker
  - GPS tracker protocol
  - BLE sensor tracker
  - fleet tracking protocol
  - vehicle gps tracking
  - Plaspy device compatibility
---

# Neomatica - ADM007 BLE Protocol

This page summarizes the public protocol context for using the Neomatica ADM007 BLE tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, what transport and connection choices are typical, and what to expect when integrating the ADM007 BLE into a Plaspy deployment.

The ADM007 BLE is a plug and play cigarette lighter GPS tracker with GPS GLONASS positioning, BLE sensor support, anti jamming detection and local logging. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact reporting behavior can vary by firmware, hardware revision and manufacturer implementation. This page provides public facing guidance and practical context without exposing private implementation details.

## Protocol Overview

The communication protocol defines how the ADM007 BLE reports GNSS positions, BLE sensor readings, status updates and alarms to a remote server such as Plaspy. At a high level the protocol enables device identification, timed or event driven reporting, and the delivery of telemetry that Plaspy can process for real time monitoring and historical analytics.

- Transmits GNSS position and BLE sensor telemetry for use in Plaspy dashboards and alerts.
- Delivers device status and event updates so Plaspy can reflect connectivity, tamper or anti jamming conditions.
- Supports local logging and deferred upload so route history is synchronized with Plaspy when connectivity is available.
- Allows remote configuration and maintenance via supported channels such as Bluetooth, SMS or GPRS according to manufacturer documentation.
- Enables the tracker to identify itself and send the minimal data Plaspy needs to map device records to accounts and vehicles.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol once a device correctly reports to the shared Plaspy endpoint. Users generally do not need to select a protocol inside Plaspy when the ADM007 BLE is configured to send data to the platform, since Plaspy inspects incoming device reports to associate them with the right parser and device record.

- Plaspy accepts device connections at the public server address d.plaspy.com and at the platform IP 54.85.159.138.
- All devices reporting to Plaspy use the same port number 8888 which simplifies configuration and onboarding.
- The ADM007 BLE may be configured to use either UDP or TCP to send reports to Plaspy depending on device settings.
- When the ADM007 BLE is pointed to the Plaspy endpoint and port 8888, Plaspy will detect the protocol automatically and map incoming data to the correct device in the platform.
- Manual protocol selection inside Plaspy is typically unnecessary if the device is configured to report to d.plaspy.com on the shared port.

## Transport and Connection Context

Connection choices determine how the ADM007 BLE reaches Plaspy but do not typically change the high level telemetry delivered. The tracker is designed to report over cellular GPRS to a remote server and can be configured to use different network transports where the device firmware supports them.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- Devices can point to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138 when network configuration requires an address instead of a hostname.
- Plaspy uses the same port 8888 for all supported devices which simplifies firewall and APN setup.
- Transport selection can affect delivery characteristics such as latency and retransmission behavior but does not change the fact that Plaspy will automatically detect the incoming protocol.
- For initial setup, ensure APN and network parameters on the ADM007 BLE are valid and that outbound connections to d.plaspy.com on port 8888 are permitted by the network.

## Protocol Compatibility Notes

- Firmware differences between ADM007 BLE hardware revisions can change available commands, reporting intervals and BLE sensor behavior.
- Manufacturer supplied configuration tools such as the ADM Configurator app and FOTA updates may modify protocol behavior over time.
- BLE sensor integration and the number of supported sensors are subject to the device firmware and the specific sensor profiles used.
- Transport choice between UDP and TCP may be restricted by carrier networks or on device configuration and may affect delivery reliability.
- Validate that the device firmware version you are deploying is documented by Neomatica for the expected reporting features.
- Always confirm configuration settings such as APN, destination host and transport protocol against the official Neomatica documentation when possible.

## Why Protocol Understanding Matters

Understanding how the ADM007 BLE communicates with Plaspy helps ensure a reliable deployment, faster troubleshooting and predictable data flows for fleet operations. Awareness of connection and protocol behavior allows teams to set up networks and device configurations that minimize downtime and ensure telemetry reaches the platform.

- Ensures correct APN and network settings so devices consistently reach d.plaspy.com on port 8888.
- Helps troubleshoot scenarios where messages are delayed, lost or not associated with the correct device in Plaspy.
- Informs choices between UDP and TCP for different operational priorities such as latency or delivery guarantees.
- Guides firmware update planning so new features or protocol changes are validated before broad rollout.
- Helps operators determine when local logging and synchronization are needed to preserve route history during connectivity gaps.

## Why Use Plaspy with This Protocol

Using the ADM007 BLE with Plaspy provides a straightforward path to live vehicle location, combined BLE sensor telemetry and historical route analysis in a single platform. Plaspy’s shared endpoint model and automatic protocol detection simplify onboarding so devices that are configured to report to the platform begin delivering usable data with minimal manual mapping.

If you want to learn more about how Plaspy handles device integration and to explore platform features, visit https://www.plaspy.com. For authoritative device specific protocol details, firmware notes and the latest implementation guidance consult the manufacturer at https://neomatica.com/ as protocol support and firmware behavior can change over time.
