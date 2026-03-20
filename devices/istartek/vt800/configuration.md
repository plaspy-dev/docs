---
slug: /istartek/vt800/configuration
id: vt800-configuration
sidebar_label: Configuration
title: iStartek - VT800 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek VT800 tracker compatibility with Plaspy server and example SMS commands
keywords:
  - iStartek VT800 configuration
  - iStartek VT800 setup
  - VT800 server configuration
  - VT800 Plaspy setup
  - iStartek GPS tracker configuration
  - VT800 SMS commands
  - vehicle tracking setup VT800
  - VT800 GPRS server settings
  - Plaspy tracker integration
  - fleet management VT800
---

# iStartek - VT800 Configuration

This page documents the public configuration context for using the iStartek VT800 tracker with Plaspy. It focuses on the practical server settings and observable setup steps you can apply so the VT800 reports position data and status to the Plaspy platform. Where available, example SMS configuration commands are included to reflect the device manufacturer guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VT800 supports SMS based configuration and GPRS based reporting as described by the manufacturer, so this page combines Plaspy server requirements with the VT800 public commands and workflow.

## Configuration Overview

The goal of this configuration process is to prepare the VT800 to communicate reliably with the Plaspy server so device locations and events appear in your Plaspy account. Configuration typically includes setting APN for mobile data, configuring the server endpoint and port, selecting transport if required, and validating the device reports after restart.

- Define the mobile operator APN and credentials so the tracker can use GPRS or 4G transport
- Point the device to the Plaspy server endpoint and confirm the correct port
- Choose UDP or TCP transport on the tracker if prompted and save the setting
- Verify reporting interval and buffering behavior so data arrives at Plaspy as expected
- Confirm the tracker appears in Plaspy after configuration and check live updates

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered VT800 with access to the device for configuration and restart
- An active SIM card with mobile data and the correct APN for your operator
- Ability to send SMS commands to the tracker or access to the manufacturer configuration tool
- The APN, APN username, and APN password from your mobile operator if required
- Access to a Plaspy account or a way to verify the device appears on the Plaspy platform
- Awareness of the device firmware version since commands and behavior can vary by firmware

## How This Tracker Connects to Plaspy

When configured, the VT800 sends location and device data to the Plaspy server endpoint and port. Plaspy receives those packets, automatically recognizes the tracker protocol, and presents device position and status in the platform. The VT800 supports buffering GPS data in internal memory when a GPRS or cellular connection is unavailable, allowing later upload when connectivity returns.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888
- The device can use UDP or TCP transport to send packets to Plaspy
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is not required
- Buffered data in the VT800 uploads when the device regains network connectivity
- Dual server configuration on the VT800 can be used to set a primary or secondary upload target

## Common Configuration Workflow

1. Access the official iStartek configuration method such as SMS commands or the vendor tool for the VT800
2. Enter the Plaspy server endpoint by setting d.plaspy.com or the IP 54.85.159.138 as the device server
3. Set the server port to 8888 which is used by Plaspy for all supported devices
4. Choose UDP or TCP transport on the tracker if the device requires transport selection
5. Configure the APN and any APN credentials required by your mobile operator
6. Apply or save the configuration and restart the device if required by the manufacturer
7. Validate that the tracker reports to Plaspy and that positions and events appear in your account

## Example Configuration Commands

The VT800 supports SMS based configuration. The following public commands are provided by the manufacturer for common setup tasks. Preserve placeholders and replace them with your operator values where required.

1. Optional initial step to reset factory settings
```text
FACTORY#
```

2. Set the time zone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
```text
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/if}}#
```
- Explanation of placeholders
  - [apn] is the mobile operator APN name required for data access
  - [apnu] is the APN username when the operator requires it
  - [apnp] is the APN password when the operator requires it
  - If your operator does not require username or password, omit the extra fields

4. Set the GPRS server to use the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

5. Alternative server entry using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888#
```

6. Set the update interval to report every 60 seconds
```text
TIMER,60#
```

7. Check current parameter settings
```text
PARAM#
```

Note: The order shown above follows the manufacturer guidance where server and APN are typically set before enabling regular reporting. Use the factory reset command only when starting from a known blank or unknown state.

## Configuration Notes

- The VT800 supports SMS based configuration as shown, but some deployments use vendor software or an installer tool; follow the method appropriate to your environment
- Firmware and hardware revisions may change command syntax or available features; confirm exact commands for your device firmware
- Choose UDP or TCP based on network and integration needs; Plaspy accepts both transports on port 8888
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so platform-side protocol configuration is usually not required
- When using placeholders such as [apn], provide only the values required by your mobile operator and verify connectivity before relying on live tracking

## Why Use Plaspy with This Configuration

Configuring the VT800 to report to Plaspy gives organizations centralized visibility and operational monitoring for vehicles and assets. With Plaspy receiving position and event data over the shared server endpoint and port, organizations can use the platform to track movement, analyze fleet behavior, and integrate device reports into their operations.

To learn more about Plaspy and supported tracker integration, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer documentation for the VT800 consult the official iStartek resources at https://istartek.com/
