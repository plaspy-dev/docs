---
slug: /winrich/tk102b/configuration
id: tk102b-configuration
sidebar_label: Configuration
title: Winrich - TK102B Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Winrich TK102B GPS tracker configuration and Plaspy compatibility with server and SMS command examples
keywords:
  - Winrich TK102B configuration
  - Winrich TK102B setup
  - TK102B Plaspy configuration
  - TK102B server setup
  - Winrich tracker configuration
  - TK102B SMS commands
  - TK102B GPS tracker setup
  - Plaspy tracker configuration
  - TK102B GPRS configuration
  - Winrich GPS tracker setup
---

# Winrich - TK102B Configuration

This page provides the public configuration context for using the Winrich TK102B GPS tracker with Plaspy. It explains the shared server settings Plaspy uses, shows practical setup steps that are publicly available, and documents SMS commands found in Winrich documentation that are commonly used to point the TK102B at a remote tracking server.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK102B supports SMS and GPRS configuration methods, so this guide focuses on the publicly documented SMS commands and the Plaspy server values you must apply for real-time reporting.

## Configuration Overview

Preparing the TK102B for Plaspy means configuring its network settings, verifying reporting intervals, and confirming that the device can reach Plaspy’s server endpoint. The goal is to ensure the tracker sends position and event data to Plaspy reliably so devices appear in the platform and generate alerts and route logs.

- Configure the device APN and GPRS server address so the tracker can open a connection for data reporting.
- Set the reporting interval to control how often the TK102B sends location updates to Plaspy.
- Validate connectivity with verification commands and check that the device appears in Plaspy after configuration.
- Use factory reset or timezone configuration only when needed during initial setup or troubleshooting.
- Preserve and use the TF card backup for route history when GSM temporarily fails (device feature).

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol  
- Plaspy uses the same port for all supported devices, so set port 8888 consistently

## Typical Requirements Before Setup

- A charged and functional TK102B with access to its SMS configuration interface or manufacturer configuration tool.  
- An active SIM card with voice and/or data capability depending on whether you will use SMS or GPRS for configuration.  
- Ability to send SMS messages to the tracker number for SMS-based configuration commands.  
- Knowledge of the mobile operator APN settings for the SIM card you are using (leave APN placeholders if you prefer to use automatic APN).  
- Basic access to the official Winrich documentation or vendor instructions for device-specific behavior and any firmware notes.  
- A plan to validate device connectivity after configuration by checking the device status and appearance in Plaspy.

## How This Tracker Connects to Plaspy

The TK102B can be set to use GPRS to open a socket connection to Plaspy and send periodic position and event reports. Using the server endpoint and port shown above, the tracker reports location updates, alarms, and status messages so Plaspy can display live position, generate alerts, and retain route history.

- The tracker is configured to report to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.  
- Data transport may use UDP or TCP depending on device settings; choose the transport the device supports and save the configuration.  
- Plaspy automatically detects the tracker protocol so no special protocol selection is required within the platform.  
- Regular interval reports are used for live tracking and route reconstruction in Plaspy.  
- Event messages such as SOS or overspeed alerts will be forwarded to Plaspy when configured and transmitted by the device.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the Winrich configuration tool per the device manual.  
2. Enter the Plaspy server address by using either d.plaspy.com or the numeric server address 54.85.159.138 depending on the device command format.  
3. Set the server port to 8888 as Plaspy uses the same port for all devices.  
4. Choose UDP or TCP if the device requires a transport selection and save that option.  
5. Configure the APN for the SIM if required, then set the GPRS server entry to point to Plaspy.  
6. Apply or save the configuration on the device and restart the unit if required by the manufacturer steps.  
7. Validate that the device reports to Plaspy by using verification commands and confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The TK102B supports SMS-based configuration. The following commands are the public SMS commands commonly documented for TK102B setup. Send each command as an SMS to the device phone number in the order shown for initial configuration. Label explanations follow each command.

- Factory reset (optional initial step)
```text
940#
```

- Set the time zone to UTC+0
```text
801#W0#
```

- Set the operator APN (replace placeholders with your operator values)
```text
802#[apn]#[apnu]#[apnp]#
```
Explanation: [apn] is the operator APN. [apnu] is the APN username if required. [apnp] is the APN password if required. If your operator does not require username or password, you can omit those placeholders per device behavior.

- Set the GPRS server to Plaspy (use numeric IP and port)
```text
803#54.85.159.138#8888#
```
Explanation: This sets the tracker to report to Plaspy’s server IP and port. You may also use d.plaspy.com where the device supports domain names.

- Set the update/reporting interval to 60 seconds
```text
730#60#
```

- Check current settings
```text
886#
```

- Check device status
```text
902#
```

Send these SMS commands from the authorized number or admin phone as required by your tracker configuration and manufacturer instructions.

## Configuration Notes

- Firmware and hardware revisions may change exact command syntax or supported parameters; always cross-check with the Winrich manual for your firmware version.  
- The TK102B supports SMS-based configuration as shown above; some installers prefer the Winrich configuration tool or direct serial configuration when available.  
- Choose UDP or TCP based on your deployment needs; both transports are supported for port 8888 and Plaspy will accept either while automatically detecting the specific protocol.  
- If using domain names instead of IP, confirm the tracker firmware supports DNS resolution; otherwise use the numeric server IP shown above.  
- Use verification commands (886# and 902#) after configuration to confirm settings and device status before expecting data in Plaspy.

## Why Use Plaspy with This Configuration

Using the TK102B with Plaspy centralizes live location, event alerts, and route history into a single platform for operational visibility and faster responses. Plaspy’s automatic protocol detection and consistent server endpoint make it straightforward to integrate devices that support standard GPRS reporting, so you can focus on deployment and monitoring rather than protocol compatibility.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify details on the Winrich website at http://www.winrichgroup.com/en/ since device configuration methods and behavior can change over time.
