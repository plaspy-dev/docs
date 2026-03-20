---
slug: /gotop/s7/configuration
id: s7-configuration
sidebar_label: Configuration
title: GOTOP - S7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GOTOP S7 tracker showing Plaspy server settings, setup workflow and practical guidance for live tracking
keywords:
  - GOTOP S7 configuration
  - GOTOP S7 setup
  - GOTOP S7 Plaspy
  - GOTOP S7 server configuration
  - GOTOP S7 GPS tracker
  - GOTOP S7 fleet tracking
  - Plaspy tracker setup
  - Plaspy server configuration
  - vehicle tracker configuration
  - GPS tracker setup guide
---

# GOTOP - S7 Configuration

This page provides the public configuration context for using the GOTOP S7 waterproof GPS tracker with Plaspy. It covers the shared Plaspy server settings you must point the device to, the typical setup workflow, and practical considerations based on the S7 product description and public device capabilities.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the S7 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this page focuses on the public, consistent elements required to connect the S7 to the Plaspy platform.

## Configuration Overview

The goal of configuration is to prepare the S7 so it can reliably send location and telemetry to Plaspy and become visible in the platform. The S7's cellular modem and GNSS hardware provide real-time position and sensor data that Plaspy ingests for live maps, alerts, and historical reporting. Use the shared Plaspy server settings below, confirm network connectivity, and validate reporting once the device is configured.

- Point the S7 to the Plaspy server endpoint so data packets reach Plaspy.
- Configure transport and port settings so the device can open a session to the Plaspy endpoint.
- Ensure the device has an active cellular data connection and correct APN if required.
- Save and apply configuration on the S7, then verify the device appears in Plaspy.
- Validate ignition, fuel, and RS232-sourced telemetry in Plaspy reports and dashboards.

## Plaspy Server Settings

Use the following public Plaspy endpoint values when configuring the S7. Plaspy requires the same port for all supported devices and will automatically detect the tracker protocol:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the S7 has a stable power source and is wired according to the manufacturer wiring guide.
- Install a valid cellular data SIM with active data service compatible with 4G/2G networks.
- Have access to the official GOTOP configuration method or software for the S7 (web tool, SMS commands, or manufacturer app as applicable).
- Know the device APN and any SIM authentication details if the network requires them.
- Ensure you have access to a Plaspy account or platform access to verify device reporting after configuration.
- Keep the device firmware and hardware revision information available in case vendor guidance differs by version.

## How This Tracker Connects to Plaspy

The S7 sends telemetry and positioning data over its cellular modem to the Plaspy server endpoint and port. Once configured to the shared Plaspy server, reports from the S7 are ingested by Plaspy where they appear as live location updates, events, and historical records.

- The S7 reports GPS coordinates and GNSS fix information to d.plaspy.com on port 8888.
- Ignition and ACC events from the digital input are transmitted to Plaspy for trip logging.
- Analog readings and fuel status are sent to Plaspy for telemetry and fuel monitoring dashboards.
- RS232-sourced data (for attached peripherals) is forwarded to Plaspy when configured to do so.
- Plaspy uses the same port for all devices and automatically detects the device protocol so you do not need to select a protocol type in the platform.

## Common Configuration Workflow

1. Access the official GOTOP S7 configuration method or software provided by the manufacturer.
2. In the device server settings, enter d.plaspy.com or, if required by the tool, the server IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP as the transport if the device requires you to pick one.
5. Enter any required APN or SIM network settings for the installed data SIM and save the configuration.
6. Apply or save the changes and restart the S7 if the manufacturer instructions indicate a restart is required.
7. Validate that the device reports to Plaspy by checking device status and location in the Plaspy platform.

## Example Configuration Commands

The S7 can be configured using manufacturer-provided tools, SMS command sets, or configuration software depending on firmware and vendor tooling. Exact command syntax and the available configuration channels vary by firmware revision and the vendor's provisioning tools. Refer to GOTOP documentation or the configuration interface supplied with the device for the precise commands and examples.

If you receive an SMS or CLI command list from GOTOP for server configuration, the sequence will typically include setting the server domain or IP, the port, transport selection (UDP or TCP), and APN parameters. Preserve any placeholders provided by the manufacturer for APN values and credentials when you apply settings.

## Configuration Notes

- Firmware variations may change the exact configuration steps or available command syntax. Always note the firmware version before making changes.
- TCP and UDP both work with Plaspy on port 8888; UDP is commonly used for lower overhead reporting while TCP may be chosen for session reliability depending on device support.
- APN and SIM network authentication must be correct for the S7 to establish a data connection; confirm these values with your mobile operator.
- Use the official GOTOP configuration tool or documented SMS command set for the S7 to avoid configuration mistakes.
- If you rely on RS232 peripherals, validate peripheral wiring and serial settings according to GOTOP guidance before enabling RS232 forwarding to Plaspy.

## Why Use Plaspy with This Configuration

Pairing the GOTOP S7 with Plaspy enables centralized visibility of vehicles and assets through live location, ignition events, fuel telemetry, and peripheral data. For fleet and asset managers, this combination supports operational monitoring, event-driven alerts, and historical reporting that help improve asset security and operational efficiency.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. Manufacturer specifications and configuration methods can change over time; verify the latest device-specific instructions and firmware details on the official GOTOP website https://www.gotop.cc/ before deploying at scale.
