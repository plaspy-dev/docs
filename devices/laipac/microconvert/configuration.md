---
slug: /laipac/microconvert/configuration
id: microconvert-configuration
sidebar_label: Configuration
title: Laipac - MicroConvert Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Laipac MicroConvert tracker to Plaspy using shared server settings and recommended workflow
keywords:
  - Laipac MicroConvert configuration
  - Laipac MicroConvert setup
  - Laipac MicroConvert Plaspy
  - MicroConvert GPS tracker configuration
  - Laipac GPS tracker setup
  - asset tracking MicroConvert
  - MicroConvert server configuration
  - MicroConvert GPS platform setup
  - Laipac covert GPS tracker configuration
  - Plaspy tracker configuration
---

# Laipac - MicroConvert Configuration

This page documents the public configuration context for using the Laipac MicroConvert GPS tracker with Plaspy. It focuses on the practical server settings Plaspy requires, the typical setup workflow, and what you should confirm before integrating the device. Use this as a technical reference to prepare the MicroConvert for communication with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor's configuration tools. Follow the manufacturer documentation and the general guidance here to point the tracker to the Plaspy server endpoint and validate connectivity.

## Configuration Overview

Configuring the MicroConvert for Plaspy is primarily about directing the device to the Plaspy endpoint and ensuring the unit can reach Plaspy over the cellular network. The goal is to establish reliable reporting so the device is visible and manageable inside Plaspy with minimum installer effort.

- Point the MicroConvert to the Plaspy server endpoint so it sends location and event data to Plaspy.
- Ensure the device has a charged battery and active cellular connectivity appropriate for GSM GPRS reporting.
- Select the transport (UDP or TCP) if the device requires an explicit choice for data sessions to Plaspy.
- Save and apply the configuration on the MicroConvert using Laipac’s supported configuration method.
- Validate connectivity by confirming the device appears in Plaspy after restart and configuration apply.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the MicroConvert:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged MicroConvert unit with the appropriate battery version (8Ah or 21Ah) installed and connected.
- An active SIM card with data enabled for GSM GPRS reporting as supported by the MicroConvert.
- Access to the official Laipac configuration method or software for the MicroConvert (SMS, web tool, or vendor tool as provided by Laipac).
- Knowledge of whether the tracker requires selecting UDP or TCP for server transport.
- A safe installation location and magnetic attachment to suitable metal surfaces as required by the device mounting.
- Basic access to Plaspy account details so you can validate device visibility after configuration.

## How This Tracker Connects to Plaspy

The MicroConvert sends its position and status data to the Plaspy platform by opening a data session to the shared Plaspy endpoint and port. Once configured, Plaspy will automatically detect the device protocol and accept the incoming messages on the common port.

- Configure the device to report to d.plaspy.com or the server IP 54.85.159.138.
- Use port 8888 for all connections to Plaspy.
- Choose UDP or TCP as required by the MicroConvert firmware or configuration tool.
- Plaspy will automatically detect the tracker protocol so the device data is parsed correctly.
- After successful reporting, the tracker will appear in Plaspy for location visibility and event monitoring.

## Common Configuration Workflow

1. Access the official Laipac MicroConvert configuration method or software provided by the manufacturer or vendor.
2. Ensure the device has a working SIM with data and that the battery is sufficiently charged for testing.
3. Enter the Plaspy server as d.plaspy.com or optionally use 54.85.159.138 in the device server settings.
4. Set the port to 8888 in the device configuration.
5. If the device requires transport selection, choose UDP or TCP according to the device options.
6. Apply or save the configuration and perform any required restart of the device.
7. Validate that the device reports to Plaspy and appears in the platform; check for messages or heartbeat reports.

## Example Configuration Commands

The MicroConvert configuration commands vary by Laipac firmware and the configuration method provided by the vendor (for example, SMS commands, a desktop tool, or a provisioning interface). Because the exact command set depends on the manufacturer firmware and the tool you use, consult Laipac configuration documentation or your vendor tool for command syntax.

If you are using a Laipac-provided configuration tool, follow the tool prompts to set:
- Server domain to d.plaspy.com (or server IP 54.85.159.138)
- Port to 8888
- Transport to UDP or TCP if required

Note: This section does not include specific SMS or CLI commands because those are manufacturer and firmware dependent. Refer to Laipac support materials for any exact command examples.

## Configuration Notes

- MicroConvert hardware comes in two battery versions, 8Ah and 21Ah; plan testing and commissioning accordingly for power drain and reporting intervals.
- Firmware versions and regional model variants can change available configuration options; always verify which configuration methods your unit supports.
- Choose UDP or TCP based on device capability and any recommendations from the Laipac configuration tool; Plaspy supports both on the same port and detects the protocol automatically.
- If you use SMS-based configuration, confirm the correct syntax with Laipac documentation because SMS commands vary by firmware.
- After applying settings, a device restart is commonly required for settings to take effect; verify by checking the device presence in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the Laipac MicroConvert to report to Plaspy gives organizations a simple path to monitor non-powered assets using one consistent server endpoint. With Plaspy’s automatic protocol detection and shared port configuration, integration focuses on pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and validating connectivity.

To learn more about Plaspy and how it supports tracker integrations, visit https://www.plaspy.com. For the latest device specific configuration details, firmware behaviors, and manufacturer instructions, please confirm the current information at the Laipac website https://laipac.com/.
