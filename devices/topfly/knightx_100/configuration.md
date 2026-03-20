---
slug: /topfly/knightx_100/configuration
id: knightx_100-configuration
sidebar_label: Configuration
title: TopFly - KnightX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TopFly KnightX 100 for use with Plaspy including SMS commands and shared server settings
keywords:
  - TopFly KnightX 100 configuration
  - TopFly KnightX 100 setup
  - KnightX 100 Plaspy configuration
  - GPS tracker configuration guide
  - TopFly tracker server settings
  - Plaspy tracker setup
  - KnightX 100 SMS commands
  - asset tracking configuration
  - GPS device integration Plaspy
  - fleet tracking setup
---

# TopFly - KnightX 100 Configuration

This page describes the public configuration context for using the TopFly KnightX 100 with Plaspy. It collects the shared server details and practical setup guidance you will need to point the device at Plaspy and verify reporting. Where available, documented SMS commands from TopFly are shown as examples for on‑device configuration.

Plaspy uses the same server endpoint and port across supported devices and automatically detects the tracker protocol, while exact manufacturer setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide to understand the required Plaspy settings and a safe, practical workflow; always confirm device specific behavior with TopFly documentation if you encounter differences.

## Configuration Overview

The goal of configuration is to prepare the KnightX 100 to send location and telemetry to Plaspy so the device appears and reports correctly in the platform. This involves specifying the Plaspy server endpoint, ensuring the device has connectivity, and validating that uplinks are being received by the Plaspy service. Plaspy uses a shared port for all supported devices and will detect the tracker protocol automatically once the device begins reporting.

- Point the KnightX 100 at the Plaspy server domain or IP so data is routed to Plaspy.
- Configure the device network settings such as APN and GPRS details so cellular data and SMS commands apply.
- Set the reporting interval to match your tracking needs and battery profile.
- Validate connectivity and confirm the device is visible in Plaspy after configuration.
- Use the provided SMS commands or manufacturer tool as appropriate for your firmware to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and Plaspy will automatically determine the correct protocol when the tracker connects.

## Typical Requirements Before Setup

- A charged KnightX 100 device and access to its SMS or manufacturer configuration method.
- A working cellular SIM with active data and SMS capability inserted in the device.
- APN credentials for the SIM carrier ready to place into the device configuration (see placeholders below).
- Access to TopFly configuration instructions or tools for your specific firmware revision.
- An administrative account in Plaspy to validate device reporting once configured.
- A plan for appropriate reporting interval balancing real time needs and battery life.

## How This Tracker Connects to Plaspy

The KnightX 100 is configured to report its position and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest updates, generate alerts, and display device history. The device will use the configured transport (UDP or TCP) and upload according to the reporting interval set on the device.

- The device sends location uplinks to d.plaspy.com or 54.85.159.138 at port 8888.
- Plaspy automatically detects the tracker protocol when the first valid packet arrives.
- Reports include location and telemetry so the device becomes visible in Plaspy dashboards.
- Event messages such as movement alerts, tamper, or panic can be forwarded to Plaspy for notifications.
- Buffered storage on the device uploads stored positions when cellular connectivity is restored.

## Common Configuration Workflow

1. Access the official TopFly configuration method for your KnightX 100 using SMS commands or the manufacturer software as applicable.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if your device requires an explicit transport selection; Plaspy accepts either and will detect the protocol automatically.
5. Configure APN and any required GPRS parameters so the device can reach the Plaspy endpoint.
6. Apply or save the configuration and restart the device if required by the manufacturer tool or SMS workflow.
7. Validate that the device reports to Plaspy by checking device status in the Plaspy console and confirming recent location updates.

The manufacturer may provide SMS commands or a desktop/mobile tool for these steps. Use the method recommended for your firmware and hardware revision.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages. The sample setup shows the device password as 0000 which is the default password in this example. Replace placeholders where required.

- Set the time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN with placeholders for APN name user and password
```
APN,0000,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the carrier APN name, [apnu] is the APN username if required, and [apnp] is the APN password if required. Leave username or password blank if your operator does not use them.

- Set the GPRS server using the Plaspy IP and port
```
IP,0000,54.85.159.138 8888#
```
This sets the device to send data to the Plaspy server at the required port. You may alternatively use the domain d.plaspy.com via manufacturer tools that accept a hostname.

- Set the update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
This example sets reporting intervals; adapt values to your tracking policy and battery requirements.

Note: These commands are representative of the SMS-based configuration sequence provided by TopFly. If your device or firmware uses a different command syntax or a configuration tool, follow the manufacturer instructions.

## Configuration Notes

- TopFly firmware revisions and regional firmware variations can affect SMS command syntax and supported parameters; confirm exact commands with the manufacturer documentation.
- Some configuration steps may be easier through the official TopFly configuration utility rather than SMS, depending on device firmware and tool availability.
- Choose TCP or UDP based on your deployment needs; Plaspy accepts both and detects the protocol automatically, but transport selection may affect packet ordering and retransmission behavior.
- When using SMS commands, ensure the device accepts SMS from your number and that the device password (example 0000) is correct for your unit.
- All Plaspy devices use the same port 8888 so ensure your device is configured to use that port or the Plaspy domain.

## Why Use Plaspy with This Configuration

Using the KnightX 100 with Plaspy provides a practical solution for organizations that need reliable visibility and operational monitoring of assets. The device’s hybrid positioning, buffered storage, and flexible reporting intervals combined with Plaspy’s automatic protocol detection and unified server settings simplify integration and speed deployment.

Learn more about Plaspy and how it supports fleet and asset workflows at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup instructions and command syntax with TopFly at https://www.topflytech.com/.
