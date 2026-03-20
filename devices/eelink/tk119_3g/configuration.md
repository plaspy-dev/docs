---
slug: /eelink/tk119_3g/configuration
id: tk119_3g-configuration
sidebar_label: Configuration
title: EElink - TK119‑3G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK119‑3G integration with Plaspy including SMS commands and server settings
keywords:
  - EElink TK119‑3G configuration
  - EElink TK119‑G setup for Plaspy
  - TK119‑3G server configuration
  - TK119‑3G SMS commands
  - TK119‑3G APN setup
  - Plaspy compatible GPS tracker
  - TK119‑3G tracking software configuration
  - TK119‑3G GPS platform setup
  - fleet tracker configuration Plaspy
  - vehicle tracker server settings
---

# EElink - TK119‑3G Configuration

This page documents the public configuration context for using the EElink TK119‑3G tracker with the Plaspy platform. It focuses on the Plaspy server settings you need to enter on the device and includes the SMS configuration commands published for this model so you can prepare the tracker to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation method, and the tools a vendor provides. The TK119‑3G supports SMS based configuration and GPRS reporting, so this guide highlights the Plaspy endpoint, example SMS commands, and practical checks you should perform before verifying device visibility in Plaspy.

## Configuration Overview

The goal of configuration is to prepare the TK119‑3G to communicate reliably with Plaspy using the shared platform server and port, validate connectivity, and enable real time visibility and event reporting inside Plaspy. For the TK119‑3G this commonly means updating APN and server parameters and confirming reporting intervals.

- Configure the device APN so it can use cellular data to reach the Plaspy server.
- Point the TK119‑3G to Plaspy by setting the server domain or server IP and the shared port.
- Set an appropriate reporting timer so location and events arrive at useful frequency.
- Use the published SMS commands for initial configuration or the manufacturer tool if available.
- Verify the device is visible in Plaspy after configuration and that events such as ignition and alarms are reported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — configure the device to use UDP or TCP if it requires a transport selection
- Plaspy automatically detects the tracker protocol when the device reports to the shared server and port

All devices in Plaspy use the same port so you will always configure port 8888 when pointing a TK119‑3G to Plaspy.

## Typical Requirements Before Setup

- Device is powered and accessible for configuration, or has the installer on site to send SMS commands
- An active SIM with cellular data and SMS capability installed in the tracker and APN details available
- A phone or configuration tool able to send SMS commands to the TK119‑3G if using SMS based setup
- Access to the official EElink configuration instructions or firmware notes to confirm model specific command behavior
- A Plaspy account or access to the Plaspy onboarding information to confirm the device appears and reports correctly
- Basic checklist for installation including secure mounting and power connections so the device can report reliably

## How This Tracker Connects to Plaspy

When configured, the TK119‑3G sends location and event data over the cellular network to the Plaspy server endpoint and port where Plaspy ingests the data and maps it to your account. Plaspy’s platform then processes position, ignition, alarms, and configured telemetry for real time monitoring and historical reporting.

- The tracker reports to the shared Plaspy server endpoint at d.plaspy.com or directly to the Plaspy IP
- Data is sent on port 8888 which is the same across all devices supported by Plaspy
- Plaspy automatically detects the tracker protocol when the device connects to the server
- The device transmits periodic location updates according to the configured TIMER value
- Event and alarm messages such as ignition, overspeed, and power loss are forwarded to Plaspy for alerts and logs

## Common Configuration Workflow

1. Access the official EElink configuration method for your unit, typically SMS configuration commands or the vendor supplied configuration tool or software.
2. Set the operator APN so the tracker can establish GPRS data: use the APN command with the carrier values.
3. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the Plaspy IP 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires transport selection.
5. Apply or save the configuration on the device and perform any recommended device restart or power cycle.
6. Validate that the tracker reports to Plaspy and appears in your Plaspy account or onboarding list and that location updates and events are received.
7. If needed, adjust the TIMER or reporting interval and recheck event reporting for reliability.

## Example Configuration Commands

The TK119‑3G can be configured by sending SMS messages to the device. Use the commands below in the order shown where order is important. Label the factory reset command as optional for initial setup only.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the required APN name for your mobile operator. [apnu] and [apnp] are optional APN username and APN password placeholders that you should provide only if your carrier requires them.

- Set the GPRS server by domain (use this to point the device to Plaspy by domain)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP (alternative method)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters on the device
```text
PARAM#
```

Send each command as an SMS from an authorized phone number as required by the device. After sending the server and timer commands, confirm the device reports to Plaspy.

## Configuration Notes

- The SERVER command accepts either the domain form SERVER,1,d.plaspy.com,8888# or the IP form SERVER,0,54.85.159.138,8888# depending on your preference or network needs.
- If your device or firmware requests a transport type, choose UDP or TCP as required; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- SMS based configuration is a common method for TK119‑3G devices but manufacturer tools or USB configuration utilities may also be available depending on firmware and vendor distribution.
- APN fields may require username and password for some carriers; fill [apnu] and [apnp] only when needed.
- Firmware versions and regional hardware variants can alter command syntax or available parameters; verify commands on the device or with official EElink documentation before broad deployment.

## Why Use Plaspy with This Configuration

Using the TK119‑3G with Plaspy delivers straightforward reporting of position, ignition and alarm events into a single fleet management platform. The shared Plaspy server settings simplify deployment across many devices because all Plaspy devices use the same port and the platform handles protocol detection, allowing teams to focus on installation, APN setup, and validation rather than protocol mapping.

To learn more about Plaspy and how it ingests device telemetry visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and command syntax verify information on the manufacturer site https://www.eelink.com.cn/ as device behavior and setup methods can change over time.
