---
slug: /arknav/rx_8w/configuration
id: rx_8w-configuration
sidebar_label: Configuration
title: ArkNav - RX-8W Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the ArkNav RX-8W tracker for use with Plaspy including server settings and setup workflow
keywords:
  - ArkNav RX-8W configuration
  - ArkNav RX-8W setup
  - RX-8W Plaspy configuration
  - ArkNav GPS tracker configuration
  - RX-8W server configuration
  - vehicle tracker setup Plaspy
  - fleet tracking ArkNav
  - RX-8W GPS platform setup
  - tracker integration Plaspy
  - RX-8W installation guide
---

# ArkNav - RX-8W Configuration

This page documents the public configuration context for using the ArkNav RX-8W with Plaspy. It focuses on the shared server settings and the practical steps an installer or integrator will use to prepare an RX-8W for reporting to Plaspy. Use this guide to understand how the device is pointed to Plaspy and what to validate after configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always consult ArkNav documentation for device specific commands and behavior.

## Configuration Overview

The goal of RX-8W configuration for Plaspy is to point the tracker at the Plaspy ingestion endpoint, confirm mobile connectivity, and validate that location and telemetry are visible in the Plaspy platform. The following items summarize the practical objectives for the configuration process.

- Configure the RX-8W network settings to report to the Plaspy server endpoint.
- Ensure the device uses port 8888 which is the shared port used by Plaspy for all supported devices.
- Choose UDP or TCP transport if the device requires an explicit transport selection.
- Verify mobile network and SIM configuration so the device can reach d.plaspy.com or the Plaspy IP address.
- Confirm the device appears in Plaspy and is reporting expected telemetry and location updates.

## Plaspy Server Settings

When configuring the RX-8W for Plaspy, use these public Plaspy settings exactly as shown.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port 8888 for all devices and Plaspy automatically detects the tracker protocol when the device connects to the configured endpoint.

## Typical Requirements Before Setup

- A powered RX-8W device with access to the manufacturer configuration interface or software.
- An active SIM card and mobile network coverage compatible with the device modem when cellular reporting is required.
- Access to ArkNav configuration tools or instructions provided by your vendor or installer.
- A stable power source or charged backup battery for setup and testing.
- Ability to view server reachability from the device network for d.plaspy.com or 54.85.159.138.
- Credentials or access to the Plaspy account where the device will be observed for validation.

## How This Tracker Connects to Plaspy

The RX-8W is configured to send its position and telemetry to Plaspy using the shared Plaspy endpoint and port. Once the tracker is pointed to the Plaspy server, Plaspy will ingest the incoming messages and automatically detect the protocol to parse device data.

- The device reports location fixes and telemetry to server domain d.plaspy.com or to the server IP 54.85.159.138.
- All devices send data to port 8888 which is the single port Plaspy uses for device ingestion.
- Transport can be configured as UDP or TCP on the device if required; Plaspy supports both options.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the appropriate parser.
- After successful connection, device events and position updates become visible in the Plaspy platform.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software supplied by the manufacturer or vendor.
2. In the device server settings enter d.plaspy.com or alternatively the server IP 54.85.159.138.
3. Set the device port to 8888 which is the common Plaspy ingestion port.
4. Choose UDP or TCP as the transport protocol if the device requires a transport selection.
5. Configure any required mobile operator APN settings and ensure the SIM has data connectivity.
6. Apply or save the configuration and restart the device if the device firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device list and recent events in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and syntax vary by ArkNav firmware, vendor tools, and the chosen setup method. ArkNav devices may be configured using manufacturer software, SMS commands, or an OTA configuration mechanism depending on model and firmware. Consult ArkNav documentation or your vendor for the precise command set for your RX-8W hardware and firmware revision.

## Configuration Notes

- Firmware differences can change available commands, transport options, and OTA behavior. Confirm firmware release notes when following a command guide.
- Choose UDP or TCP according to your network requirements and the device configuration options. Both are supported by Plaspy but device behavior may differ slightly between transports.
- Ensure the carrier APN is configured correctly so the RX-8W can reach d.plaspy.com or 54.85.159.138 over the mobile network.
- Because Plaspy uses port 8888 for all devices, you do not need a unique port per device when integrating standard trackers.
- Always cross reference any SMS or console commands with the official ArkNav RX-8W documentation before applying them.

## Why Use Plaspy with This Configuration

Using the ArkNav RX-8W with Plaspy provides a straightforward path to fleet and asset visibility. The RX-8W delivers rugged hardware and flexible telemetry while Plaspy ingests device messages on a shared endpoint and automatically identifies the device protocol. This combination simplifies deployment and reduces per device configuration complexity for mixed fleets.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and hardware details verify information with ArkNav at https://www.arknavgps.com.tw/ which is the authoritative source for RX-8W documentation and updates.
