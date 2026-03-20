---
slug: /concox/qbit_m/configuration
id: qbit_m-configuration
sidebar_label: Configuration
title: Concox - Qbit M Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox Qbit M integration with Plaspy using shared server settings and example SMS commands
keywords:
 - Concox Qbit M configuration
 - Concox Qbit M setup
 - Qbit M Plaspy configuration
 - Concox GPS tracker setup
 - Qbit M SMS commands
 - Plaspy server settings
 - personal tracker configuration
 - GPS tracker integration
 - LTE M tracker setup
 - asset tracking configuration
---

# Concox - Qbit M Configuration

This page documents the public configuration context for using the Concox Qbit M with Plaspy. It focuses on the practical, publicly available settings and commands you can use to point a Qbit M device at Plaspy so the tracker reports location and event data to your Plaspy account. Where applicable the page includes example SMS commands published for the Qbit M and describes what you need to prepare before integrating the device with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives at the platform. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands below as the public, commonly used configuration flow for many Qbit M deployments and verify device behavior against current Concox documentation.

## Configuration Overview

The goal of this configuration is to prepare the Qbit M to communicate reliably with Plaspy by setting network access, the correct server endpoint, and appropriate reporting intervals. The public commands for Qbit M are typically applied by SMS and configure APN, server address, reporting timers, and GPRS mode so the device can deliver GNSS and event data to Plaspy.

- Configure the mobile operator APN so the device can access GPRS or LTE data services.
- Point the tracker at the Plaspy server domain or IP and use the shared port for all Plaspy devices.
- Set reporting intervals so position updates match your monitoring needs.
- Enable GPRS or cellular data mode so the device sends updates over the mobile network.
- Validate configuration with a verification command or by confirming the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data is received and uses the same port for all supported devices

These values are the public Plaspy endpoint settings to use when configuring the Qbit M. You can use either the domain d.plaspy.com or the IP address 54.85.159.138 and choose UDP or TCP transport according to the device configuration tool or SMS command format.

## Typical Requirements Before Setup

- A powered and charged Qbit M unit with access to its SMS configuration interface or the manufacturer configuration tool.
- An active SIM card provisioned for data with the correct APN details for your mobile operator.
- APN information for the SIM including APN name and optional username or password if required by the operator.
- The ability to send SMS commands to the device from a mobile phone number that the tracker accepts as a configured admin or control number.
- Access to Plaspy account credentials to validate the device appears in your Plaspy dashboard after setup.
- Basic knowledge of whether the device firmware prefers UDP or TCP for server transport selection, if prompted.

## How This Tracker Connects to Plaspy

The Qbit M sends GNSS positions and device status over the cellular network to the Plaspy server endpoint so Plaspy can ingest the data into maps, history, and alerting workflows. Configuration points such as APN, server address, transport type, and reporting timers determine how frequently and reliably the tracker communicates with Plaspy.

- The tracker is configured to report to the shared Plaspy server endpoint and port listed above.
- Position and event reports are sent over the cellular data connection once GPRS or LTE is enabled.
- Plaspy receives incoming connections on the common port and automatically detects the tracker protocol.
- Reports become visible in Plaspy for live tracking, history playback, and notification rules.
- Event reporting such as panic button presses and low battery can be forwarded to Plaspy once server and timer settings are applied.

## Common Configuration Workflow

1. Access the official Concox Qbit M configuration method such as the device SMS command interface or the manufacturer tool recommended by Concox.
2. Set the APN for the installed SIM using the APN placeholder values provided by your mobile operator.
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration and enable GPRS or cellular data mode on the device.
6. Restart the device if the device or firmware requires a reboot for new network settings to take effect.
7. Validate that the device reports to Plaspy by checking your Plaspy dashboard or by using the device verification command.

## Example Configuration Commands

The Qbit M supports SMS based configuration using the public commands shown here. Send each line as an SMS to the tracker from an authorized number. Preserve placeholders when you substitute APN credentials.

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
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Note: keep the placeholders {{apn}} for APN name, and include {{apnu}} and {{apnp}} if your operator requires an APN username and password. Replace the placeholders with your operator values and remove the username and password fields if not needed.

- Set the GPRS server using domain and port (UDP or TCP transport selection follows device behavior)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using IP and port
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two accepted formats)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS and server parameters
```text
GPRSSET#
```

Send commands in the listed order when order matters—for example set APN first, then server settings, then timer and GPRS enable. The FACTORY# command is optional and should be used only when you want to restore device factory defaults before configuring.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS command syntax or supported parameters; always verify against the device firmware notes when available.
- The Qbit M supports SMS based configuration in the public guidance above; some deployments may prefer a manufacturer configuration tool or provisioning service.
- Choose UDP or TCP according to the device SMS command option or configuration tool; Plaspy accepts either on the shared port.
- Plaspy uses the same port for all supported devices so the port value 8888 is consistent across device configurations.
- If you use the domain d.plaspy.com the device will resolve the domain to the current Plaspy server IP, while direct IP configuration uses 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the Concox Qbit M with Plaspy gives organizations and caregivers a straightforward way to centralize location, event, and alert data from compact personal trackers into one monitoring platform. The Qbit M provides LTE‑M connectivity and GNSS positioning while Plaspy ingests and normalizes incoming reports so you can build real time maps, history playback, and notification rules for safety and light asset management.

To learn more about Plaspy and how it supports tracker integrations visit https://www.plaspy.com. Remember that manufacturer specifications, firmware behavior, and configuration methods can change over time so verify the latest device setup and command syntax on the Concox website https://www.iconcox.com/.
