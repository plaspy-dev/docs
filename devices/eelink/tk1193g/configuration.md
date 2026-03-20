---
slug: /eelink/tk1193g/configuration
id: tk1193g-configuration
sidebar_label: Configuration
title: EElink - TK119‑3G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EElink TK119‑3G with Plaspy compatible server settings and SMS configuration examples
keywords:
  - EElink TK119‑3G configuration
  - EElink TK119‑3G setup
  - TK119‑3G Plaspy setup
  - TK119‑3G server configuration
  - GPS tracker configuration Plaspy
  - vehicle tracker setup guide
  - TK119‑3G SMS commands
  - Plaspy server settings
  - fleet tracking tracker configuration
  - GPS platform integration
---

# EElink - TK119‑3G Configuration

This page covers the public configuration context for using the EElink TK119‑3G tracker with Plaspy. It focuses on the practical server settings and manufacturer side commands that are commonly used to point the device to Plaspy so the unit can report location, alarms, and telemetry into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, or vendor configuration tools. The TK119‑3G may be configured via SMS commands as shown below, but always verify any device specific behavior with the manufacturer documentation.

## Configuration Overview

Configuring the TK119‑3G for Plaspy ensures the tracker can establish a reliable GPRS connection and deliver location and event data to the Plaspy platform. The process prepares the device with the correct APN and server values, chooses the transport type if required, and validates reporting behavior so the tracker is visible and actionable inside Plaspy.

- Set the mobile operator APN so the device can use cellular data to reach the Plaspy servers.
- Set the GPRS server to Plaspy using d.plaspy.com or the Plaspy server IP and the shared port.
- Confirm the data upload interval and basic tracking timer so position updates meet your operational needs.
- Validate connectivity and that the device appears within Plaspy after configuration.
- Keep a backup verification command available to review device parameters after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These shared values are the public Plaspy endpoint details you will use when configuring the TK119‑3G so the device can send telemetry and location to the platform.

## Typical Requirements Before Setup

- A powered TK119‑3G tracker with installation completed or mounted for testing.
- An active SIM card with data and SMS enabled and correct APN credentials for the mobile operator.
- Access to the manufacturer configuration method such as SMS commands or the vendor tool that supports the TK119‑3G.
- The APN, APN username, and APN password for the SIM (placeholders shown below as {{apn}}, {{apnu}}, {{apnp}}).
- A phone capable of sending SMS to the device or access to the device configuration utility.
- A Plaspy account and the ability to check device reporting in the Plaspy platform.

## How This Tracker Connects to Plaspy

When configured, the TK119‑3G sends its GPS/LBS position and event messages over the cellular network to the Plaspy server endpoint and port. Plaspy ingests those messages, automatically detects the device protocol, and presents the data for real time tracking, alerts, and reports.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Data is transported over UDP or TCP depending on the device setting and network conditions.
- Location and alarm events such as ignition, overspeed, and crash are transmitted to Plaspy for immediate processing.
- Plaspy’s automatic protocol detection matches the device messages to the correct parser for display and alerts.
- Regular interval reporting (for example TIMER settings) keeps position updates consistent for fleet monitoring.

## Common Configuration Workflow

1. Obtain the official EElink configuration method for the TK119‑3G, typically SMS or the vendor configuration tool, and confirm firmware compatibility.
2. Enter the Plaspy server address as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, which is the shared port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the tracker requires a transport selection and your network prefers one over the other.
5. Configure the APN and any APN credentials so the device can establish a GPRS data session.
6. Apply or save the configuration and restart the device if required by the tracker firmware.
7. Validate that the device reports to Plaspy by checking the tracker in the Plaspy platform and optionally by using the device parameter query command.

## Example Configuration Commands

The TK119‑3G can be configured by sending SMS messages with specific commands. The commands below are public examples provided in the manufacturer configuration content. Preserve placeholders when replacing with your operator values.

1. Optional initial factory reset (only if you need to return to factory defaults)
```text
FACTORY#
```

2. Set the time zone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
- Replace the placeholders with your operator APN credentials. {{apn}} is required. {{apnu}} and {{apnp}} are optional and used when the APN requires a username or password.
```text
APN,{{apn}}
```
or with username and password
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Set the GPRS server to Plaspy by domain (recommended)
```text
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server to Plaspy by IP
```text
SERVER,0,54.85.159.138,8888#
```

6. Set the upload interval to every 60 seconds
```text
TIMER,60#
```

7. Check current parameter settings
```text
PARAM#
```

Note: Keep the order when performing a fresh configuration: APN then SERVER then TIMER is a common practical sequence. Replace {{apn}}, {{apnu}}, and {{apnp}} with the correct values supplied by your mobile operator.

## Configuration Notes

- SMS based configuration is a common method for TK119‑3G devices and is shown here in public manufacturer examples. Use ANTENNA-safe conditions and confirm SMS delivery to the device.
- Choose UDP or TCP according to your network environment; Plaspy supports both and automatically detects the device protocol once messages reach the server.
- All devices on Plaspy use the same port 8888 so you only need to set that port for supported trackers.
- Firmware revisions or regional variants can change command syntax or available commands; confirm the exact command list with the manufacturer if something fails.
- Verify APN credentials thoroughly; incorrect APN settings are the most common reason a device cannot reach the Plaspy servers.

## Why Use Plaspy with This Configuration

Using the TK119‑3G with Plaspy provides a straightforward way to bring the device’s location, ignition status, and alarm events into a single platform for monitoring and reporting. The combination of compact hardware and Plaspy’s shared server endpoint simplifies fleet onboarding and reduces per device configuration complexity.

Learn more about how this configuration works and additional Plaspy features on the main Plaspy website at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer details always verify information on the EElink website at https://www.eelink.com.cn/ since setup methods and device behavior can change over time.
