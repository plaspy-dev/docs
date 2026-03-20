---
slug: /teltonika/fmb130/configuration
id: fmb130-configuration
sidebar_label: Configuration
title: Teltonika - FMB130 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for configuring the Teltonika FMB130 to report to Plaspy using shared server settings and automatic protocol detection
keywords:
  - Teltonika FMB130 configuration
  - Teltonika FMB130 setup
  - FMB130 Plaspy configuration
  - FMB130 GPS tracker setup
  - Teltonika tracker configuration
  - Plaspy GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - Teltonika Configurator setup
  - FMB130 server configuration
---

# Teltonika - FMB130 Configuration

This page provides public configuration context for using the Teltonika FMB130 with the Plaspy fleet platform. It focuses on the shared, public server settings Plaspy requires and practical steps you can use with manufacturer tools or SMS commands to point a device at Plaspy for real time tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary with firmware version, hardware revision, installation type, and the configuration tool you use. This page includes an example Teltonika setparam command that demonstrates how to set APN placeholders and the Plaspy endpoint; use it as a public reference and verify specifics with Teltonika documentation and your device firmware notes.

## Configuration Overview

The goal of configuration is to prepare the FMB130 so it reliably sends position and telemetry to Plaspy and appears in your fleet dashboard. That includes setting connectivity parameters, assigning the Plaspy server endpoint and port, and validating the device reports successfully.

- Configure device APN and network parameters so the tracker has a working data connection.
- Point the tracker to the Plaspy server domain or IP and set the shared port value used by Plaspy.
- Choose transport (UDP or TCP) if the device requires a transport selection during setup.
- Save and apply the configuration, then verify the device is visible and reporting in Plaspy.
- Use manufacturer tools or SMS commands when supported to automate configuration for bulk deployments.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device configuration
- Plaspy automatically detects the tracker protocol so all devices use the same port

## Typical Requirements Before Setup

- A powered FMB130 unit installed or connected to a suitable bench power supply for initial configuration.
- A valid cellular SIM card provisioned for data and the correct APN settings for your mobile operator.
- Access to the official Teltonika configuration method you prefer such as Teltonika Configurator, FOTA WEB, or SMS commands.
- Knowledge of the device firmware version and any relevant release notes that affect parameter IDs or configuration behavior.
- Access to Plaspy account or onboarding guidance so you can confirm the device is visible after configuration.

## How This Tracker Connects to Plaspy

When configured, the FMB130 sends its position and available telemetry to Plaspy by targeting the shared Plaspy endpoint and port. Plaspy ingests the messages and automatically detects the device protocol to present positions, CAN data, and sensor telemetry in the platform.

- The device is set to report to the Plaspy endpoint d.plaspy.com (or the Plaspy IP) on port 8888.
- Messages are transmitted over the selected transport, UDP or TCP, depending on the device configuration and network conditions.
- Plaspy detects the incoming protocol automatically so devices on the same port are handled consistently.
- Telemetry forwarded to Plaspy includes GPS positions and any additional parameters the FMB130 provides to the platform.
- After successful reporting the device becomes visible in Plaspy for monitoring, alerts, and historical reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Teltonika Configurator, Teltonika FOTA WEB, or SMS commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 as the shared port used by Plaspy for all devices.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Configure APN and any operator credentials using placeholders such as {{apn}}, {{apnu}}, and {{apnp}} where required.
6. Apply or save the configuration and restart the device if the tool or device prompts for a reboot.
7. Validate that the device is reporting to Plaspy by checking the device list or live position feed in your Plaspy account.

## Example Configuration Commands

The public Teltonika example command for setting core parameters can be used as an SMS or tool-based configuration on many Teltonika devices. Replace the APN placeholders with your cellular operator values before sending.

- Example Teltonika setparam command:
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command:
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if required by your operator; leave blank if not needed.
- {{apnp}} is the APN password if required by your operator; leave blank if not needed.
- 2004 sets the server domain to d.plaspy.com and 2005 sets the port to 8888.
- 2006 is a device parameter included in the example; consult Teltonika parameter documentation for the exact mapping of numeric parameter IDs to configuration options on your firmware.
- This command may be sent by SMS to the device or applied through Teltonika Configurator depending on your deployment practice.

## Configuration Notes

- Parameter IDs and exact command syntax can vary by firmware version; always confirm parameter mappings for your installed firmware.
- Teltonika Configurator and FOTA WEB provide GUI and mass provisioning options that are safer for large deployments than individual SMS edits.
- SMS based configuration is supported by many Teltonika units and is shown here as a public example, but remote tools may offer additional validation before applying settings.
- Choose UDP or TCP according to your network environment and the instructions for your device firmware; Plaspy accepts either on port 8888.
- Always verify device reporting in Plaspy after configuration to confirm connectivity and correct telemetry flow.

## Why Use Plaspy with This Configuration

Using the FMB130 with Plaspy provides organizations a practical path to consolidate vehicle location, CAN telemetry, and BLE sensor data into a single monitoring platform. The shared Plaspy server settings simplify device onboarding because the same port is used for all devices and Plaspy automatically detects the tracker protocol to streamline device handling.

To learn more about Plaspy and how to manage compatible devices visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and parameter mappings verify information on the manufacturer site https://www.teltonika-gps.com/
