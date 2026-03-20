---
slug: /teltonika/fmb140/configuration
id: fmb140-configuration
sidebar_label: Configuration
title: Teltonika - FMB140 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring Teltonika FMB140 for use with Plaspy including server settings commands and setup workflow
keywords:
  - Teltonika FMB140 configuration
  - Teltonika FMB140 setup Plaspy
  - FMB140 server configuration
  - FMB140 GPS tracker setup
  - Plaspy device configuration
  - vehicle tracker FMB140
  - FMB140 CAN telemetry configuration
  - Teltonika Configurator FMB140
  - Plaspy server settings
  - FMB140 SMS command setup
---

# Teltonika - FMB140 Configuration

This page describes the public configuration context for using the Teltonika FMB140 with the Plaspy platform. It focuses on the practical server and command-level information you will need to point an FMB140 at Plaspy, validate connectivity, and enable the device for reporting. Use this page as a companion to the official Teltonika documentation and the configuration tools you already use.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the platform side requires the same endpoint and port for all supported trackers. Manufacturer-side steps can vary with firmware, hardware revision, installation type, and vendor tools such as Teltonika Configurator or SMS commands. Where available this page includes example commands and placeholders you can replace for your deployment.

## Configuration Overview

Configuring the Teltonika FMB140 for Plaspy prepares the device to send location and telemetry to Plaspy's shared endpoint and port so vehicles appear in the platform and related CAN and sensor telemetry is collected. The configuration process typically sets the APN and network credentials, selects the server endpoint and transport, and ensures the device is saved and restarted so reporting begins.

- Configure APN and network parameters required for GPRS connectivity.
- Point the device to the Plaspy server endpoint so telemetry reaches the platform.
- Choose transport (UDP or TCP) and set the common port used by Plaspy.
- Save and apply configuration then verify the device appears in Plaspy.
- Use manufacturer tools or SMS batch commands when available to update multiple devices.

## Plaspy Server Settings

- Server domain d.plaspy.com for outbound tracker connections to Plaspy
- Server IP 54.85.159.138 as an alternative endpoint for direct IP configuration
- Port 8888 which is the single port used by Plaspy for all supported devices
- Transport support for UDP or TCP; the FMB140 may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform will interpret inbound connections from the FMB140 without per device protocol selection in Plaspy

## Typical Requirements Before Setup

- A powered FMB140 installed or accessible for configuration and testing
- Active 2G GSM service and a data enabled SIM with correct APN settings for your mobile operator
- Access to Teltonika configuration tools such as Teltonika Configurator or SMS sending capability for batch commands
- Knowledge of the APN values for your SIM provider to replace APN placeholders in commands
- Confirmation of firmware version and SKU details where CAN accessory behavior matters
- Administrative access to your Plaspy account so you can verify the device appears after configuration

## How This Tracker Connects to Plaspy

When configured, the FMB140 sends position and CAN-derived telemetry to the shared Plaspy server endpoint and port. Plaspy receives device connections on the standard port and automatically determines the tracker protocol so incoming messages are parsed and mapped into the platform dashboards and reports.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138
- Outbound traffic uses port 8888 where Plaspy accepts both UDP and TCP
- Plaspy automatically detects the tracker protocol and decodes messages for display
- Telemetry including CAN parameters and accessory events is forwarded to Plaspy for real-time monitoring
- Once reporting begins you can validate visibility and events from within Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as Teltonika Configurator or the SMS batch command channel supported by the FMB140.
2. Enter the Plaspy server address using either domain d.plaspy.com or the IP 54.85.159.138 as required by your configuration method.
3. Set the destination port to 8888 which is used by all Plaspy devices.
4. Choose UDP or TCP if your device requires a transport selection and save that setting.
5. Configure APN and any required network credentials using the placeholders provided by your workflow.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy and appears in the platform; check telemetry and CAN parameters where applicable.

## Example Configuration Commands

The following example command is a public Teltonika style SMS batch command for setting basic network and server parameters. This command is provided in the public model configuration content and uses placeholders for APN values. Replace the placeholders with your operator APN and credentials before sending.

- Example SMS batch command to set APN and Plaspy server parameters

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders
  - {{apn}} should be replaced with your mobile operator APN name
  - {{apnu}} is the APN username if required by the operator; leave blank if not needed
  - {{apnp}} is the APN password if required by the operator; leave blank if not needed

Notes on usage
- The command above is commonly sent as an SMS batch command to the device or applied via Teltonika Configurator when supported by the firmware and workflow.
- The parameter sequence sets APN, APN credentials, the Plaspy domain, the port, and a flag value as provided by the public configuration content.
- Always verify the command syntax against your device firmware version and Teltonika documentation before sending.

## Configuration Notes

- Firmware differences may change parameter IDs or the required command syntax; always confirm with Teltonika documentation for your firmware version.
- The FMB140 supports both SMS based and software based configuration methods; choose the method that matches your device access and deployment scale.
- When selecting TCP versus UDP consider network requirements and latency for your use case; Plaspy supports both transports on port 8888.
- Because Plaspy uses a single shared port and automatic protocol detection, you only need to ensure the device points to d.plaspy.com or 54.85.159.138 on port 8888.
- The public example command includes APN placeholders; replace those placeholders with your SIM operator credentials before applying.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB140 with Plaspy gives fleets a path to combine real-time location with CAN-level telemetry and accessory events for richer operational insight. Configuring the device to report to Plaspy's shared endpoint simplifies deployment because the same port and automatic protocol detection apply across supported trackers, reducing per-device platform configuration.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods firmware notes and accessory compatibility verify current information on the manufacturer site https://www.teltonika-gps.com/ as manufacturer specifications and setup steps can change over time.
